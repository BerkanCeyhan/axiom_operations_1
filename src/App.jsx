import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MobileCTABar from './components/MobileCTABar';
import ProblemSection from './components/ProblemSection';
import FailedSolutions from './components/FailedSolutions';
import Mechanism from './components/Mechanism';
import Capabilities from './components/Capabilities';
import SocialProof from './components/SocialProof';
import Process from './components/Process';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import Audit from './pages/Audit';

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
    <Routes>
      {/* Legal Pages */}
      <Route path="/impressum" element={<Impressum />} />
      <Route path="/datenschutz" element={<Datenschutz />} />
      <Route path="/audit" element={<Audit />} />

      {/* Main Landing Page */}
      <Route path="*" element={
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
          {/* <MobileCTABar theme={theme} /> */}
        </div>
      } />
    </Routes>
  );
}

export default App;
