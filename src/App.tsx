import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Hero from './components/Introduction';
import AboutUs from './components/AboutUs';
import ResearchLines from './components/ResearchLines';
import ResearchGroups from './components/ResearchGroups';
import Infrastructure from './components/Infrastructure';
import Training from './components/Training';
import Projects from './components/Projects';
import Resources from './components/Resources';
import Outreach from './components/Outreach';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ui/ScrollToTop';
import LegalPage, { LegalSlug } from './components/LegalPage';
import DivulgacionPage from './components/DivulgacionPage';
import { useRoute } from './hooks/useRoute';

const LEGAL_SLUGS: LegalSlug[] = [
  'aviso-legal',
  'politica-de-privacidad',
  'politica-de-cookies',
];

function App() {
  const { t, i18n } = useTranslation();
  const path = useRoute();

  useEffect(() => {
    document.title = t('meta.title');
    const desc = document.querySelector('meta[name="description"]');
    desc?.setAttribute('content', t('meta.description'));
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    ogLocale?.setAttribute('content', t('meta.ogLocale'));
  }, [t, i18n.language]);

  const cleanPath = path.replace(/^\/+|\/+$/g, '');
  const legalMatch = LEGAL_SLUGS.find((s) => cleanPath === s);
  const isDivulgacion = cleanPath === 'divulgacion';

  return (
    <div className="min-h-screen bg-surface font-body text-ink">
      <Header />
      <main id="main" tabIndex={-1}>
        {legalMatch ? (
          <LegalPage slug={legalMatch} />
        ) : isDivulgacion ? (
          <DivulgacionPage />
        ) : (
          <>
            <Hero />
            <AboutUs />
            <ResearchLines />
            <ResearchGroups />
            <Infrastructure />
            <Training />
            <Projects />
            <Resources />
            <Outreach />
            <Contact />
          </>
        )}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
