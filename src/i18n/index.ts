import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import es from './locales/es.json';
import en from './locales/en.json';

export const SUPPORTED_LANGS = ['es', 'en'] as const;
export type SupportedLang = (typeof SUPPORTED_LANGS)[number];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
    },
    supportedLngs: SUPPORTED_LANGS as unknown as string[],
    fallbackLng: 'es',
    load: 'languageOnly',
    detection: {
      order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
      lookupQuerystring: 'lng',
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },
    interpolation: { escapeValue: false },
  });

const applyLangAttr = (lng: string) => {
  const code = (lng || 'es').split('-')[0];
  if (typeof document !== 'undefined') {
    document.documentElement.lang = code;
    document.documentElement.dir = 'ltr';
  }
};

i18n.on('languageChanged', applyLangAttr);
applyLangAttr(i18n.language);

export default i18n;
