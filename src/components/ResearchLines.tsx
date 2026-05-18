import React from 'react';
import { useTranslation } from 'react-i18next';
import { Thermometer, Sun, Cpu, ArrowUpRight } from 'lucide-react';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import { RESEARCH_LINES, ResearchLine } from '../data/research';

const ICONS = { Thermometer, Sun, Cpu };

const accentText: Record<ResearchLine['accent'], string> = {
  blue: 'text-brand-blue',
  red: 'text-brand-red',
  purple: 'text-brand-purple',
};

const accentBorder: Record<ResearchLine['accent'], string> = {
  blue: 'group-hover:border-brand-blue/35 group-hover:shadow-glow',
  red: 'group-hover:border-brand-red/35 group-hover:shadow-[0_18px_48px_rgba(162,1,3,0.18)]',
  purple: 'group-hover:border-brand-purple/35 group-hover:shadow-glow-purple',
};

const ResearchLines: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section id="research-lines" tone="default" ariaLabel={t('research.title')}>
      <SectionHeader
        eyebrow={t('research.eyebrow')}
        title={t('research.title')}
        lede={t('research.lede')}
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {RESEARCH_LINES.map((line, idx) => {
          const Icon = ICONS[line.iconName];
          const items = t(`research.lines.${line.key}.items`, { returnObjects: true }) as string[];
          return (
            <Reveal key={line.key} delay={idx * 80}>
              <article
                className={`group relative flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition-all duration-500 ease-out-quart hover:-translate-y-1.5 ${accentBorder[line.accent]}`}
              >
                <header className="flex items-start justify-between gap-3">
                  <span
                    className={`font-mono text-eyebrow uppercase tracking-eyebrow ${accentText[line.accent]}`}
                  >
                    {t(`research.lines.${line.key}.number`)}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`flex h-11 w-11 items-center justify-center rounded-xl bg-surface-alt ${accentText[line.accent]} transition-transform duration-450 ease-out-quart group-hover:rotate-6`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                </header>
                <h3 className="mt-6 font-display text-2xl font-medium text-ink display-balance">
                  {t(`research.lines.${line.key}.title`)}
                </h3>
                <p className="mt-3 text-ink-soft leading-relaxed">
                  {t(`research.lines.${line.key}.summary`)}
                </p>

                <ul className="mt-6 space-y-2.5 text-sm text-ink-soft">
                  {items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className={`mt-2 h-1 w-3 rounded-full bg-current ${accentText[line.accent]} opacity-70`}
                      />
                      <span className="text-pretty">{item}</span>
                    </li>
                  ))}
                </ul>

                <footer className="mt-8 flex items-end justify-between border-t border-line/80 pt-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
                    ArqWellness · {line.key.toUpperCase()}
                  </span>
                  <ArrowUpRight
                    className={`h-5 w-5 transition-transform duration-300 ${accentText[line.accent]} group-hover:-translate-y-0.5 group-hover:translate-x-0.5`}
                  />
                </footer>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};

export default ResearchLines;
