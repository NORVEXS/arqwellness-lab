import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users, Layers } from 'lucide-react';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import { GROUPS, GroupKey } from '../data/research';

const initials = (raw: string) =>
  raw
    .split(' ')
    .filter(Boolean)
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

const accent: Record<GroupKey, { ring: string; chip: string; glow: string }> = {
  tep130: {
    ring: 'before:bg-gradient-to-br before:from-brand-blue before:to-brand-purple',
    chip: 'from-brand-blue to-brand-purple',
    glow: 'hover:shadow-glow',
  },
  tep1000: {
    ring: 'before:bg-gradient-to-br before:from-brand-red before:to-brand-purple',
    chip: 'from-brand-red to-brand-purple',
    glow: 'hover:shadow-[0_18px_48px_rgba(162,1,3,0.16)]',
  },
};

const ResearchGroups: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section id="research-groups" tone="alt" ariaLabel={t('groups.title')}>
      <SectionHeader
        eyebrow={t('groups.eyebrow')}
        title={t('groups.title')}
        lede={t('groups.lede')}
        ledeEmphasize={['TEP-130', 'TEP-1000', 'IUACC']}
      />

      <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-2">
        {GROUPS.map((g, idx) => {
          const members = t(`groups.${g}.members`, { returnObjects: true }) as string[];
          const focus = t(`groups.${g}.focus`, { returnObjects: true }) as string[];
          return (
            <Reveal key={g} delay={idx * 100} className="h-full">
              <article
                className={`relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-8 shadow-soft transition-all duration-500 ease-out-quart dark:border-white/10 dark:bg-surface-dark-alt dark:shadow-none ${accent[g].glow}`}
              >
                <div
                  className={`pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-[0.07] bg-gradient-to-br ${accent[g].chip}`}
                  aria-hidden="true"
                />

                <header className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="font-mono text-eyebrow uppercase tracking-eyebrow text-ink-mute dark:text-white/50">
                      {t(`groups.${g}.code`)}
                    </span>
                    <h3 className="mt-2 font-display text-2xl font-medium text-ink display-balance dark:text-white">
                      {t(`groups.${g}.name`)}
                    </h3>
                  </div>
                  <span
                    aria-hidden="true"
                    className={`inline-flex items-center justify-center rounded-full bg-gradient-to-br ${accent[g].chip} px-3 py-1 font-mono text-[11px] font-medium text-white shadow-medium`}
                  >
                    PAIDI
                  </span>
                </header>

                <p className="mt-5 text-ink-soft leading-relaxed text-pretty dark:text-white/70">
                  {t(`groups.${g}.description`)}
                </p>

                <div className="mt-7">
                  <h4 className="flex items-center gap-2 font-mono text-eyebrow uppercase tracking-eyebrow text-ink-mute dark:text-white/55">
                    <Users className="h-3.5 w-3.5" />
                    <span>{t('groups.membersTitle')}</span>
                  </h4>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {members.map((m) => (
                      <li
                        key={m}
                        className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-alt px-3 py-1.5 text-xs dark:border-white/10 dark:bg-white/[0.04]"
                      >
                        <span
                          aria-hidden="true"
                          className={`flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br ${accent[g].chip} font-mono text-[10px] font-medium text-white`}
                        >
                          {initials(m)}
                        </span>
                        <span className="text-ink-soft dark:text-white/80">{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7">
                  <h4 className="flex items-center gap-2 font-mono text-eyebrow uppercase tracking-eyebrow text-ink-mute dark:text-white/55">
                    <Layers className="h-3.5 w-3.5" />
                    <span>{t('groups.focusTitle')}</span>
                  </h4>
                  <ul className="mt-3 space-y-2 text-sm text-ink-soft dark:text-white/70">
                    {focus.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1.5 shrink-0 rounded-full bg-ink-mute"
                        />
                        <span className="text-pretty">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};

export default ResearchGroups;
