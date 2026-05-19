// Default breathing room between the header and the next section title.
const DEFAULT_BREATHING_PX = 12;

export function scrollToSection(
  id: string,
  extraOffset = DEFAULT_BREATHING_PX,
): void {
  const el = document.getElementById(id);
  if (!el) return;
  const header = document.querySelector<HTMLElement>('header[role="banner"]');
  const headerHeight = header?.getBoundingClientRect().height ?? 0;
  const y =
    el.getBoundingClientRect().top + window.scrollY - headerHeight - extraOffset;
  window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
}
