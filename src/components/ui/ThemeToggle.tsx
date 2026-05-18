import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const { theme, toggle } = useTheme();
  const { t } = useTranslation();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? t('theme.toLight') : t('theme.toDark')}
      title={isDark ? t('theme.toLight') : t('theme.toDark')}
      className="relative flex h-8 w-8 items-center justify-center rounded-full border border-line bg-white/70 text-ink-soft transition-colors hover:border-line-strong hover:text-ink dark:border-white/15 dark:bg-white/[0.04] dark:text-white/75 dark:hover:border-white/25 dark:hover:text-white"
    >
      <Sun
        aria-hidden="true"
        className={`h-4 w-4 transition-all duration-300 ease-out-quart ${
          isDark ? '-rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
        }`}
      />
      <Moon
        aria-hidden="true"
        className={`absolute h-4 w-4 transition-all duration-300 ease-out-quart ${
          isDark ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
