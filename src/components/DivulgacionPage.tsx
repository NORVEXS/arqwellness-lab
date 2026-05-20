import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowUpRight, Wind, Lightbulb, Sun, HeartPulse } from 'lucide-react';
import { navigate } from '../hooks/useRoute';
import { RESOURCES, ResourceIcon } from '../data/resources';

const ICONS: Partial<Record<ResourceIcon, React.ElementType>> = {
  Wind,
  Lightbulb,
  Sun,
  HeartPulse,
};

const OUTLETS = ['El País', 'Antena 3', 'El Periódico', 'Europa Press', 'Faro de Vigo'];

const DivulgacionPage: React.FC = () => {
  const { t } = useTranslation();
  const base = 'divulgacion';

  // Workshop materials already published by the lab (the divulgación resources)
  const workshops = RESOURCES.filter((r) => r.category === 'workshop');

  useEffect(() => {
    document.title = `${t(`${base}.title`)} · ArqWellness Lab`;
  }, [t]);

  return (
    <section
      aria-label={t(`${base}.title`)}
      className="relative min-h-[60vh] bg-surface pt-32 pb-24 dark:bg-surface-dark sm:pt-40"
    >
      <div className="container-x">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="mb-10 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute transition-colors hover:text-brand-blue dark:text-white/55 dark:hover:text-brand-blue-soft"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>{t('legal.back')}</span>
        </button>

        <span className="eyebrow">{t(`${base}.eyebrow`)}</span>
        <h1 className="mt-4 max-w-3xl font-display text-display-md font-semibold leading-tight tracking-[-0.02em] text-ink display-balance dark:text-white">
          {t(`${base}.title`)}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft text-pretty dark:text-white/70">
          {t(`${base}.intro`)}
        </p>

        {/* Workshops y materiales */}
        <div className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-ink dark:text-white">
            {t(`${base}.workshops.title`)}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft text-pretty dark:text-white/70 sm:text-base">
            {t(`${base}.workshops.intro`)}
          </p>
          <div className="mt-7 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {workshops.map((r) => {
              const Icon = ICONS[r.icon] ?? Wind;
              return (
                <a
                  key={r.id}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-line bg-white p-5 shadow-soft transition-all duration-450 ease-out-quart hover:-translate-y-1 hover:border-brand-purple/30 hover:shadow-medium dark:border-white/10 dark:bg-surface-dark-alt dark:shadow-none dark:hover:border-brand-purple/50"
                >
                  <header className="flex items-start justify-between gap-3">
                    <span
                      aria-hidden="true"
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-purple/[0.08] text-brand-purple transition-transform duration-300 group-hover:scale-105 dark:bg-brand-purple/20 dark:text-[#B9B2E8]"
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-ink-mute transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-purple dark:text-white/45 dark:group-hover:text-[#B9B2E8]" />
                  </header>
                  <h3 className="mt-5 font-display text-base font-semibold leading-snug text-ink display-balance dark:text-white">
                    {t(r.titleKey)}
                  </h3>
                  {r.metaKey && (
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft text-pretty dark:text-white/65">
                      {t(r.metaKey)}
                    </p>
                  )}
                  <span className="mt-5 inline-flex items-center gap-1.5 border-t border-line/80 pt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-purple dark:border-white/10 dark:text-[#B9B2E8]">
                    {t(`${base}.workshops.open`)}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Cobertura en medios */}
        <div className="mt-16">
          <h2 className="font-display text-2xl font-semibold text-ink dark:text-white">
            {t(`${base}.media.title`)}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft text-pretty dark:text-white/70 sm:text-base">
            {t(`${base}.media.intro`)}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {OUTLETS.map((m) => (
              <span
                key={m}
                className="rounded-md border border-line bg-surface-alt px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft dark:border-white/10 dark:bg-white/[0.04] dark:text-white/65"
              >
                {m}
              </span>
            ))}
          </div>
        </div>

        {/* Social */}
        <div className="mt-16 rounded-2xl border border-line bg-white p-7 shadow-soft dark:border-white/10 dark:bg-surface-dark-alt dark:shadow-none sm:p-8">
          <h2 className="font-display text-xl font-semibold text-ink dark:text-white">
            {t(`${base}.follow.title`)}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft text-pretty dark:text-white/70">
            {t(`${base}.follow.intro`)}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="https://www.instagram.com/arqwellness_us/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:border-brand-purple/40 hover:text-brand-purple dark:border-white/15 dark:bg-white/[0.04] dark:text-white/75 dark:hover:border-brand-purple/50 dark:hover:text-[#B9B2E8]"
            >
              <span>Instagram @arqwellness_us</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DivulgacionPage;
