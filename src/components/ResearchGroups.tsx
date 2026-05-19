import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Users, ChevronDown, ArrowUpRight, Star, FileText } from 'lucide-react';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import {
  GROUPS,
  GroupKey,
  getGroupMembers,
  getGroupPublications,
  getGroupArticlesTotal,
} from '../data/research';

const MEMBER_PREVIEW = 6;
const PUB_PREVIEW = 4;
const DESCRIPTION_CLAMP = 320; // chars

const initials = (raw: string) =>
  raw
    .split(' ')
    .filter(Boolean)
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

const accent: Record<GroupKey, { ring: string; chip: string; glow: string }> = {
  tep130: {
    ring: 'before:bg-gradient-to-br before:from-brand-blue before:to-brand-purple',
    chip: 'from-brand-blue to-brand-purple',
    glow: 'hover:shadow-glow',
  },
  tep1000: {
    ring: 'before:bg-gradient-to-br before:from-brand-red before:to-brand-purple',
    chip: 'from-brand-red to-brand-purple',
    glow: 'hover:shadow-[0_18px_48px_rgba(162,1,3,0.16)]',
  },
};

const ResearchGroups: React.FC = () => {
  const { t } = useTranslation();
  const [expandedMembers, setExpandedMembers] = useState<Record<GroupKey, boolean>>({
    tep130: false,
    tep1000: false,
  });

  return (
    <Section id="research-groups" tone="alt" ariaLabel={t('groups.title')}>
      <SectionHeader
        eyebrow={t('groups.eyebrow')}
        title={t('groups.title')}
        lede={t('groups.lede')}
        ledeEmphasize={['TEP-130', 'TEP-1000', 'IUACC']}
        ledeLinks={{
          'TEP-130': 'https://prisma.us.es/colectivo/grupo/TEP-130',
          'TEP-1000': 'https://prisma.us.es/colectivo/grupo/TEP-1000',
        }}
      />

      <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-2">
        {GROUPS.map((g, idx) => {
          const members = getGroupMembers(g);
          const code = t(`groups.${g}.code`);
          const groupUrl = `https://prisma.us.es/colectivo/grupo/${code}`;
          const pubsUrl = `${groupUrl}#publicaciones`;
          const description = t(`groups.${g}.description`);
          const isExpanded = expandedMembers[g];
          const visibleMembers = isExpanded ? members : members.slice(0, MEMBER_PREVIEW);
          const hiddenCount = Math.max(0, members.length - MEMBER_PREVIEW);
          const isLong = description.length > DESCRIPTION_CLAMP;
          const publications = getGroupPublications(g).slice(0, PUB_PREVIEW);
          const articlesTotal = getGroupArticlesTotal(g);

          return (
            <Reveal key={g} delay={idx * 100} className="h-full">
              <article
                className={`relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-5 shadow-soft transition-all duration-500 ease-out-quart dark:border-white/10 dark:bg-surface-dark-alt dark:shadow-none sm:p-6 lg:p-8 ${accent[g].glow}`}
              >
                <div
                  className={`pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-[0.07] bg-gradient-to-br ${accent[g].chip}`}
                  aria-hidden="true"
                />

                <header className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <a
                      href={groupUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/code inline-flex items-center gap-1.5 font-mono text-eyebrow uppercase tracking-eyebrow text-ink-mute transition-colors hover:text-brand-blue dark:text-white/50 dark:hover:text-brand-blue-soft"
                    >
                      <span>{code}</span>
                      <ArrowUpRight className="h-3 w-3 opacity-60 transition-all duration-300 group-hover/code:opacity-100 group-hover/code:-translate-y-0.5 group-hover/code:translate-x-0.5" />
                    </a>
                    <h3 className="mt-2 font-display text-xl font-medium leading-snug display-balance sm:text-2xl">
                      <a
                        href={groupUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/title inline text-ink transition-colors hover:text-brand-blue dark:text-white dark:hover:text-brand-blue-soft"
                      >
                        {t(`groups.${g}.name`)}
                      </a>
                    </h3>
                  </div>
                  <span
                    aria-hidden="true"
                    className={`inline-flex items-center justify-center rounded-full bg-gradient-to-br ${accent[g].chip} px-3 py-1 font-mono text-[11px] font-medium text-white shadow-medium`}
                  >
                    PAIDI
                  </span>
                </header>

                <p className="mt-4 text-sm leading-relaxed text-ink-soft text-pretty dark:text-white/70 sm:mt-5 sm:text-base">
                  {isLong ? (
                    <>
                      {description.slice(0, DESCRIPTION_CLAMP).replace(/\s+\S*$/, '')}…{' '}
                      <a
                        href={groupUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-brand-blue underline decoration-brand-blue/30 underline-offset-4 transition-colors hover:text-brand-purple hover:decoration-brand-purple/50 dark:text-brand-blue-soft dark:decoration-brand-blue-soft/30"
                      >
                        {t('groups.continueReading')}
                      </a>
                    </>
                  ) : (
                    description
                  )}
                </p>

                <div className="mt-6 sm:mt-7">
                  <h4 className="flex items-center justify-between gap-2 font-mono text-eyebrow uppercase tracking-eyebrow text-ink-mute dark:text-white/55">
                    <span className="flex items-center gap-2">
                      <Users className="h-3.5 w-3.5" />
                      <span>
                        {t('groups.membersTitle')} · {members.length}
                      </span>
                    </span>
                    <a
                      href={groupUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 normal-case tracking-normal text-ink-mute transition-colors hover:text-brand-blue dark:text-white/50 dark:hover:text-brand-blue-soft"
                    >
                      <span>PRISMA</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </h4>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {visibleMembers.map((m) => {
                      const isIp = m.role === 'ip';
                      const chipClasses = `group/m inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs transition-colors ${
                        isIp
                          ? 'border-brand-blue/30 bg-brand-blue/[0.06] dark:border-brand-blue-soft/30 dark:bg-brand-blue-soft/[0.08]'
                          : 'border-line bg-surface-alt dark:border-white/10 dark:bg-white/[0.04]'
                      } hover:border-brand-blue/50 hover:bg-brand-blue/[0.1] dark:hover:border-brand-blue-soft/50 dark:hover:bg-white/[0.08]`;
                      return (
                        <li key={m.id}>
                          <a
                            href={m.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={`${m.fullName}${isIp ? ' · ' + t('groups.ipLabel') : ''}`}
                            className={chipClasses}
                          >
                            <span
                              aria-hidden="true"
                              className={`flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br ${accent[g].chip} font-mono text-[10px] font-medium text-white`}
                            >
                              {initials(m.shortName)}
                            </span>
                            <span className="text-ink-soft transition-colors dark:text-white/80">
                              {m.shortName}
                            </span>
                            {isIp && (
                              <span
                                aria-label={t('groups.ipLabel')}
                                className="inline-flex items-center"
                                title={t('groups.ipLabel')}
                              >
                                <Star
                                  className="h-3 w-3 fill-brand-blue text-brand-blue dark:fill-brand-blue-soft dark:text-brand-blue-soft"
                                  aria-hidden="true"
                                />
                              </span>
                            )}
                            <ArrowUpRight className="h-3 w-3 text-ink-mute transition-colors group-hover/m:text-brand-blue dark:text-white/40 dark:group-hover/m:text-brand-blue-soft" />
                          </a>
                        </li>
                      );
                    })}
                    {hiddenCount > 0 && (
                      <li>
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedMembers((s) => ({ ...s, [g]: !s[g] }))
                          }
                          aria-expanded={isExpanded}
                          className="group/toggle inline-flex items-center gap-1.5 rounded-full border border-dashed border-line bg-transparent px-3 py-1.5 text-xs font-medium text-ink-soft transition-colors hover:border-brand-blue/50 hover:bg-brand-blue/[0.04] hover:text-brand-blue dark:border-white/15 dark:text-white/70 dark:hover:border-brand-blue-soft/50 dark:hover:text-brand-blue-soft"
                        >
                          <span>
                            {isExpanded
                              ? t('groups.showLess')
                              : t('groups.showMore', { count: hiddenCount })}
                          </span>
                          <ChevronDown
                            className={`h-3.5 w-3.5 transition-transform duration-300 ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      </li>
                    )}
                  </ul>
                </div>

                {publications.length > 0 && (
                  <div className="mt-6 sm:mt-7">
                    <h4 className="flex items-center justify-between gap-2 font-mono text-eyebrow uppercase tracking-eyebrow text-ink-mute dark:text-white/55">
                      <span className="flex items-center gap-2">
                        <FileText className="h-3.5 w-3.5" />
                        <span>
                          {t('groups.publicationsTitle')} · {articlesTotal}
                        </span>
                      </span>
                      <a
                        href={pubsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 normal-case tracking-normal text-ink-mute transition-colors hover:text-brand-blue dark:text-white/50 dark:hover:text-brand-blue-soft"
                      >
                        <span>PRISMA</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </h4>
                    <ol className="mt-3 space-y-2">
                      {publications.map((p) => (
                        <li key={p.id}>
                          <a
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/pub flex items-start gap-2.5 rounded-xl border border-line bg-surface-alt/60 px-3 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue/40 hover:bg-white hover:shadow-soft dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-brand-blue-soft/40 dark:hover:bg-white/[0.06] sm:gap-3 sm:px-3.5 sm:py-3"
                          >
                            <span className="shrink-0 font-mono text-[10px] font-semibold text-ink-mute dark:text-white/55 sm:text-[11px]">
                              {p.year}
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="block break-words text-[13px] leading-snug text-ink text-pretty dark:text-white/85 sm:text-sm">
                                {p.title}
                              </span>
                              <span className="mt-1 block break-words text-[11px] italic text-ink-mute dark:text-white/50 sm:text-xs">
                                {p.journal}
                              </span>
                            </span>
                            <ArrowUpRight
                              aria-hidden="true"
                              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ink-mute transition-all duration-300 group-hover/pub:-translate-y-0.5 group-hover/pub:translate-x-0.5 group-hover/pub:text-brand-blue dark:text-white/40 dark:group-hover/pub:text-brand-blue-soft"
                            />
                          </a>
                        </li>
                      ))}
                    </ol>
                    <div className="mt-4 text-right">
                      <a
                        href={pubsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-eyebrow uppercase tracking-eyebrow text-brand-blue transition-colors hover:text-brand-purple dark:text-brand-blue-soft"
                      >
                        <span>
                          {t('groups.viewAllPublications', {
                            count: articlesTotal,
                          })}
                        </span>
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                )}

              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};

export default ResearchGroups;
