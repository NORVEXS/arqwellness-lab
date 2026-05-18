import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useScrollPosition } from '../../hooks/useScrollPosition';

const ScrollToTop: React.FC = () => {
  const { t } = useTranslation();
  const visible = useScrollPosition(500);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={t('scrollToTop')}
      className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow-large ring-1 ring-line transition-all duration-300 ease-out-quart hover:bg-brand-blue hover:text-white hover:ring-brand-blue dark:bg-surface-dark-alt dark:text-white dark:ring-white/15 dark:hover:bg-brand-blue-soft dark:hover:text-surface-dark dark:hover:ring-brand-blue-soft ${
        visible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};

export default ScrollToTop;
