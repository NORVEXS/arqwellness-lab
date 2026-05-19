import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, Newspaper, Megaphone, Database } from 'lucide-react';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import { useReveal } from '../hooks/useReveal';
import { useCountUp } from '../hooks/useCountUp';

const STATS = ['collaborations', 'papers', 'media'] as const;

const parseStat = (raw: string) => {
  const m = raw.match(/^(\D*?)(\d+)(\D*)$/);
  return m
    ? { prefix: m[1], num: Number(m[2]), suffix: m[3] }
    : { prefix: '', num: null, suffix: raw };
};

const OutreachStat: React.FC<{ value: string; label: string; index: number }> = ({
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
      <div className="font-display text-4xl font-semibold tracking-tight text-ink dark:text-white sm:text-5xl">
        {num === null ? value : `${prefix}${counted}${suffix}`}
      </div>
      <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute dark:text-white/55">
        {label}
      </div>
    </div>
  );
};

const Outreach: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section id="outreach" tone="default" ariaLabel={t('outreach.title')}>
      <SectionHeader
        eyebrow={t('outreach.eyebrow')}
        title={t('outreach.title')}
        lede={t('outreach.lede')}
        ledeEmphasize={[
          'workshops',
          'salud',
          'bienestar',
          'health',
          'wellbeing',
        ]}
      />

      {/* Impact stats */}
      <div className="mt-14 grid grid-cols-1 gap-10 border-y border-line/70 py-10 dark:border-white/10 sm:grid-cols-3 sm:gap-8">
        {STATS.map((key, i) => (
          <OutreachStat
            key={key}
            index={i}
            value={t(`outreach.stats.${key}.value`)}
            label={t(`outreach.stats.${key}.label`)}
          />
        ))}
      </div>

      {/* Cards */}
      <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
        {/* Cobertura en medios */}
        <Reveal className="h-full">
          <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-soft dark:border-white/10 dark:bg-surface-dark-alt dark:shadow-none">
            <span
              aria-hidden="true"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/[0.08] text-brand-blue dark:bg-brand-blue-soft/15 dark:text-brand-blue-soft"
            >
              <Newspaper className="h-5 w-5" />
            </span>
            <h3 className="mt-6 font-display text-xl font-semibold text-ink display-balance dark:text-white">
              {t('outreach.outlets.title')}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft text-pretty dark:text-white/70">
              {t('outreach.outlets.description')}
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {['El País', 'Antena 3', 'El Periódico', 'Europa Press', 'Faro de Vigo'].map(
                (m) => (
                  <span
                    key={m}
                    className="rounded-md border border-line bg-surface-alt px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft dark:border-white/10 dark:bg-white/[0.04] dark:text-white/65"
                  >
                    {m}
                  </span>
                ),
              )}
            </div>
          </article>
        </Reveal>

        {/* Workshops y divulgación */}
        <Reveal delay={80} className="h-full">
          <a
            href="https://institucional.us.es/arqwellness/investigacion/difusion/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-soft transition-all duration-450 ease-out-quart hover:-translate-y-1 hover:border-brand-purple/30 hover:shadow-medium dark:border-white/10 dark:bg-surface-dark-alt dark:shadow-none dark:hover:border-brand-purple/50"
          >
            <header className="flex items-start justify-between gap-3">
              <span
                aria-hidden="true"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-purple/[0.08] text-brand-purple dark:bg-brand-purple/20 dark:text-[#B9B2E8]"
              >
                <Megaphone className="h-5 w-5" />
              </span>
              <ArrowUpRight className="h-5 w-5 text-ink-mute transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-purple dark:text-white/45 dark:group-hover:text-[#B9B2E8]" />
            </header>
            <h3 className="mt-6 font-display text-xl font-semibold text-ink display-balance dark:text-white">
              {t('outreach.media.title')}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft text-pretty dark:text-white/70">
              {t('outreach.media.description')}
            </p>
            <span className="mt-6 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-purple dark:text-[#B9B2E8]">
              {t('outreach.media.cta')}
            </span>
          </a>
        </Reveal>

        {/* Referencias PRISMA */}
        <Reveal delay={160} className="h-full">
          <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-soft dark:border-white/10 dark:bg-surface-dark-alt dark:shadow-none">
            <span
              aria-hidden="true"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-red/[0.08] text-brand-red dark:bg-brand-red/20 dark:text-brand-red-soft"
            >
              <Database className="h-5 w-5" />
            </span>
            <h3 className="mt-6 font-display text-xl font-semibold text-ink display-balance dark:text-white">
              {t('outreach.references.title')}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft text-pretty dark:text-white/70">
              {t('outreach.references.description')}
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <a
                href="https://prisma.us.es/colectivo/grupo/TEP-130"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between gap-2 rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink-soft transition-colors hover:border-brand-red/40 hover:text-brand-red dark:border-white/10 dark:bg-white/[0.03] dark:text-white/75 dark:hover:border-brand-red/50 dark:hover:text-brand-red-soft"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.18em]">
                  {t('outreach.references.ctaTep130')}
                </span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://prisma.us.es/colectivo/grupo/TEP-1000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between gap-2 rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink-soft transition-colors hover:border-brand-red/40 hover:text-brand-red dark:border-white/10 dark:bg-white/[0.03] dark:text-white/75 dark:hover:border-brand-red/50 dark:hover:text-brand-red-soft"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.18em]">
                  {t('outreach.references.ctaTep1000')}
                </span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </article>
        </Reveal>
      </div>
    </Section>
  );
};

export default Outreach;
