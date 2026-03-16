import { useEffect, useState, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load below-the-fold components and subpages
const ProblemSection = lazy(() => import('./components/ProblemSection'));
const FailedSolutions = lazy(() => import('./components/FailedSolutions'));
const Mechanism = lazy(() => import('./components/Mechanism'));
const Capabilities = lazy(() => import('./components/Capabilities'));
const SocialProof = lazy(() => import('./components/SocialProof'));
const Process = lazy(() => import('./components/Process'));
const FAQ = lazy(() => import('./components/FAQ'));
const FinalCTA = lazy(() => import('./components/FinalCTA'));
const Footer = lazy(() => import('./components/Footer'));
const Impressum = lazy(() => import('./pages/Impressum'));
const Datenschutz = lazy(() => import('./pages/Datenschutz'));
const Audit = lazy(() => import('./pages/Audit'));

// Simple loading skeleton to prevent layout shift
const SectionPlaceholder = () => <div className="min-h-[50vh] bg-dark" />;

const NotFound = lazy(() => import('./pages/NotFound'));

// Home component to wrap the landing page sections
const Home = ({ theme, isNavbarOverLight, activeSection }) => (
  <div className="min-h-screen font-sans relative overflow-x-hidden w-full">
    <Navbar theme={theme} isOverLight={isNavbarOverLight} activeSection={activeSection} />
    <Hero theme={theme} />
    <div id="content-start">
      <ProblemSection theme={theme} />
      <FailedSolutions theme={theme} />
      <Mechanism theme={theme} />
      <Capabilities theme={theme} />
      <SocialProof theme={theme} />
      <Process theme={theme} />
      <FAQ theme={theme} />
      <FinalCTA theme={theme} />
      <Footer theme={theme} />
    </div>
  </div>
);

function App() {
  const [theme, setTheme] = useState('dark');
  const [isNavbarOverLight, setIsNavbarOverLight] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('v') === 'L') {
      setTheme('light');
      document.documentElement.classList.add('theme-light');
    } else {
      setTheme('dark');
      document.documentElement.classList.remove('theme-light');
    }
  }, []);

  useEffect(() => {
    // 1. Scroll Spy Logic
    const sectionIds = ['problem', 'mechanism', 'capabilities', 'proof'];
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -85% 0px', 
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      const proofSection = document.getElementById('proof');
      if (proofSection) {
        const rect = proofSection.getBoundingClientRect();
        // Detect if Navbar overlaps with light section
        const isOver = rect.top <= 100 && rect.bottom >= 40;
        setIsNavbarOverLight(isOver);
      } else {
        setIsNavbarOverLight(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Suspense fallback={<SectionPlaceholder />}>
      <Routes>
        {/* Main Landing Page */}
        <Route path="/" element={<Home theme={theme} isNavbarOverLight={isNavbarOverLight} activeSection={activeSection} />} />

        {/* Legal Pages */}
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/audit" element={<Audit />} />

        {/* Catch-all 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
