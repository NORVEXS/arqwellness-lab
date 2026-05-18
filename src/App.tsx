import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Hero from './components/Introduction';
import AboutUs from './components/AboutUs';
import ResearchLines from './components/ResearchLines';
import ResearchGroups from './components/ResearchGroups';
import Training from './components/Training';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ui/ScrollToTop';

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t('meta.title');
    const desc = document.querySelector('meta[name="description"]');
    desc?.setAttribute('content', t('meta.description'));
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    ogLocale?.setAttribute('content', t('meta.ogLocale'));
  }, [t, i18n.language]);

  return (
    <div className="min-h-screen bg-surface font-body text-ink">
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <AboutUs />
        <ResearchLines />
        <ResearchGroups />
        <Training />
        <Projects />
        <Publications />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
