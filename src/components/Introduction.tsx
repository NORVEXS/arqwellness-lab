import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowDownRight, MoveRight, Sparkles } from 'lucide-react';
import HeroCanvas from './ui/HeroCanvas';
import Reveal from './ui/Reveal';
import Stat from './ui/Stat';
import { scrollToSection } from '../lib/scroll';

const STATS = ['years', 'members', 'projects', 'publications'] as const;

const Hero: React.FC = () => {
  const { t } = useTranslation();

  const goTo = (id: string) => scrollToSection(id);

  return (
    <section
      id="introduction"
      aria-label={t('hero.eyebrow')}
      className="relative isolate overflow-hidden bg-surface-warm pt-32 pb-24 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-32"
    >
      {/* Soft radial gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-90"
        style={{ background: 'var(--grad-hero)' }}
      />
      {/* Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-soft bg-grid-40 [mask-image:radial-gradient(ellipse_at_center,#000_0%,transparent_70%)]"
      />
      {/* Particles canvas */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <HeroCanvas />
      </div>

      <div className="container-x">
        <Reveal>
          <span className="eyebrow">{t('hero.eyebrow')}</span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-7 max-w-5xl font-display text-display-xl font-medium leading-[1.02] tracking-tight text-ink display-balance">
            <span className="text-ink">{t('hero.titleA')}</span>{' '}
            <span className="italic text-brand-blue">{t('hero.titleB')}</span>{' '}
            <span className="text-ink">{t('hero.titleC')}</span>{' '}
            <span className="block text-ink-soft sm:inline">{t('hero.titleD')}</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty sm:text-xl">
            {t('hero.lede')}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => goTo('about')}
              className="btn-primary"
            >
              <Sparkles className="h-4 w-4" />
              <span>{t('hero.ctaPrimary')}</span>
            </button>
            <button
              type="button"
              onClick={() => goTo('research-lines')}
              className="btn-secondary"
            >
              <span>{t('hero.ctaSecondary')}</span>
              <MoveRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line/80 pt-12 sm:grid-cols-4 sm:gap-x-8">
          {STATS.map((key) => (
            <Stat
              key={key}
              value={t(`hero.stats.${key}.value`)}
              label={t(`hero.stats.${key}.label`)}
            />
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="container-x mt-12 hidden lg:block">
        <Reveal delay={400}>
          <button
            type="button"
            onClick={() => goTo('about')}
            className="group inline-flex items-center gap-3 font-mono text-eyebrow uppercase tracking-eyebrow text-ink-mute transition-colors hover:text-brand-blue"
          >
            <span className="h-px w-12 bg-ink-mute/50 transition-colors group-hover:bg-brand-blue/60" />
            <span>{t('hero.scroll')}</span>
            <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </button>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
