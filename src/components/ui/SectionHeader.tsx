import React from 'react';
import Reveal from './Reveal';
import { emphasize } from '../../lib/emphasize';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  className?: string;
  ledeEmphasize?: string[];
  ledeLinks?: Record<string, string>;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  lede,
  align = 'left',
  tone = 'light',
  className = '',
  ledeEmphasize,
  ledeLinks,
}) => {
  const isDark = tone === 'dark';
  return (
    <header
      className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}
    >
      {eyebrow && (
        <Reveal>
          <span className={`eyebrow ${isDark ? 'text-white/60' : ''}`}>{eyebrow}</span>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2
          className={`mt-4 font-display text-display-md font-medium display-balance ${
            isDark ? 'text-white' : 'text-ink'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {lede && (
        <Reveal delay={140}>
          <p
            className={`mt-5 text-base leading-relaxed text-pretty sm:text-lg ${
              isDark ? 'text-white/70' : 'text-ink-soft'
            }`}
          >
            {ledeEmphasize && ledeEmphasize.length > 0
              ? emphasize(lede, ledeEmphasize, ledeLinks)
              : lede}
          </p>
        </Reveal>
      )}
    </header>
  );
};

export default SectionHeader;
