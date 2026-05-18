import React from 'react';
import { useReveal } from '../../hooks/useReveal';
import { useCountUp } from '../../hooks/useCountUp';

interface StatProps {
  value: string;
  label: string;
  tone?: 'light' | 'dark';
}

const parseStat = (raw: string): { num: number | null; prefix: string; suffix: string } => {
  const match = raw.match(/^(\D*?)(\d+)(\D*)$/);
  if (!match) return { num: null, prefix: '', suffix: '' };
  return { prefix: match[1] ?? '', num: Number(match[2]), suffix: match[3] ?? '' };
};

const Stat: React.FC<StatProps> = ({ value, label, tone = 'light' }) => {
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
  const counted = useCountUp(num ?? 0, 1400, active && num !== null);

  return (
    <div ref={ref} className="reveal">
      <div
        className={`font-display text-[clamp(2.25rem,4vw+0.5rem,3.5rem)] font-medium leading-none tracking-tight ${
          tone === 'dark' ? 'text-white' : 'text-ink'
        }`}
      >
        {num === null ? value : `${prefix}${counted}${suffix}`}
      </div>
      <div
        className={`mt-2 font-mono text-[11px] uppercase tracking-[0.22em] ${
          tone === 'dark' ? 'text-white/55' : 'text-ink-mute'
        }`}
      >
        {label}
      </div>
    </div>
  );
};

export default Stat;
