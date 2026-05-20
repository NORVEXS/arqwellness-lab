import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import { PROJECTS, ProjectType } from '../data/projects';

type Filter = 'all' | ProjectType;
const FILTERS: Filter[] = ['all', 'rd', 'contract'];

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<Filter>('all');

  const visible = useMemo(
    () => PROJECTS.filter((p) => filter === 'all' || p.type === filter),
    [filter],
  );

  return (
    <Section id="projects" tone="default" ariaLabel={t('projects.title')}>
      <SectionHeader
        eyebrow={t('projects.eyebrow')}
        title={t('projects.title')}
        lede={t('projects.lede')}
      />

      {/* Filters */}
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
              {t(`projects.filters.${f}`)}
            </button>
          );
        })}
        <span className="ml-auto font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute dark:text-white/50">
          {String(visible.length).padStart(2, '0')} ·{' '}
          {visible.length === 1 ? t('projects.unit.one') : t('projects.unit.many')}
        </span>
      </div>

      {/* Grid */}
      <div className="mt-8 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <Reveal key={p.id} delay={(i % 6) * 50} className="h-full">
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-2xl border border-line bg-white p-4 shadow-soft transition-all duration-450 ease-out-quart hover:-translate-y-1 hover:border-line-strong/70 hover:shadow-medium dark:border-white/10 dark:bg-surface-dark-alt dark:shadow-none dark:hover:border-white/20 sm:p-5"
              aria-label={`${p.name} — ${t(`projects.tags.${p.type}`)}`}
            >
              <header className="flex items-center justify-between gap-3">
                <span
                  className={
                    p.type === 'rd'
                      ? 'tag-blue !text-[10px]'
                      : 'tag-red !text-[10px]'
                  }
                >
                  {t(`projects.tags.${p.type}`)}
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-mute transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-blue dark:text-white/45 dark:group-hover:text-brand-blue-soft" />
              </header>

              {p.logo && (
                <div className="mt-3 flex h-14 items-center justify-start sm:mt-5 sm:h-20 lg:h-24">
                  <span className="inline-flex h-full max-w-[78%] items-center rounded-lg dark:bg-white dark:px-2.5 dark:py-2 sm:max-w-[82%]">
                    <img
                      src={p.logo}
                      alt={`${p.name} — logo`}
                      loading="lazy"
                      decoding="async"
                      className="max-h-full w-auto object-contain"
                    />
                  </span>
                </div>
              )}

              <h3 className="mt-3 font-display text-base font-semibold text-ink display-balance dark:text-white sm:mt-5 sm:text-lg">
                {p.name}
              </h3>
              {p.scope && (
                <p className="mt-1 text-xs text-ink-soft dark:text-white/65 sm:mt-1.5 sm:text-sm">
                  {p.scope}
                </p>
              )}
            </a>
          </Reveal>
        ))}
      </div>

      <div className="mt-14 border-t border-line/70 pt-8 dark:border-white/10">
        <p className="mx-auto max-w-2xl text-center text-sm text-ink-mute text-pretty dark:text-white/55">
          {t('projects.disclaimer')}
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://institucional.us.es/proyectostep130/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <span>{t('projects.viewAllInstitutional')}</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="https://prisma.us.es/colectivo/grupo/TEP-130"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <span>{t('projects.viewAllTep130')}</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="https://prisma.us.es/colectivo/grupo/TEP-1000"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <span>{t('projects.viewAllTep1000')}</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
