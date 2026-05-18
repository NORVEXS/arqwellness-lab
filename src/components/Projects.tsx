import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, ChevronRight } from 'lucide-react';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import Modal from './ui/Modal';
import { PROJECTS, ProjectType, Project } from '../data/projects';

type Filter = 'all' | ProjectType;

const FILTERS: Filter[] = ['all', 'rd', 'contract'];

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<Filter>('all');
  const [selected, setSelected] = useState<Project | null>(null);

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
          {visible.length === 1 ? 'proyecto' : 'proyectos'}
        </span>
      </div>

      {/* Grid */}
      <div className="mt-8 grid items-stretch gap-5 sm:grid-cols-2">
        {visible.map((p, i) => {
          const isOrphan = i === visible.length - 1 && visible.length % 2 === 1;
          return (
          <Reveal
            key={p.id}
            delay={(i % 4) * 60}
            className={`h-full ${isOrphan ? 'sm:col-span-2 sm:justify-self-center sm:w-full sm:max-w-[calc(50%-0.625rem)]' : ''}`}
          >
            <article className="card card-hover group flex h-full flex-col p-6">
              <header className="flex items-center justify-between gap-3">
                <span
                  className={p.type === 'rd' ? 'tag-blue' : 'tag-red'}
                >
                  {t(`projects.tags.${p.type}`)}
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute dark:text-white/50">
                  <Calendar className="h-3.5 w-3.5" />
                  {p.year}
                </span>
              </header>
              <h3 className="mt-5 font-display text-xl font-medium text-ink display-balance dark:text-white">
                {t(`${p.i18nKey}.title`)}
              </h3>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed text-pretty line-clamp-3 dark:text-white/70">
                {t(`${p.i18nKey}.description`)}
              </p>
              <footer className="mt-6 flex items-center justify-between border-t border-line/80 pt-4 dark:border-white/10">
                <button
                  type="button"
                  onClick={() => setSelected(p)}
                  className="stretch-link inline-flex items-center gap-1.5 font-medium text-brand-blue transition-colors group-hover:text-brand-purple dark:text-brand-blue-soft dark:group-hover:text-[#B9B2E8]"
                >
                  <span>{t('projects.viewDetails')}</span>
                  <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </footer>
            </article>
          </Reveal>
        );})}
      </div>

      <div className="mt-14 border-t border-line/70 pt-6 dark:border-white/10">
        <p className="mx-auto max-w-2xl text-center text-sm text-ink-mute text-pretty dark:text-white/55">
          {t('projects.disclaimer')}
        </p>
      </div>

      {selected && (
        <Modal
          eyebrow={t(`projects.tags.${selected.type}`)}
          title={t(`${selected.i18nKey}.title`)}
          onClose={() => setSelected(null)}
        >
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-3 text-sm text-ink-mute">
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em]">
                <Calendar className="h-3.5 w-3.5" />
                {t('projects.yearLabel')}: {selected.year}
              </span>
            </div>
            <p className="text-ink-soft leading-relaxed">
              {t(`${selected.i18nKey}.description`)}
            </p>
            <div>
              <h4 className="font-display text-lg font-medium text-ink">
                {t('projects.outcomesTitle')}
              </h4>
              <ul className="mt-3 space-y-2 text-ink-soft">
                {(
                  t(`${selected.i18nKey}.outcomes`, { returnObjects: true }) as string[]
                ).map((o) => (
                  <li key={o} className="flex items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1 w-2 shrink-0 rounded-full bg-brand-blue"
                    />
                    <span className="text-pretty">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Modal>
      )}
    </Section>
  );
};

export default Projects;
