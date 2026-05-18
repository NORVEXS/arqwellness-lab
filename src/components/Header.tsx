import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe2, Check } from 'lucide-react';
import { NAV_IDS } from '../data/navigation';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { scrollToSection } from '../lib/scroll';
import logo from '../assets/images/logo.png';

const LANGS = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' },
] as const;

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const scrolled = useScrollPosition(24);
  const active = useScrollSpy([...NAV_IDS]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const goTo = (id: string) => {
    setMobileOpen(false);
    scrollToSection(id);
  };

  const changeLang = (code: string) => {
    i18n.changeLanguage(code);
    setLangOpen(false);
  };

  return (
    <header
      role="banner"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-450 ease-out-quart ${
        scrolled || mobileOpen ? 'glass py-2.5' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-x flex items-center justify-between gap-4">
        <a
          href="#introduction"
          onClick={(e) => {
            e.preventDefault();
            goTo('introduction');
          }}
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt={t('logoAlt')}
            className="h-8 w-auto sm:h-9"
            width={420}
            height={70}
            decoding="async"
          />
        </a>

        {/* Desktop nav */}
        <nav
          aria-label={t('nav.ariaPrimary')}
          className="hidden items-center gap-1 lg:flex"
        >
          {NAV_IDS.map((id) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => goTo(id)}
                aria-current={isActive ? 'page' : undefined}
                className={`group relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive ? 'text-brand-blue' : 'text-ink-soft hover:text-ink'
                }`}
              >
                <span>{t(`nav.${id}`)}</span>
                <span
                  className={`pointer-events-none absolute inset-x-3.5 -bottom-0.5 h-px bg-gradient-to-r from-brand-blue via-brand-purple to-brand-red transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-30'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5">
          {/* Language */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={langOpen}
              aria-label={t('nav.ariaLang')}
              className="flex items-center gap-1.5 rounded-full border border-line bg-white/70 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-ink-soft transition-colors hover:border-line-strong hover:text-ink"
            >
              <Globe2 className="h-4 w-4" />
              <span>{i18n.language.split('-')[0]}</span>
            </button>
            {langOpen && (
              <div
                role="menu"
                className="absolute right-0 mt-2 w-44 overflow-hidden rounded-xl border border-line bg-white shadow-medium"
              >
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    role="menuitemradio"
                    aria-checked={i18n.language.startsWith(l.code)}
                    onClick={() => changeLang(l.code)}
                    className="flex w-full items-center justify-between px-4 py-2.5 text-sm text-ink-soft transition hover:bg-surface-alt hover:text-ink"
                  >
                    <span>{l.label}</span>
                    {i18n.language.startsWith(l.code) && (
                      <Check className="h-4 w-4 text-brand-blue" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            className="hidden md:inline-flex lg:hidden btn-secondary !px-3 !py-1.5 !text-xs"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? t('nav.closeMenu') : t('nav.openMenu')}
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>

          <button
            type="button"
            className="rounded-full p-2 text-ink-soft transition-colors hover:bg-surface-alt hover:text-ink lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? t('nav.closeMenu') : t('nav.openMenu')}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        className={`lg:hidden ${
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        } absolute inset-x-0 top-full origin-top transition-all duration-300`}
      >
        <nav
          aria-label={t('nav.ariaPrimary')}
          className="container-x mt-2 overflow-hidden rounded-2xl border border-line bg-white shadow-large"
        >
          <ul className="flex flex-col p-2">
            {NAV_IDS.map((id) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => goTo(id)}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base transition ${
                      isActive
                        ? 'bg-brand-blue/[0.06] font-semibold text-brand-blue'
                        : 'text-ink-soft hover:bg-surface-alt hover:text-ink'
                    }`}
                  >
                    <span>{t(`nav.${id}`)}</span>
                    <span className="font-mono text-[11px] text-ink-mute">
                      0{NAV_IDS.indexOf(id) + 1}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
