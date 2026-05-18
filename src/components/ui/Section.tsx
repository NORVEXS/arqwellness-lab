import React, { ReactNode } from 'react';

type Tone = 'default' | 'alt' | 'warm' | 'dark';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  tone?: Tone;
  ariaLabel?: string;
  fullBleed?: boolean;
}

const toneClasses: Record<Tone, string> = {
  default: 'bg-surface text-ink',
  alt: 'bg-surface-alt text-ink',
  warm: 'bg-surface-warm text-ink',
  dark: 'bg-surface-dark text-white',
};

const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = '',
  tone = 'default',
  ariaLabel,
  fullBleed = false,
}) => {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`relative scroll-mt-[5rem] py-20 sm:py-24 lg:py-32 ${toneClasses[tone]} ${className}`}
    >
      {fullBleed ? children : <div className="container-x">{children}</div>}
    </section>
  );
};

export default Section;
