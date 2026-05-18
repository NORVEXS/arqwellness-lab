import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ArrowDown } from 'lucide-react';
import Reveal from './ui/Reveal';
import HeroCanvas from './ui/HeroCanvas';
import { scrollToSection } from '../lib/scroll';
import { emphasize } from '../lib/emphasize';
import { useCountUp } from '../hooks/useCountUp';
import { useReveal } from '../hooks/useReveal';

const STATS = ['years', 'members', 'projects', 'publications'] as const;

const parseStat = (raw: string) => {
  const m = raw.match(/^(\D*?)(\d+)(\D*)$/);
  return m
    ? { prefix: m[1], num: Number(m[2]), suffix: m[3] }
    : { prefix: '', num: null, suffix: raw };
};

const HeroStat: React.FC<{ value: string; label: string; index: number }> = ({
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
  const counted = useCountUp(num ?? 0, 1400, active && num !== null);

  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${index * 60}ms` }}>
      <div className="flex items-baseline gap-1.5">
        <span className="text-2xl font-semibold tracking-tight text-ink dark:text-white sm:text-4xl">
          {num === null ? value : `${prefix}${counted}${suffix}`}
        </span>
      </div>

      <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-ink-mute dark:text-white/55 sm:mt-1.5 sm:text-[10px] sm:tracking-[0.2em]">
        {label}
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const goTo = (id: string) => scrollToSection(id);

  return (
    <section
      id="introduction"
      aria-label={t('hero.eyebrow')}
      className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden bg-surface pt-16 pb-10 dark:bg-surface-dark sm:block sm:min-h-0 sm:pt-32 sm:pb-24 lg:pt-44 lg:pb-32"
    >
      {/* Layer 1 — diffuse colour wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(65% 55% at 82% -5%, rgba(45, 92, 136, 0.11) 0%, transparent 65%), radial-gradient(55% 50% at 8% 18%, rgba(59, 48, 130, 0.09) 0%, transparent 65%), radial-gradient(40% 40% at 95% 95%, rgba(162, 1, 3, 0.05) 0%, transparent 70%)',
        }}
      />

      {/* Layer 2 — engineering grid, very faint */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,#000_30%,transparent_80%)] dark:opacity-[0.5]"
        style={{
          backgroundImage:
            'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          color: 'rgba(16,21,36,0.045)',
        }}
      />

      {/* Layer 3 — paper noise for analog feel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35] mix-blend-multiply dark:opacity-[0.25] dark:mix-blend-screen"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.06 0 0 0 0 0.08 0 0 0 0 0.14 0 0 0 0.18 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* Layer 4 — constellation */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-90 [mask-image:radial-gradient(ellipse_at_center,#000_25%,transparent_85%)]"
      >
        <HeroCanvas />
      </div>

      {/* Layer 5 — subtle vignette on the edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 dark:hidden"
        style={{
          background:
            'radial-gradient(120% 90% at 50% 50%, transparent 55%, rgba(16,21,36,0.06) 100%)',
        }}
      />

      {/* Layer 5b — vignette para dark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 hidden dark:block"
        style={{
          background:
            'radial-gradient(120% 90% at 50% 50%, transparent 50%, rgba(0,0,0,0.5) 100%)',
        }}
      />

      <div className="container-x">
        <Reveal>
          <span className="eyebrow">{t('hero.eyebrow')}</span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-6 max-w-5xl font-display text-display-xl font-semibold leading-[1.06] tracking-[-0.035em] text-ink display-balance dark:text-white sm:mt-8">
            <span>{t('hero.titleA')}</span>{' '}
            <span className="text-brand-blue dark:text-brand-blue-soft">
              {t('hero.titleB')}
            </span>{' '}
            <span>{t('hero.titleC')}</span>{' '}
            <span className="block font-normal text-ink-soft sm:inline dark:text-white/65">
              {t('hero.titleD')}
            </span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft text-pretty dark:text-white/70 sm:mt-7 sm:text-lg">
            {emphasize(t('hero.lede'), [
              'salud',
              'confort',
              'eficiencia energética',
              'health',
              'comfort',
              'energy performance',
            ])}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8">
            <button type="button" onClick={() => goTo('about')} className="btn-primary">
              <span>{t('hero.ctaPrimary')}</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => goTo('research-lines')}
              className="btn-ghost"
            >
              <span>{t('hero.ctaSecondary')}</span>
            </button>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 sm:mt-20 sm:grid-cols-4 sm:gap-x-8 sm:gap-y-10">
          {STATS.map((key, i) => (
            <HeroStat
              key={key}
              index={i}
              value={t(`hero.stats.${key}.value`)}
              label={t(`hero.stats.${key}.label`)}
            />
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="container-x mt-16 hidden lg:block">
        <Reveal delay={400}>
          <button
            type="button"
            onClick={() => goTo('about')}
            className="inline-flex items-center gap-2 font-mono text-eyebrow uppercase tracking-eyebrow text-ink-mute transition-colors hover:text-brand-blue dark:text-white/55 dark:hover:text-brand-blue-soft"
          >
            <span>{t('hero.scroll')}</span>
            <ArrowDown className="h-3.5 w-3.5" />
          </button>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;