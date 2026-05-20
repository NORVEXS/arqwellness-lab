import { useEffect, useState } from 'react';

export function useRoute() {
  const [path, setPath] = useState<string>(
    typeof window !== 'undefined' ? window.location.pathname : '/',
  );

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  return path;
}

export function navigate(path: string) {
  if (typeof window === 'undefined') return;
  if (window.location.pathname === path) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
  // Scroll inmediato + tras el render (móvil ignora el inmediato si el DOM aún no cambió)
  window.scrollTo(0, 0);
  requestAnimationFrame(() => window.scrollTo(0, 0));
}
