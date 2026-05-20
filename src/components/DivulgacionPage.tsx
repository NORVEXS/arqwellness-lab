import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowUpRight, Instagram } from 'lucide-react';
import { navigate } from '../hooks/useRoute';
import portada from '../assets/images/difusion/difusion-portada.webp';
import g01 from '../assets/images/difusion/g01.webp';
import g02 from '../assets/images/difusion/g02.webp';
import g03 from '../assets/images/difusion/g03.webp';
import g04 from '../assets/images/difusion/g04.webp';
import g05 from '../assets/images/difusion/g05.webp';
import g06 from '../assets/images/difusion/g06.webp';
import g07 from '../assets/images/difusion/g07.webp';
import g08 from '../assets/images/difusion/g08.webp';
import g09 from '../assets/images/difusion/g09.webp';
import g10 from '../assets/images/difusion/g10.webp';
import g11 from '../assets/images/difusion/g11.webp';
import g12 from '../assets/images/difusion/g12.webp';

const GALLERY = [g01, g02, g03, g04, g05, g06, g07, g08, g09, g10, g11, g12];
const OUTLETS = ['El País', 'Faro de Vigo', 'Antena 3 Noticias', 'El Periódico', 'Europa Press'];
const STATS = ['collaborations', 'publications', 'media'] as const;

const DivulgacionPage: React.FC = () => {
  const { t } = useTranslation();
  const base = 'divulgacion';

  useEffect(() => {
    document.title = `${t(`${base}.title`)} · ArqWellness Lab`;
  }, [t]);

  return (
    <section
      aria-label={t(`${base}.title`)}
      className="relative bg-surface pt-32 pb-24 dark:bg-surface-dark sm:pt-40"
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
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft text-pretty dark:text-white/70 sm:text-lg">
          {t(`${base}.intro`)}
        </p>

        {/* Alcance mediático */}
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink dark:text-white sm:text-3xl">
              {t(`${base}.media.title`)}
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed text-pretty dark:text-white/70">
              {t(`${base}.media.p1`)}
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed text-pretty dark:text-white/70">
              {t(`${base}.media.p2`)}
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
          <figure className="overflow-hidden rounded-2xl border border-line shadow-medium dark:border-white/10">
            <img
              src={portada}
              alt={t(`${base}.media.imageAlt`)}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </figure>
        </div>

        {/* Impacto */}
        <div className="mt-16 rounded-3xl border border-line bg-white p-8 shadow-soft dark:border-white/10 dark:bg-surface-dark-alt dark:shadow-none sm:p-10">
          <h2 className="font-display text-2xl font-semibold text-ink dark:text-white sm:text-3xl">
            {t(`${base}.impact.title`)}
          </h2>
          <p className="mt-3 text-ink-soft dark:text-white/70">{t(`${base}.impact.intro`)}</p>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {STATS.map((k) => (
              <div key={k}>
                <div className="font-display text-4xl font-semibold tracking-tight text-ink dark:text-white sm:text-5xl">
                  {t(`${base}.impact.${k}.value`)}
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute dark:text-white/55">
                  {t(`${base}.impact.${k}.label`)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Construyendo bienestar */}
        <div className="mt-16 max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-ink dark:text-white sm:text-3xl">
            {t(`${base}.building.title`)}
          </h2>
          <p className="mt-4 text-ink-soft leading-relaxed text-pretty dark:text-white/70 sm:text-lg">
            {t(`${base}.building.body`)}
          </p>
        </div>

        {/* Galería */}
        <div className="mt-12 columns-2 gap-3 sm:columns-3 lg:columns-4 [&>*]:mb-3">
          {GALLERY.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={t(`${base}.galleryAlt`, { n: i + 1 })}
              loading="lazy"
              decoding="async"
              className="w-full break-inside-avoid rounded-xl border border-line object-cover shadow-soft dark:border-white/10"
            />
          ))}
        </div>

        {/* Síguenos */}
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
              <Instagram className="h-4 w-4" />
              <span>@arqwellness_us</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="https://x.com/ArqWellness_US/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:border-brand-purple/40 hover:text-brand-purple dark:border-white/15 dark:bg-white/[0.04] dark:text-white/75 dark:hover:border-brand-purple/50 dark:hover:text-[#B9B2E8]"
            >
              <span>X · @ArqWellness_US</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DivulgacionPage;
