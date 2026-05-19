import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ArrowUpRight,
  BookOpen,
  FileText,
  Wrench,
  Presentation,
} from 'lucide-react';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import { RESOURCES, ResourceCategory } from '../data/resources';

const CATEGORY_ICON: Record<ResourceCategory, React.ElementType> = {
  standard: BookOpen,
  presentation: Presentation,
  tool: Wrench,
  video: FileText,
  workshop: Presentation,
};

type Filter = 'all' | ResourceCategory;
const FILTERS: Filter[] = ['all', 'standard', 'tool', 'workshop'];

const Resources: React.FC = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<Filter>('all');

  const visible = useMemo(
    () => RESOURCES.filter((r) => filter === 'all' || r.category === filter),
    [filter],
  );

  return (
    <Section id="resources" tone="alt" ariaLabel={t('resources.title')}>
      <SectionHeader
        eyebrow={t('resources.eyebrow')}
        title={t('resources.title')}
        lede={t('resources.lede')}
        ledeEmphasize={[
          'normas técnicas',
          'herramientas abiertas',
          'workshops',
          'standards',
          'open tools',
        ]}
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
              {t(`resources.filters.${f}`)}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((r, i) => {
          const Icon = CATEGORY_ICON[r.category];
          return (
            <Reveal key={r.id} delay={(i % 6) * 40} className="h-full">
              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-5 shadow-soft transition-all duration-450 ease-out-quart hover:-translate-y-1 hover:border-line-strong/70 hover:shadow-medium dark:border-white/10 dark:bg-surface-dark-alt dark:shadow-none dark:hover:border-white/20"
              >
                <header className="flex items-start justify-between gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/[0.08] text-brand-blue dark:bg-brand-blue-soft/15 dark:text-brand-blue-soft"
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute dark:text-white/50">
                    {t(`resources.categories.${r.category}`)}
                  </span>
                </header>
                <h3 className="mt-5 font-display text-base font-semibold leading-snug text-ink display-balance dark:text-white">
                  {t(r.titleKey)}
                </h3>
                {r.metaKey && (
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft text-pretty dark:text-white/65">
                    {t(r.metaKey)}
                  </p>
                )}
                <footer className="mt-5 flex items-center justify-between border-t border-line/80 pt-4 text-sm text-brand-blue transition-colors group-hover:text-brand-purple dark:border-white/10 dark:text-brand-blue-soft">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em]">
                    {t('resources.open')}
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </footer>
              </a>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-12 border-t border-line/70 pt-8 dark:border-white/10">
        <p className="mx-auto max-w-2xl text-center text-sm text-ink-mute text-pretty dark:text-white/55">
          {t('resources.disclaimer')}
        </p>
        <div className="mt-5 flex justify-center">
          <a
            href="https://institucional.us.es/arqwellness/investigacion/recursos/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <span>{t('resources.viewAll')}</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Resources;
