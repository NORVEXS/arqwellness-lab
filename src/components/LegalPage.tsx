import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import { navigate } from '../hooks/useRoute';

export type LegalSlug = 'aviso-legal' | 'politica-de-privacidad' | 'politica-de-cookies';

interface LegalBlock {
  heading: string;
  body: string;
}

const LegalPage: React.FC<{ slug: LegalSlug }> = ({ slug }) => {
  const { t } = useTranslation();
  const base = `legal.${slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase())}`;
  // Map slug → camelCase key
  // aviso-legal → avisoLegal; politica-de-privacidad → politicaDePrivacidad; politica-de-cookies → politicaDeCookies
  const blocks = t(`${base}.blocks`, { returnObjects: true }) as LegalBlock[];

  useEffect(() => {
    document.title = `${t(`${base}.title`)} · ArqWellness Lab`;
  }, [t, base]);

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
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft dark:text-white/70">
          {t(`${base}.intro`)}
        </p>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute dark:text-white/50">
          {t('legal.updated')}: {t(`${base}.updated`)}
        </p>

        <div className="mt-12 max-w-3xl space-y-10">
          {Array.isArray(blocks) &&
            blocks.map((b, i) => (
              <article key={i}>
                <h2 className="font-display text-xl font-semibold text-ink dark:text-white sm:text-2xl">
                  {b.heading}
                </h2>
                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-ink-soft text-pretty dark:text-white/70 sm:text-base">
                  {b.body}
                </p>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
};

export default LegalPage;
