import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import {
  GROUPS,
  GroupKey,
  getGroupPublications,
  getGroupArticlesTotal,
  getGroupPrismaUrl,
  PrismaPublication,
} from '../data/research';

type Filter = 'all' | GroupKey;
const FILTERS: Filter[] = ['all', 'tep130', 'tep1000'];

const groupAccent: Record<GroupKey, string> = {
  tep130:
    'border-brand-blue/30 bg-brand-blue/[0.06] text-brand-blue dark:border-brand-blue-soft/30 dark:bg-brand-blue-soft/[0.08] dark:text-brand-blue-soft',
  tep1000:
    'border-brand-red/30 bg-brand-red/[0.06] text-brand-red dark:border-brand-red-soft/30 dark:bg-brand-red-soft/[0.08] dark:text-brand-red-soft',
};

interface RowData extends PrismaPublication {
  group: GroupKey;
}

const Publications: React.FC = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<Filter>('all');

  /** Merge publications from both groups, dedupe by id (some are shared),
   *  sort by year desc + title. */
  const allRows: RowData[] = useMemo(() => {
    const seen = new Set<string>();
    const rows: RowData[] = [];
    for (const g of GROUPS) {
      for (const p of getGroupPublications(g)) {
        if (seen.has(p.id)) continue;
        seen.add(p.id);
        rows.push({ ...p, group: g });
      }
    }
    rows.sort((a, b) => {
      if (a.year !== b.year) return Number(b.year) - Number(a.year);
      return a.title.localeCompare(b.title);
    });
    return rows;
  }, []);

  const visible = useMemo(
    () => (filter === 'all' ? allRows : allRows.filter((r) => r.group === filter)),
    [allRows, filter],
  );

  const totals: Record<GroupKey, number> = {
    tep130: getGroupArticlesTotal('tep130'),
    tep1000: getGroupArticlesTotal('tep1000'),
  };

  return (
    <Section id="publications" tone="alt" ariaLabel={t('publications.title')}>
      <SectionHeader
        eyebrow={t('publications.eyebrow')}
        title={t('publications.title')}
        lede={t('publications.lede')}
        ledeEmphasize={['PRISMA', 'TEP-130', 'TEP-1000']}
        ledeLinks={{
          'TEP-130': 'https://prisma.us.es/colectivo/grupo/TEP-130#publicaciones',
          'TEP-1000': 'https://prisma.us.es/colectivo/grupo/TEP-1000#publicaciones',
        }}
      />

      <div className="mt-10 flex flex-wrap items-center gap-2">
        {FILTERS.map((f) => {
          const isActive = filter === f;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={isActive}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? 'bg-ink text-white shadow-medium dark:bg-white dark:text-surface-dark'
                  : 'border border-line bg-white text-ink-soft hover:border-ink/30 hover:text-ink dark:border-white/15 dark:bg-white/[0.04] dark:text-white/70 dark:hover:border-white/30 dark:hover:text-white'
              }`}
            >
              {t(`publications.filters.${f}`)}
            </button>
          );
        })}
        <span className="ml-auto font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute dark:text-white/50">
          {String(visible.length).padStart(2, '0')} ·{' '}
          {visible.length === 1 ? t('publications.unit.one') : t('publications.unit.many')}
        </span>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-white shadow-soft dark:border-white/10 dark:bg-surface-dark-alt dark:shadow-none">
        {visible.map((pub, i) => (
          <Reveal key={pub.id} delay={(i % 4) * 40}>
            <a
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full flex-col gap-3 border-b border-line px-4 py-4 transition-colors last:border-0 hover:bg-surface-alt dark:border-white/10 dark:hover:bg-white/[0.04] sm:px-6 sm:py-5 md:flex-row md:items-center md:gap-4 md:py-6"
            >
              <div className="flex w-full shrink-0 flex-wrap items-center gap-x-2.5 gap-y-1.5 md:w-44 md:flex-col md:items-start md:gap-1.5">
                <span className="font-mono text-sm font-medium text-ink dark:text-white">
                  {pub.year}
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] ${groupAccent[pub.group]}`}
                >
                  {t(`publications.tags.${pub.group}`)}
                </span>
                <span className="block w-full break-words text-[11px] italic text-ink-mute dark:text-white/50 md:truncate md:text-[13px]">
                  {pub.journal}
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="break-words font-display text-[15px] font-medium leading-snug text-ink transition-colors display-balance group-hover:text-brand-blue dark:text-white dark:group-hover:text-brand-blue-soft sm:text-base md:text-lg">
                  {pub.title}
                </h3>
              </div>
              <ArrowUpRight
                aria-hidden="true"
                className="mt-0.5 hidden h-5 w-5 shrink-0 text-ink-mute transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-blue dark:text-white/45 dark:group-hover:text-brand-blue-soft md:block"
              />
            </a>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 border-t border-line/70 pt-8 dark:border-white/10">
        <p className="mx-auto max-w-2xl text-center text-sm text-ink-mute text-pretty dark:text-white/55">
          {t('publications.disclaimer')}
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`${getGroupPrismaUrl('tep130')}#publicaciones`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <span>
              {t('publications.viewAllTep130')} · {totals.tep130}
            </span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={`${getGroupPrismaUrl('tep1000')}#publicaciones`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <span>
              {t('publications.viewAllTep1000')} · {totals.tep1000}
            </span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Publications;
