import React from 'react';
import { useTranslation } from 'react-i18next';
import { GraduationCap, Wind, BookOpen, MonitorSmartphone } from 'lucide-react';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import climatizacion from '../assets/images/climatizacion.png';
import simulacion from '../assets/images/simulacion.jpg';

const META: { keyName: string; Icon: any }[] = [
  { keyName: 'degree', Icon: GraduationCap },
  { keyName: 'school', Icon: BookOpen },
  { keyName: 'type', Icon: MonitorSmartphone },
];

const Training: React.FC = () => {
  const { t } = useTranslation();

  const scopeItems = t('training.blocks.scope.items', { returnObjects: true }) as string[];
  const subItems = t('training.blocks.scope.subItems', { returnObjects: true }) as string[];
  const contentItems = t('training.blocks.content.items', { returnObjects: true }) as string[];

  return (
    <Section id="training" tone="warm" ariaLabel={t('training.title')}>
      <SectionHeader
        eyebrow={t('training.eyebrow')}
        title={t('training.title')}
        lede={t('training.lede')}
      />

      {/* Meta strip */}
      <div className="mt-10 grid gap-3 sm:grid-cols-3">
        {META.map(({ keyName, Icon }, i) => (
          <Reveal key={keyName} delay={i * 80}>
            <div className="flex items-center gap-3 rounded-2xl border border-line bg-white px-5 py-4 shadow-soft dark:border-white/10 dark:bg-surface-dark-alt dark:shadow-none">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/[0.08] text-brand-blue dark:bg-brand-blue-soft/15 dark:text-brand-blue-soft">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute dark:text-white/50">
                  {keyName === 'degree'
                    ? 'Grado'
                    : keyName === 'school'
                      ? 'Centro'
                      : 'Tipo'}
                </span>
                <span className="text-sm font-medium text-ink dark:text-white">
                  {t(`training.meta.${keyName}`)}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Scope */}
      <div className="mt-14 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <h3 className="font-display text-2xl font-medium text-ink dark:text-white">
              {t('training.blocks.scope.title')}
            </h3>
            <p className="mt-4 text-ink-soft leading-relaxed dark:text-white/70">
              {t('training.blocks.scope.intro')}
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <Reveal delay={120}>
            <ol className="space-y-3">
              {scopeItems.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 rounded-xl border border-line bg-white p-5 shadow-soft dark:border-white/10 dark:bg-surface-dark-alt dark:shadow-none"
                >
                  <span className="font-mono text-xs font-semibold text-brand-blue dark:text-brand-blue-soft">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-ink-soft text-pretty dark:text-white/75">{item}</span>
                </li>
              ))}
            </ol>

            <ul className="mt-5 flex flex-wrap gap-2 pl-2">
              {subItems.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-brand-blue/20 bg-white px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-brand-blue dark:border-brand-blue-soft/30 dark:bg-white/[0.04] dark:text-brand-blue-soft"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      {/* Design block */}
      <div className="mt-20 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <h3 className="font-display text-2xl font-medium text-ink dark:text-white">
              {t('training.blocks.design.title')}
            </h3>
            <p className="mt-4 text-ink-soft leading-relaxed text-pretty">
              {t('training.blocks.design.text')}
            </p>
          </Reveal>
        </div>
        <Reveal delay={120} className="lg:col-span-6">
          <figure className="overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-medium dark:border-white/10 dark:bg-surface-dark-alt dark:shadow-none">
            <img
              src={climatizacion}
              alt={t('training.blocks.design.imageAlt')}
              loading="lazy"
              decoding="async"
              className="mx-auto h-auto w-full"
            />
            <figcaption className="mt-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
              <Wind className="h-3.5 w-3.5" />
              <span>IEQ · Calidad del ambiente interior</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>

      {/* Content */}
      <div className="mt-20 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <h3 className="font-display text-2xl font-medium text-ink dark:text-white">
              {t('training.blocks.content.title')}
            </h3>
            <p className="mt-4 text-ink-soft leading-relaxed dark:text-white/70">
              {t('training.blocks.content.intro')}
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed dark:text-white/70">
              {t('training.blocks.content.outro')}
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <Reveal delay={120}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {contentItems.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-line bg-white p-4 text-sm shadow-soft dark:border-white/10 dark:bg-surface-dark-alt dark:shadow-none"
                >
                  <span className="font-mono text-[11px] font-semibold text-brand-purple dark:text-[#B9B2E8]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-ink-soft text-pretty dark:text-white/75">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      {/* Practice */}
      <div
        className="relative mt-20 overflow-hidden rounded-3xl bg-surface-dark text-white shadow-large"
        style={{
          backgroundImage:
            'radial-gradient(70% 50% at 100% 0%, rgba(59, 48, 130, 0.22) 0%, transparent 60%), radial-gradient(50% 50% at 0% 100%, rgba(45, 92, 136, 0.22) 0%, transparent 60%)',
        }}
      >
        <div className="grid gap-0 lg:grid-cols-12 lg:items-stretch">
          {/* Imagen plana, sin marcos: queda como una lámina sobre el card dark */}
          <Reveal className="order-1 lg:order-2 lg:col-span-7">
            <div className="flex h-full items-center justify-center p-8 sm:p-10 lg:px-10 lg:py-12">
              <img
                src={simulacion}
                alt={t('training.blocks.practice.imageAlt')}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full max-w-2xl object-contain"
              />
            </div>
          </Reveal>

          {/* Texto + caption */}
          <div className="relative order-2 px-8 pb-10 pt-2 lg:order-1 lg:col-span-5 lg:p-12">
            <Reveal delay={120}>
              <span className="eyebrow text-white/55">{t('training.eyebrow')}</span>
              <h3 className="mt-3 font-display text-3xl font-medium text-white display-balance">
                {t('training.blocks.practice.title')}
              </h3>
              <p className="mt-4 text-white/70 leading-relaxed">
                {t('training.blocks.practice.intro')}
              </p>
              <p className="mt-4 text-white/70 leading-relaxed">
                {t('training.blocks.practice.outro')}
              </p>
              <p className="mt-8 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
                <span aria-hidden="true" className="h-px w-6 bg-white/30" />
                BIM · ETSA Sevilla · ASE-Zero
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Training;
