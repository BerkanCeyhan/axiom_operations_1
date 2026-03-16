import { useEffect, useState } from 'react';
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
    const sectionIds = ['problem', 'mechanism', 'capabilities', 'proof', 'process', 'faq', 'audit'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Trigger when section is in the top-ish part of viewport
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

    // 2. Navbar Background Contrast Logic (Adaptive Header)
    const handleScroll = () => {
      const proofSection = document.getElementById('proof');
      if (proofSection) {
        const rect = proofSection.getBoundingClientRect();
        // Navbar is fixed at top:6 (1.5rem / 24px)
        // Detect if Navbar (approx 60-80px height) overlaps with light section
        const isOver = rect.top <= 100 && rect.bottom >= 40;
        setIsNavbarOverLight(isOver);
      } else {
        setIsNavbarOverLight(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
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
      <MobileCTABar theme={theme} />
    </div>
  );
}

export default App;
