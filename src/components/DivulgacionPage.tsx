import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowUpRight, Instagram, Newspaper } from 'lucide-react';
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
    <div ref={ref} className="reveal text-center sm:text-left" style={{ transitionDelay: `${index * 80}ms` }}>
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
      className="relative isolate overflow-hidden bg-surface pb-24 dark:bg-surface-dark"
    >
      {/* Decorative wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px]"
        style={{
          background:
            'radial-gradient(55% 65% at 85% -5%, rgba(59, 48, 130, 0.12) 0%, transparent 60%), radial-gradient(50% 60% at 5% 5%, rgba(45, 92, 136, 0.10) 0%, transparent 60%)',
        }}
      />

      <div className="container-x pt-28 sm:pt-32">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="mb-12 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute transition-colors hover:text-brand-blue dark:text-white/55 dark:hover:text-brand-blue-soft"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>{t('legal.back')}</span>
        </button>

        {/* Hero split */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <Reveal>
            <span className="eyebrow">{t(`${base}.eyebrow`)}</span>
            <h1 className="mt-4 font-display text-display-lg font-semibold leading-[1.04] tracking-[-0.03em] text-ink display-balance dark:text-white">
              {t(`${base}.title`)}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft text-pretty dark:text-white/70 sm:text-lg">
              {t(`${base}.intro`)}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <figure className="group overflow-hidden rounded-3xl border border-line bg-surface-alt shadow-large ring-1 ring-black/[0.03] dark:border-white/10 dark:bg-white/[0.03] dark:ring-white/5">
              <img
                src={portada}
                alt={t(`${base}.media.imageAlt`)}
                loading="eager"
                decoding="async"
                className="h-auto w-full object-contain transition-transform duration-700 ease-out-quart group-hover:scale-[1.03]"
              />
            </figure>
          </Reveal>
        </div>

        {/* Impact band */}
        <div className="mt-16 grid gap-10 border-y border-line/70 py-10 dark:border-white/10 sm:mt-20 sm:grid-cols-3 sm:gap-8">
          {STATS.map((k, i) => (
            <ImpactStat
              key={k}
              index={i}
              value={t(`${base}.impact.${k}.value`)}
              label={t(`${base}.impact.${k}.label`)}
            />
          ))}
        </div>

        {/* Alcance mediático */}
        <div className="mt-20 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-brand-blue dark:text-brand-blue-soft">
              <Newspaper className="h-3.5 w-3.5" />
              {t(`${base}.media.tag`)}
            </span>
            <h2 className="mt-4 font-display text-2xl font-semibold text-ink dark:text-white sm:text-3xl">
              {t(`${base}.media.title`)}
            </h2>
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <p className="text-ink-soft leading-relaxed text-pretty dark:text-white/70">
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
          </div>
        </div>

        {/* Construyendo bienestar — manifiesto */}
        <Reveal>
          <figure className="mx-auto mt-16 max-w-2xl text-center">
            <span
              aria-hidden="true"
              className="mx-auto block h-px w-10 bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent"
            />
            <span className="mt-5 inline-block font-mono text-[10px] uppercase tracking-[0.24em] text-brand-purple dark:text-[#B9B2E8]">
              {t(`${base}.building.tag`)}
            </span>
            <blockquote className="mt-3 font-display text-xl font-medium leading-snug text-ink display-balance dark:text-white sm:text-2xl">
              {t(`${base}.building.body`)}
            </blockquote>
          </figure>
        </Reveal>

        {/* Galería */}
        <Reveal>
          <div className="mt-20 flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink dark:text-white sm:text-3xl">
                {t(`${base}.gallery.title`)}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft text-pretty dark:text-white/70 sm:text-base">
                {t(`${base}.gallery.intro`)}
              </p>
            </div>
          </div>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {GALLERY.map((src, i) => (
            <figure
              key={i}
              className="group relative aspect-square w-full overflow-hidden rounded-2xl border border-line bg-surface-alt shadow-soft dark:border-white/10 dark:bg-white/[0.04]"
            >
              <img
                src={src}
                alt={t(`${base}.galleryAlt`, { n: i + 1 })}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[800ms] ease-out-quart group-hover:scale-110"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </figure>
          ))}
        </div>

        {/* Síguenos */}
        <Reveal>
          <div
            className="mt-20 overflow-hidden rounded-3xl bg-surface-dark p-8 text-white shadow-large sm:p-12"
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
