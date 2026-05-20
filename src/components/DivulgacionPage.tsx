import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowUpRight, Instagram, Newspaper, Sparkles } from 'lucide-react';
import { navigate } from '../hooks/useRoute';
import { useReveal } from '../hooks/useReveal';
import { useCountUp } from '../hooks/useCountUp';
import Reveal from './ui/Reveal';
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

const parseStat = (raw: string) => {
  const m = raw.match(/^(\D*?)(\d+)(\D*)$/);
  return m ? { prefix: m[1], num: Number(m[2]), suffix: m[3] } : { prefix: '', num: null, suffix: raw };
};

const ImpactStat: React.FC<{ value: string; label: string; index: number }> = ({
  value,
  label,
  index,
}) => {
  const ref = useReveal<HTMLDivElement>();
  const [active, setActive] = React.useState(false);
  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [ref]);
  const { num, prefix, suffix } = parseStat(value);
  const counted = useCountUp(num ?? 0, 1500, active && num !== null);
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${index * 80}ms` }}>
      <div className="bg-gradient-to-br from-brand-blue to-brand-purple bg-clip-text font-display text-5xl font-semibold tracking-tight text-transparent sm:text-6xl">
        {num === null ? value : `${prefix}${counted}${suffix}`}
      </div>
      <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute dark:text-white/55">
        {label}
      </div>
    </div>
  );
};

const DivulgacionPage: React.FC = () => {
  const { t } = useTranslation();
  const base = 'divulgacion';

  useEffect(() => {
    document.title = `${t(`${base}.title`)} · ArqWellness Lab`;
  }, [t]);

  return (
    <section
      aria-label={t(`${base}.title`)}
      className="relative isolate overflow-hidden bg-surface pt-28 pb-24 dark:bg-surface-dark sm:pt-36"
    >
      {/* Decorative wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px]"
        style={{
          background:
            'radial-gradient(60% 70% at 80% -10%, rgba(59, 48, 130, 0.10) 0%, transparent 60%), radial-gradient(50% 60% at 10% 0%, rgba(45, 92, 136, 0.10) 0%, transparent 60%)',
        }}
      />

      <div className="container-x">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="mb-10 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute transition-colors hover:text-brand-blue dark:text-white/55 dark:hover:text-brand-blue-soft"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>{t('legal.back')}</span>
        </button>

        <Reveal>
          <span className="eyebrow">{t(`${base}.eyebrow`)}</span>
          <h1 className="mt-4 max-w-3xl font-display text-display-lg font-semibold leading-[1.05] tracking-[-0.03em] text-ink display-balance dark:text-white">
            {t(`${base}.title`)}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft text-pretty dark:text-white/70 sm:text-lg">
            {t(`${base}.intro`)}
          </p>
        </Reveal>

        {/* Alcance mediático */}
        <div className="mt-20 grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft shadow-soft dark:border-white/10 dark:bg-white/[0.04] dark:text-white/70">
              <Newspaper className="h-3.5 w-3.5 text-brand-blue dark:text-brand-blue-soft" />
              {t(`${base}.media.tag`)}
            </span>
            <h2 className="mt-4 font-display text-2xl font-semibold text-ink dark:text-white sm:text-3xl">
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
          </Reveal>
          <Reveal delay={120}>
            <figure className="group overflow-hidden rounded-3xl border border-line shadow-large ring-1 ring-black/[0.03] dark:border-white/10 dark:ring-white/5">
              <img
                src={portada}
                alt={t(`${base}.media.imageAlt`)}
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] h-full w-full object-cover transition-transform duration-700 ease-out-quart group-hover:scale-[1.04]"
              />
            </figure>
          </Reveal>
        </div>

        {/* Impacto */}
        <Reveal>
          <div
            className="relative mt-20 overflow-hidden rounded-3xl border border-line bg-white p-8 shadow-soft dark:border-white/10 dark:bg-surface-dark-alt dark:shadow-none sm:p-12"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple opacity-[0.06]"
            />
            <h2 className="font-display text-2xl font-semibold text-ink dark:text-white sm:text-3xl">
              {t(`${base}.impact.title`)}
            </h2>
            <p className="mt-3 text-ink-soft dark:text-white/70">{t(`${base}.impact.intro`)}</p>
            <div className="mt-10 grid gap-10 sm:grid-cols-3 sm:gap-8">
              {STATS.map((k, i) => (
                <ImpactStat
                  key={k}
                  index={i}
                  value={t(`${base}.impact.${k}.value`)}
                  label={t(`${base}.impact.${k}.label`)}
                />
              ))}
            </div>
          </div>
        </Reveal>

        {/* Construyendo bienestar */}
        <Reveal>
          <div className="mt-20 max-w-3xl">
            <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-brand-purple dark:text-[#B9B2E8]">
              <Sparkles className="h-3.5 w-3.5" />
              {t(`${base}.building.tag`)}
            </span>
            <h2 className="mt-4 font-display text-2xl font-semibold text-ink dark:text-white sm:text-3xl">
              {t(`${base}.building.title`)}
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed text-pretty dark:text-white/70 sm:text-lg">
              {t(`${base}.building.body`)}
            </p>
          </div>
        </Reveal>

        {/* Galería */}
        <Reveal>
          <h2 className="mt-20 font-display text-2xl font-semibold text-ink dark:text-white sm:text-3xl">
            {t(`${base}.gallery.title`)}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft text-pretty dark:text-white/70 sm:text-base">
            {t(`${base}.gallery.intro`)}
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {GALLERY.map((src, i) => (
            <Reveal key={i} delay={(i % 4) * 60}>
              <figure className="group relative aspect-square overflow-hidden rounded-2xl border border-line shadow-soft dark:border-white/10">
                <img
                  src={src}
                  alt={t(`${base}.galleryAlt`, { n: i + 1 })}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[800ms] ease-out-quart group-hover:scale-110"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Síguenos */}
        <Reveal>
          <div className="mt-20 overflow-hidden rounded-3xl bg-surface-dark p-8 text-white shadow-large sm:p-12"
            style={{
              backgroundImage:
                'radial-gradient(60% 80% at 100% 0%, rgba(59, 48, 130, 0.35) 0%, transparent 60%), radial-gradient(50% 70% at 0% 100%, rgba(45, 92, 136, 0.30) 0%, transparent 60%)',
            }}
          >
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              {t(`${base}.follow.title`)}
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-white/70 text-pretty">
              {t(`${base}.follow.intro`)}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/arqwellness_us/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-white/40 hover:bg-white/[0.12]"
              >
                <Instagram className="h-4 w-4" />
                <span>@arqwellness_us</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="https://x.com/ArqWellness_US/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-white/40 hover:bg-white/[0.12]"
              >
                <span>X · @ArqWellness_US</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default DivulgacionPage;
