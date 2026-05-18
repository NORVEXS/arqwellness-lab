export function scrollToSection(id: string, extraOffset = 0): void {
  const el = document.getElementById(id);
  if (!el) return;
  const header = document.querySelector<HTMLElement>('header[role="banner"]');
  const headerHeight = header?.getBoundingClientRect().height ?? 0;
  const y =
    el.getBoundingClientRect().top + window.scrollY - headerHeight - extraOffset;
  window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
}
