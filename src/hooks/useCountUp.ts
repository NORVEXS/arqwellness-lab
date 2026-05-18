import { useEffect, useRef, useState } from 'react';

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

export function useCountUp(end: number, duration = 1400, active = true) {
  const [value, setValue] = useState(active && !prefersReducedMotion ? 0 : end);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    if (prefersReducedMotion) {
      setValue(end);
      return;
    }
    started.current = true;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * end));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, active]);

  return value;
}
