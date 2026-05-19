import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import { INFRASTRUCTURE } from '../data/infrastructure';

const Infrastructure: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section
      id="infrastructure"
      tone="alt"
      ariaLabel={t('infrastructure.title')}
    >
      <SectionHeader
        eyebrow={t('infrastructure.eyebrow')}
        title={t('infrastructure.title')}
        lede={t('infrastructure.lede')}
        ledeEmphasize={[
          'cámaras de ensayos',
          'instrumental',
          'test chambers',
          'instrumentation',
        ]}
      />

      <div className="mt-14 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {INFRASTRUCTURE.map((item, i) => (
          <Reveal key={item.id} delay={(i % 3) * 80} className="h-full">
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition-all duration-450 ease-out-quart hover:-translate-y-1 hover:border-line-strong/70 hover:shadow-medium dark:border-white/10 dark:bg-surface-dark-alt dark:shadow-none dark:hover:border-white/20">
              <div className="relative aspect-[16/10] overflow-hidden bg-surface-alt dark:bg-surface-dark">
                <img
                  src={item.image}
                  alt={t(item.titleKey)}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out-quart group-hover:scale-105"
                />
                {item.badgeKey && (
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft shadow-soft backdrop-blur-sm dark:bg-surface-dark/90 dark:text-white/80">
                    {t(item.badgeKey)}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="font-display text-lg font-semibold leading-snug text-ink display-balance dark:text-white">
                  {t(item.titleKey)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft text-pretty dark:text-white/70">
                  {t(item.descriptionKey)}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-line/70 pt-6 sm:flex-row sm:items-center dark:border-white/10">
        <p className="max-w-2xl text-sm text-ink-mute text-pretty dark:text-white/55">
          {t('infrastructure.disclaimer')}
        </p>
        <a
          href="https://institucional.us.es/arqwellness/infraestructuras/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          <span>{t('infrastructure.viewAll')}</span>
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </Section>
  );
};

export default Infrastructure;
