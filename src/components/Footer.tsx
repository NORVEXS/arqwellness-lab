import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import logo from '../assets/images/logo.png';
import { NAV_IDS } from '../data/navigation';
import { scrollToSection } from '../lib/scroll';
import { navigate } from '../hooks/useRoute';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const goTo = (id: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(id), 50);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <footer
      role="contentinfo"
      className="relative isolate overflow-hidden bg-surface-dark text-white/85"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dots-dark opacity-30"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            'radial-gradient(60% 60% at 0% 0%, rgba(59, 48, 130, 0.25) 0%, transparent 60%), radial-gradient(45% 45% at 100% 100%, rgba(45, 92, 136, 0.25) 0%, transparent 60%)',
        }}
      />

      <div className="container-x py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
              <img
                src={logo}
                alt={t('logoAlt')}
                width={420}
                height={70}
                className="h-10 w-auto"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="mt-6 max-w-md text-pretty text-white/65">{t('footer.tagline')}</p>
            <p className="mt-2 text-sm text-white/45">{t('footer.institution')}</p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h4 className="eyebrow text-white/55">{t('footer.explore')}</h4>
              <ul className="mt-5 space-y-2.5">
                {NAV_IDS.map((id) => (
                  <li key={id}>
                    <button
                      type="button"
                      onClick={() => goTo(id)}
                      className="text-sm text-white/75 transition-colors hover:text-white"
                    >
                      {t(`nav.${id}`)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="eyebrow text-white/55">{t('footer.lab')}</h4>
              <ul className="mt-5 space-y-3 text-sm text-white/75">
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue-soft" />
                  <span className="whitespace-pre-line">
                    {t('contact.channels.address.value')}
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 shrink-0 text-brand-blue-soft" />
                  <a
                    href="mailto:tep130@us.es"
                    className="transition-colors hover:text-white"
                  >
                    tep130@us.es
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-brand-blue-soft" />
                  <a
                    href="tel:+34954556560"
                    className="transition-colors hover:text-white"
                  >
                    +34 954 55 65 60
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="eyebrow text-white/55">{t('footer.legal')}</h4>
              <ul className="mt-5 space-y-2.5 text-sm text-white/75">
                <li>
                  <a
                    href="/aviso-legal"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/aviso-legal');
                    }}
                    className="inline-flex items-center gap-1 transition-colors hover:text-white"
                  >
                    {t('footer.legalNotice')}
                  </a>
                </li>
                <li>
                  <a
                    href="/politica-de-privacidad"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/politica-de-privacidad');
                    }}
                    className="inline-flex items-center gap-1 transition-colors hover:text-white"
                  >
                    {t('footer.privacy')}
                  </a>
                </li>
                <li>
                  <a
                    href="/politica-de-cookies"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/politica-de-cookies');
                    }}
                    className="inline-flex items-center gap-1 transition-colors hover:text-white"
                  >
                    {t('footer.cookies')}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.us.es/accesibilidad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 transition-colors hover:text-white"
                  >
                    {t('footer.accessibility')} <ArrowUpRight className="h-3 w-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:items-center">
          <p>
            © {year} ArqWellness Lab · {t('footer.rights')}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em]">
            {t('footer.credits')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
