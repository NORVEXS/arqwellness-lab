#!/usr/bin/env node
/**
 * Fetches members AND recent publications of the PAIDI research groups
 * TEP-130 and TEP-1000 directly from PRISMA (USE) and writes a JSON
 * file that the React app consumes.
 *
 * Output: src/data/research-members.generated.json
 *
 * Run automatically before each build via the `prebuild` npm script.
 * If PRISMA is unreachable, the script keeps the previously generated
 * JSON in place (does NOT fail the build) so we always have something.
 */
import { writeFile, readFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_FILE = resolve(__dirname, '..', 'src', 'data', 'research-members.generated.json');

const GROUPS = [
  { key: 'tep130', url: 'https://prisma.us.es/colectivo/grupo/TEP-130' },
  { key: 'tep1000', url: 'https://prisma.us.es/colectivo/grupo/TEP-1000' },
];

const MEMBER_RE =
  /<a\s+href=['"]https:\/\/prisma\.us\.es\/investigador\/(\d+)['"][^>]*>\s*([^<]+?)\s*<\/a>\s*<\/td>\s*<td>([^<]+)<\/td>/g;

const PUB_RE =
  /<tr\s+class=['"]rowHide['"]\s+data-type=([^\s>]+)\s*>\s*<td>([^<]+)<\/td>\s*<td>(\d{4})<\/td>\s*<td>\s*<a\s+href=['"]https:\/\/prisma\.us\.es\/publicacion\/(\d+)['"][^>]*>([\s\S]*?)<\/a>\s*<\/td>\s*<td>([^<]*)<\/td>\s*<\/tr>/g;

/** Max number of recent publications kept per group (Article type only) */
const PUBS_PER_GROUP = 6;

/** Title-case a journal name that PRISMA stores in ALL CAPS */
const STOPWORDS = new Set([
  'and', 'or', 'of', 'the', 'in', 'on', 'for', 'a', 'an', 'to', 'at', 'by', 'with',
]);
const KEEP_UPPER = new Set(['AI', 'IAQ', 'UV', 'CE', 'ASHRAE', 'IEEE', 'USA', 'UK', 'EU']);
function prettyJournal(raw) {
  if (!raw) return '';
  // If it's already mixed case, leave it
  if (raw !== raw.toUpperCase()) return raw;
  const words = raw.toLowerCase().split(/(\s+|-)/);
  return words
    .map((w, i) => {
      if (/^\s+$|^-$/.test(w) || !w) return w;
      const up = w.toUpperCase();
      if (KEEP_UPPER.has(up)) return up;
      // Keep stopwords lowercase unless they're the first word
      if (i > 0 && STOPWORDS.has(w)) return w;
      return w.charAt(0).toUpperCase() + w.slice(1);
    })
    .join('');
}

/** "Sendra Salas, Juan José" → "Juan José Sendra Salas" */
function toDisplayName(raw) {
  const parts = raw.split(',').map((p) => p.trim());
  if (parts.length < 2) return raw;
  const [surnames, given] = parts;
  return `${given} ${surnames}`;
}

/** Shortened name (1 surname) for compact UI: "Juan José Sendra" */
function toShortName(raw) {
  const parts = raw.split(',').map((p) => p.trim());
  if (parts.length < 2) return raw;
  const surnames = parts[0].split(/\s+/);
  const given = parts[1];
  return `${given} ${surnames[0]}`;
}

/** Normalises role text → 'ip' | 'member' */
function normaliseRole(roleRaw) {
  const r = roleRaw.toLowerCase();
  if (r.includes('investigador') && r.includes('principal')) return 'ip';
  if (r.includes('investigadora') && r.includes('principal')) return 'ip';
  return 'member';
}

async function fetchGroup({ key, url }) {
  const res = await fetch(url, {
    headers: {
      'User-Agent':
        'arqwellness-lab-static-site/1.0 (+https://institucional.us.es/arqwellness/)',
      Accept: 'text/html',
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} on ${url}`);
  const html = await res.text();
  const members = [];
  MEMBER_RE.lastIndex = 0;
  let m;
  while ((m = MEMBER_RE.exec(html))) {
    const [, id, rawName, rawRole] = m;
    members.push({
      id,
      url: `https://prisma.us.es/investigador/${id}`,
      fullName: toDisplayName(rawName),
      shortName: toShortName(rawName),
      role: normaliseRole(rawRole),
    });
  }
  if (members.length === 0)
    throw new Error(`No members parsed from ${url} (HTML structure may have changed)`);
  // Sort: IP first, then alphabetical by surname (= raw order from PRISMA)
  members.sort((a, b) => {
    if (a.role !== b.role) return a.role === 'ip' ? -1 : 1;
    return 0;
  });

  // --- Publications ---
  const allPubs = [];
  PUB_RE.lastIndex = 0;
  let p;
  while ((p = PUB_RE.exec(html))) {
    const [, dataType, typeLabel, year, id, title, source] = p;
    allPubs.push({
      id,
      url: `https://prisma.us.es/publicacion/${id}`,
      type: typeLabel.trim(),
      dataType: dataType.trim(),
      year,
      title: title.replace(/\s+/g, ' ').trim(),
      journal: prettyJournal(source.trim()),
    });
  }
  // Keep only Articles (JCR-indexed) and the most recent N
  const articles = allPubs.filter((x) => x.type === 'Artículo').slice(0, PUBS_PER_GROUP);
  // Totals by type for the "stats" line
  const totals = {};
  for (const x of allPubs) totals[x.type] = (totals[x.type] || 0) + 1;
  totals.total = allPubs.length;

  return { key, url, members, publications: articles, publicationsTotal: totals };
}

async function main() {
  const results = {};
  for (const g of GROUPS) {
    process.stdout.write(`[prisma] Fetching ${g.key} … `);
    try {
      const data = await fetchGroup(g);
      results[g.key] = data;
      console.log(`${data.members.length} members`);
    } catch (err) {
      console.warn(`\n[prisma] WARNING fetching ${g.key}: ${err.message}`);
      results[g.key] = null;
    }
  }

  // If both failed and we have a previous file, keep it
  if (!results.tep130 && !results.tep1000 && existsSync(OUT_FILE)) {
    console.warn('[prisma] Both fetches failed — keeping existing generated JSON.');
    return;
  }

  // If we have a previous file, merge: overwrite only the groups we managed to fetch
  let previous = { tep130: null, tep1000: null };
  if (existsSync(OUT_FILE)) {
    try {
      previous = JSON.parse(await readFile(OUT_FILE, 'utf8')).groups ?? previous;
    } catch {
      /* ignore */
    }
  }

  const merged = {
    generatedAt: new Date().toISOString(),
    source: 'https://prisma.us.es/',
    groups: {
      tep130: results.tep130 ?? previous.tep130,
      tep1000: results.tep1000 ?? previous.tep1000,
    },
  };

  await mkdir(dirname(OUT_FILE), { recursive: true });
  await writeFile(OUT_FILE, JSON.stringify(merged, null, 2) + '\n', 'utf8');
  console.log(`[prisma] Wrote ${OUT_FILE}`);
}

main().catch((err) => {
  console.error('[prisma] Fatal error:', err);
  // Never fail the build — just log
  process.exit(0);
});
