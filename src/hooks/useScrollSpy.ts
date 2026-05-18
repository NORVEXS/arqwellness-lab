import { useEffect, useState } from 'react';

export function useScrollSpy(ids: string[], rootMargin = '-40% 0px -55% 0px'): string {
  const [active, setActive] = useState<string>(ids[0] ?? '');

  useEffect(() => {
    if (typeof window === 'undefined' || !ids.length) return;

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin, threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [ids.join('|'), rootMargin]);

  return active;
}
