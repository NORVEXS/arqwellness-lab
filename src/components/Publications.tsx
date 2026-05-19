import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import { PUBLICATIONS, PubTopic } from '../data/publications';

type Filter = 'all' | PubTopic;
const FILTERS: Filter[] = ['all', 'lighting', 'energy', 'comfort'];

const topicDot: Record<PubTopic, string> = {
  lighting: 'bg-brand-red',
  energy: 'bg-brand-purple',
  comfort: 'bg-brand-blue',
};

const topicLabel: Record<PubTopic, string> = {
  lighting: 'publications.filters.lighting',
  energy: 'publications.filters.energy',
  comfort: 'publications.filters.comfort',
};

const Publications: React.FC = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<Filter>('all');
  const [expanded, setExpanded] = useState<string | null>(null);

  const visible = useMemo(
    () => PUBLICATIONS.filter((p) => filter === 'all' || p.topic === filter),
    [filter],
  );

  return (
    <Section id="publications" tone="alt" ariaLabel={t('publications.title')}>
      <SectionHeader
        eyebrow={t('publications.eyebrow')}
        title={t('publications.title')}
        lede={t('publications.lede')}
      />

      <div className="mt-10 flex flex-wrap items-center gap-2">
        {FILTERS.map((f) => {
          const isActive = filter === f;
          return (
            <button
              key={f}
              type="button"
              onClick={() => {
                setFilter(f);
                setExpanded(null);
              }}
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
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-white shadow-soft dark:border-white/10 dark:bg-surface-dark-alt dark:shadow-none">
        {visible.map((pub, i) => {
          const isOpen = expanded === pub.id;
          const keywords = t(`${pub.i18nKey}.keywords`, { returnObjects: true }) as string[];
          return (
            <Reveal key={pub.id} delay={(i % 4) * 50}>
              <article
                className={`group border-b border-line last:border-0 dark:border-white/10 ${
                  isOpen ? 'bg-surface-alt/40 dark:bg-white/[0.03]' : ''
                }`}
              >
                <button
                  type="button"
                  onClick={() => setExpanded(isOpen ? null : pub.id)}
                  aria-expanded={isOpen}
                  aria-controls={`pub-${pub.id}`}
                  className="flex w-full flex-col items-start gap-4 px-6 py-6 text-left transition-colors hover:bg-surface-alt dark:hover:bg-white/[0.04] md:flex-row md:items-start"
                >
                  <div className="flex w-full shrink-0 flex-wrap items-center gap-x-3 gap-y-1.5 md:w-48 md:flex-col md:items-start md:gap-1.5">
                    <span className="font-mono text-sm font-medium text-ink dark:text-white">
                      {pub.year}
                    </span>
                    <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute dark:text-white/55">
                      <span
                        aria-hidden="true"
                        className={`h-1.5 w-1.5 rounded-full ${topicDot[pub.topic]}`}
                      />
                      {t(topicLabel[pub.topic])}
                    </span>
                    <span className="block w-full truncate text-xs italic text-ink-mute dark:text-white/50 md:text-[13px]">
                      {pub.journal}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg font-medium leading-snug text-ink transition-colors display-balance group-hover:text-brand-blue dark:text-white dark:group-hover:text-brand-blue-soft">
                      {t(`${pub.i18nKey}.title`)}
                    </h3>
                    <p className="mt-2 text-sm text-ink-soft dark:text-white/65">{pub.authors}</p>
                  </div>
                  <ChevronDown
                    aria-hidden="true"
                    className={`hidden h-5 w-5 shrink-0 text-ink-mute transition-transform duration-300 dark:text-white/45 md:block ${
                      isOpen ? 'rotate-180 text-brand-blue dark:text-brand-blue-soft' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                <div
                  id={`pub-${pub.id}`}
                  className="grid animate-fade-in gap-8 px-6 pb-7 pt-1 md:grid-cols-[44%_1fr] md:pl-[calc(1.5rem+12rem+1rem)]"
                >
                  <div>
                    <h4 className="eyebrow">{t('publications.abstract')}</h4>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft text-pretty dark:text-white/70">
                      {t(`${pub.i18nKey}.abstract`)}
                    </p>
                  </div>
                  <div className="space-y-5">
                    <div>
                      <h4 className="eyebrow">{t('publications.openInstitutional')}</h4>
                      <a
                        href={pub.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group mt-2 flex w-full max-w-full items-center gap-2 rounded-lg border border-line bg-white px-3 py-2 transition-all duration-300 hover:border-brand-blue/40 hover:bg-brand-blue/[0.04] dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-brand-blue-soft/40 dark:hover:bg-white/[0.07]"
                      >
                        <span className="shrink-0 rounded bg-ink/[0.06] px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-ink-soft dark:bg-white/10 dark:text-white/70">
                          PUB
                        </span>
                        <span className="min-w-0 flex-1 truncate text-sm text-ink-soft transition-colors group-hover:text-brand-blue dark:text-white/70 dark:group-hover:text-brand-blue-soft">
                          {pub.journal} · {pub.year}
                        </span>
                        <ArrowUpRight
                          className="h-3.5 w-3.5 shrink-0 text-ink-mute transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-blue dark:text-white/45 dark:group-hover:text-brand-blue-soft"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                    {pub.doi && (
                      <div>
                        <h4 className="eyebrow">{t('publications.doi')}</h4>
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group mt-2 flex w-full max-w-full items-center gap-2 rounded-lg border border-line bg-white px-3 py-2 transition-all duration-300 hover:border-brand-blue/40 hover:bg-brand-blue/[0.04] dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-brand-blue-soft/40 dark:hover:bg-white/[0.07]"
                        >
                          <span className="shrink-0 rounded bg-ink/[0.06] px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-ink-soft dark:bg-white/10 dark:text-white/70">
                            DOI
                          </span>
                          <span className="min-w-0 flex-1 truncate font-mono text-xs text-ink-soft transition-colors group-hover:text-brand-blue dark:text-white/70 dark:group-hover:text-brand-blue-soft">
                            {pub.doi}
                          </span>
                          <ArrowUpRight
                            className="h-3.5 w-3.5 shrink-0 text-ink-mute transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-blue dark:text-white/45 dark:group-hover:text-brand-blue-soft"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                    )}
                    <div>
                      <h4 className="eyebrow">{t('publications.keywords')}</h4>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {keywords.map((k) => (
                          <span
                            key={k}
                            className="rounded-md bg-ink/[0.04] px-2.5 py-1 text-xs text-ink-soft dark:bg-white/[0.06] dark:text-white/70"
                          >
                            {k}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                )}
              </article>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-12 border-t border-line/70 pt-8 dark:border-white/10">
        <p className="mx-auto max-w-2xl text-center text-sm text-ink-mute text-pretty dark:text-white/55">
          {t('publications.disclaimer')}
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://prisma.us.es/colectivo/grupo/TEP-130"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <span>{t('publications.viewAllTep130')}</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="https://prisma.us.es/colectivo/grupo/TEP-1000"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <span>{t('publications.viewAllTep1000')}</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Publications;
