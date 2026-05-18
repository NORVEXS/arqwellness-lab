import React from 'react';
import { useTranslation } from 'react-i18next';
import { Compass, Target, FlaskConical } from 'lucide-react';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import membersImg from '../assets/images/members.jpg';
import { LEADS, SENIORS, OTHERS } from '../data/team';
import TeamCard from './ui/TeamCard';

const PILLARS: { key: 'mission' | 'vision' | 'approach'; Icon: any; tone: string }[] = [
  { key: 'mission', Icon: Target, tone: 'text-brand-blue' },
  { key: 'vision', Icon: Compass, tone: 'text-brand-purple' },
  { key: 'approach', Icon: FlaskConical, tone: 'text-brand-red' },
];

const AboutUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section id="about" tone="default" ariaLabel={t('about.title')}>
      <SectionHeader
        eyebrow={t('about.eyebrow')}
        title={t('about.title')}
        lede={t('about.lede')}
      />

      <div className="mt-14 grid items-start gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <figure className="relative overflow-hidden rounded-2xl bg-surface-alt shadow-large">
              <img
                src={membersImg}
                alt={t('about.imageAlt')}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent p-5 text-white">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/80">
                  ETSA · Sevilla
                </span>
                <div className="flex gap-2">
                  <span className="tag-dark">TEP-130</span>
                  <span className="tag-dark">TEP-1000</span>
                </div>
              </figcaption>
            </figure>
          </Reveal>

          <div className="mt-8 space-y-5 text-ink-soft">
            <Reveal as="p" delay={80}>
              {t('about.longA')}
            </Reveal>
            <Reveal as="p" delay={120}>
              {t('about.longB')}
            </Reveal>
          </div>
        </div>

        <div className="space-y-5 lg:col-span-5">
          {PILLARS.map(({ key, Icon, tone }, i) => (
            <Reveal key={key} delay={i * 80}>
              <article className="card card-hover overflow-hidden p-6">
                <div className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface-alt ${tone}`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl font-medium text-ink">
                      {t(`about.pillars.${key}.title`)}
                    </h3>
                    <p className="mt-2 text-ink-soft leading-relaxed">
                      {t(`about.pillars.${key}.text`)}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="mt-24">
        <SectionHeader
          eyebrow={t('team.eyebrow')}
          title={t('team.title')}
          lede={t('team.lede')}
        />

        {/* Liderazgo */}
        <div className="mt-12">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h3 className="eyebrow !text-ink-mute">{t('team.groups.leadership')}</h3>
            <span className="hidden h-px flex-1 bg-line sm:block" />
            <span className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.22em] text-ink-subtle">
              02 / 09
            </span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-5">
            {LEADS.map((p, i) => (
              <Reveal key={p.nameKey} delay={i * 60} className="h-full">
                <TeamCard person={p} variant="lead" />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Senior */}
        <div className="mt-14">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h3 className="eyebrow !text-ink-mute">{t('team.groups.senior')}</h3>
            <span className="hidden h-px flex-1 bg-line sm:block" />
            <span className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.22em] text-ink-subtle">
              {String(SENIORS.length).padStart(2, '0')} / 09
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
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
        <div className="mt-14">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h3 className="eyebrow !text-ink-mute">{t('team.groups.others')}</h3>
            <span className="hidden h-px flex-1 bg-line sm:block" />
            <span className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.22em] text-ink-subtle">
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
