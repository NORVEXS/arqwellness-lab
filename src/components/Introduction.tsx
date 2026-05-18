import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ArrowDown } from 'lucide-react';
import Reveal from './ui/Reveal';
import HeroCanvas from './ui/HeroCanvas';
import { scrollToSection } from '../lib/scroll';
import { useCountUp } from '../hooks/useCountUp';
import { useReveal } from '../hooks/useReveal';

const STATS = ['years', 'members', 'projects', 'publications'] as const;

const parseStat = (raw: string) => {
  const m = raw.match(/^(\D*?)(\d+)(\D*)$/);
  return m ? { prefix: m[1], num: Number(m[2]), suffix: m[3] } : { prefix: '', num: null, suffix: raw };
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
        <span className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {num === null ? value : `${prefix}${counted}${suffix}`}
        </span>
      </div>
      <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">
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
      className="relative isolate overflow-hidden bg-surface pt-32 pb-24 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-32"
    >
      {/* Quiet radial wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60% 50% at 80% 0%, rgba(45, 92, 136, 0.07) 0%, transparent 60%), radial-gradient(50% 45% at 10% 20%, rgba(59, 48, 130, 0.06) 0%, transparent 60%)',
        }}
      />
      {/* Subtle constellation — fades into background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-90 [mask-image:radial-gradient(ellipse_at_center,#000_25%,transparent_85%)]"
      >
        <HeroCanvas />
      </div>

      <div className="container-x">
        <Reveal>
          <span className="eyebrow">{t('hero.eyebrow')}</span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-8 max-w-5xl font-display text-display-xl font-semibold leading-[1.06] tracking-[-0.035em] text-ink display-balance">
            <span>{t('hero.titleA')}</span>{' '}
            <span className="text-brand-blue">{t('hero.titleB')}</span>{' '}
            <span>{t('hero.titleC')}</span>{' '}
            <span className="block font-normal text-ink-soft sm:inline">
              {t('hero.titleD')}
            </span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-ink-soft text-pretty sm:text-lg">
            {t('hero.lede')}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
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

        <div className="mt-20 grid grid-cols-2 gap-x-8 gap-y-10 sm:mt-24 sm:grid-cols-4">
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
            className="inline-flex items-center gap-2 font-mono text-eyebrow uppercase tracking-eyebrow text-ink-mute transition-colors hover:text-brand-blue"
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
