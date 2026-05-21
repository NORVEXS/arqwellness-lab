import React from 'react';
import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import equipoA from '../assets/images/equipo-arqwellness-multidisciplinar.webp';
import equipoB from '../assets/images/equipo-arqwellness-quienes-somos-2.webp';
import hemodialisisBlower from '../assets/images/ensayo-hemodialisis-blower-door.webp';
import cabinaIluminacionDetalle from '../assets/images/cabina-iluminacion-arqwellness-detalle.webp';
import edificiosExistentes from '../assets/images/estrategias-pasivas-edificios.webp';
import sistemasRecuperacion from '../assets/images/sistemas-recuperacion-calor-edificios.webp';
import labEspacioCentral from '../assets/images/laboratorio-espacio-central.webp';
import { LEADS, SENIORS, OTHERS } from '../data/team';
import TeamCard from './ui/TeamCard';

const SPECIALITIES = ['thermal', 'acoustic', 'lighting', 'iaq'] as const;

const AboutUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section id="about" tone="alt" ariaLabel={t('about.title')}>
      <SectionHeader
        eyebrow={t('about.eyebrow')}
        title={t('about.title')}
        lede={t('about.lede')}
        ledeEmphasize={['TEP-130', 'TEP-1000', 'PAIDI']}
      />

      {/* Bloque 1: equipo multidisciplinar */}
      <div className="mt-14 grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-6">
          <figure className="overflow-hidden rounded-2xl bg-white shadow-medium ring-1 ring-line dark:bg-surface-dark-alt dark:shadow-none dark:ring-white/10">
            <img
              src={equipoA}
              alt={t('about.blocks.multidisciplinary.imageAlt')}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
          </figure>
        </Reveal>
        <Reveal delay={120} as="div" className="lg:col-span-6">
          <h3 className="font-display text-2xl font-semibold text-ink display-balance dark:text-white">
            {t('about.blocks.multidisciplinary.title')}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-ink-soft text-pretty dark:text-white/75">
            {t('about.blocks.multidisciplinary.body')}
          </p>
        </Reveal>
      </div>

      {/* Bloque 2: senior + junior — layout invertido */}
      <div className="mt-16 grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
        <Reveal as="div" className="order-2 lg:order-1 lg:col-span-6">
          <h3 className="font-display text-2xl font-semibold text-ink display-balance dark:text-white">
            {t('about.blocks.seniorJunior.title')}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-ink-soft text-pretty dark:text-white/75">
            {t('about.blocks.seniorJunior.body')}
          </p>
        </Reveal>
        <Reveal delay={120} className="order-1 lg:order-2 lg:col-span-6">
          <figure className="overflow-hidden rounded-2xl bg-white shadow-medium ring-1 ring-line dark:bg-surface-dark-alt dark:shadow-none dark:ring-white/10">
            <img
              src={equipoB}
              alt={t('about.blocks.seniorJunior.imageAlt')}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
          </figure>
        </Reveal>
      </div>

      {/* Bloque 3: vídeo + texto laboratorio */}
      <div className="mt-20 grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-7">
          <figure className="overflow-hidden rounded-2xl bg-surface-dark shadow-large dark:ring-1 dark:ring-white/10">
            <img
              src={labEspacioCentral}
              alt={t('about.blocks.video.label')}
              loading="lazy"
              decoding="async"
              className="aspect-video w-full object-cover"
            />
          </figure>
        </Reveal>
        <Reveal delay={120} as="div" className="lg:col-span-5">
          <span className="eyebrow !text-ink-mute dark:!text-white/55">
            {t('about.blocks.video.eyebrow')}
          </span>
          <h3 className="mt-3 font-display text-2xl font-semibold text-ink display-balance dark:text-white">
            {t('about.blocks.video.title')}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-ink-soft text-pretty dark:text-white/75">
            {t('about.blocks.video.body')}
          </p>
        </Reveal>
      </div>

      {/* Bloque 4: trayectoria 15 años */}
      <div className="mt-20 grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal as="div" className="order-2 lg:order-1 lg:col-span-5">
          <span className="eyebrow !text-ink-mute dark:!text-white/55">
            {t('about.blocks.trajectory.eyebrow')}
          </span>
          <h3 className="mt-3 font-display text-2xl font-semibold text-ink display-balance dark:text-white">
            {t('about.blocks.trajectory.title')}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-ink-soft text-pretty dark:text-white/75">
            {t('about.blocks.trajectory.body')}
          </p>
        </Reveal>
        <Reveal delay={120} className="order-1 lg:order-2 lg:col-span-7">
          <figure className="overflow-hidden rounded-2xl shadow-medium ring-1 ring-line dark:ring-white/10">
            <img
              src={hemodialisisBlower}
              alt={t('about.blocks.trajectory.imageAlt')}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
          </figure>
        </Reveal>
      </div>

      {/* Bloque 5: cabina iluminación */}
      <div className="mt-20 grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-7">
          <figure className="overflow-hidden rounded-2xl shadow-medium ring-1 ring-line dark:ring-white/10">
            <img
              src={cabinaIluminacionDetalle}
              alt={t('about.blocks.lightCabin.imageAlt')}
              loading="lazy"
              decoding="async"
              className="aspect-[16/10] w-full object-cover"
            />
          </figure>
        </Reveal>
        <Reveal delay={120} as="div" className="lg:col-span-5">
          <span className="eyebrow !text-ink-mute dark:!text-white/55">
            {t('about.blocks.lightCabin.eyebrow')}
          </span>
          <h3 className="mt-3 font-display text-2xl font-semibold text-ink display-balance dark:text-white">
            {t('about.blocks.lightCabin.title')}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-ink-soft text-pretty dark:text-white/75">
            {t('about.blocks.lightCabin.body')}
          </p>
        </Reveal>
      </div>

      {/* Bloque 6: especialización técnica */}
      <div className="mt-20">
        <Reveal>
          <span className="eyebrow !text-ink-mute dark:!text-white/55">
            {t('about.blocks.specialty.eyebrow')}
          </span>
          <h3 className="mt-3 max-w-3xl font-display text-2xl font-semibold text-ink display-balance dark:text-white sm:text-3xl">
            {t('about.blocks.specialty.title')}
          </h3>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft text-pretty dark:text-white/75">
            {t('about.blocks.specialty.body')}
          </p>
        </Reveal>

        <div className="mt-8 grid items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {SPECIALITIES.map((k, i) => (
            <Reveal key={k} delay={i * 60} className="h-full">
              <div className="flex h-full items-start gap-3 rounded-xl border border-line bg-white p-4 shadow-soft dark:border-white/10 dark:bg-surface-dark-alt dark:shadow-none">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-blue/[0.08] text-brand-blue dark:bg-brand-blue-soft/15 dark:text-brand-blue-soft"
                >
                  <Check className="h-3.5 w-3.5" />
                </span>
                <div className="min-w-0">
                  <h4 className="font-display text-sm font-semibold text-ink dark:text-white">
                    {t(`about.blocks.specialty.items.${k}.title`)}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-ink-soft dark:text-white/65">
                    {t(`about.blocks.specialty.items.${k}.text`)}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} as="p" className="mt-8 max-w-3xl text-base leading-relaxed text-ink-soft text-pretty dark:text-white/75">
          {t('about.blocks.specialty.outro')}
        </Reveal>

        <div className="mt-10 grid items-stretch gap-5 sm:grid-cols-2">
          <Reveal className="h-full">
            <figure className="overflow-hidden rounded-2xl bg-white shadow-medium ring-1 ring-line dark:bg-surface-dark-alt dark:shadow-none dark:ring-white/10">
              <img
                src={edificiosExistentes}
                alt={t('about.blocks.specialty.imageAlt1')}
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] w-full object-contain bg-white p-4 dark:bg-white/95"
              />
              <figcaption className="border-t border-line/70 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute dark:border-white/10 dark:text-white/55">
                {t('about.blocks.specialty.caption1')}
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={80} className="h-full">
            <figure className="overflow-hidden rounded-2xl bg-white shadow-medium ring-1 ring-line dark:bg-surface-dark-alt dark:shadow-none dark:ring-white/10">
              <img
                src={sistemasRecuperacion}
                alt={t('about.blocks.specialty.imageAlt2')}
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] w-full object-contain bg-white p-4 dark:bg-white/95"
              />
              <figcaption className="border-t border-line/70 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute dark:border-white/10 dark:text-white/55">
                {t('about.blocks.specialty.caption2')}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>

      {/* Equipo — más compacto */}
      <div className="mt-24">
        <Reveal>
          <span className="eyebrow !text-ink-mute dark:!text-white/55">{t('team.eyebrow')}</span>
        </Reveal>
        <Reveal delay={80}>
          <h3 className="mt-3 max-w-2xl font-display text-xl font-semibold text-ink display-balance dark:text-white sm:text-2xl">
            {t('team.title')}
          </h3>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft text-pretty dark:text-white/65">
            {t('team.lede')}
          </p>
        </Reveal>

        {/* Liderazgo */}
        <div className="mt-10">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h4 className="eyebrow !text-ink-mute dark:!text-white/55">
              {t('team.groups.leadership')}
            </h4>
            <span className="hidden h-px flex-1 bg-line dark:bg-white/10 sm:block" />
            <span className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.22em] text-ink-subtle dark:text-white/40">
              02 / 09
            </span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {LEADS.map((p, i) => (
              <Reveal key={p.nameKey} delay={i * 60} className="h-full">
                <TeamCard person={p} variant="lead" />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Senior */}
        <div className="mt-10">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h4 className="eyebrow !text-ink-mute dark:!text-white/55">
              {t('team.groups.senior')}
            </h4>
            <span className="hidden h-px flex-1 bg-line dark:bg-white/10 sm:block" />
            <span className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.22em] text-ink-subtle dark:text-white/40">
              {String(SENIORS.length).padStart(2, '0')} / 09
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {SENIORS.map((p, i) => {
              const isOrphan2col =
                i === SENIORS.length - 1 && SENIORS.length % 2 === 1;
              return (
                <Reveal
                  key={p.nameKey}
                  delay={(i % 5) * 50}
                  className={`h-full ${
                    isOrphan2col
                      ? 'col-span-2 mx-auto w-full max-w-[calc(50%-0.375rem)] sm:col-span-1 sm:mx-0 sm:max-w-none'
                      : ''
                  }`}
                >
                  <TeamCard person={p} variant="senior" showRole={false} />
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Otros */}
        <div className="mt-10">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h4 className="eyebrow !text-ink-mute dark:!text-white/55">
              {t('team.groups.others')}
            </h4>
            <span className="hidden h-px flex-1 bg-line dark:bg-white/10 sm:block" />
            <span className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.22em] text-ink-subtle dark:text-white/40">
              {String(OTHERS.length).padStart(2, '0')} / 09
            </span>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {OTHERS.map((p, i) => (
              <Reveal key={p.nameKey} delay={(i % 4) * 50}>
                <TeamCard person={p} variant="compact" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutUs;
