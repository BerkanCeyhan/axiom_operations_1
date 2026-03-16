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
    const handleScroll = () => {
      const proofSection = document.getElementById('proof');
      if (proofSection) {
        const rect = proofSection.getBoundingClientRect();
        // Detect if Navbar (roughly 80px from top including margin) is within section boundaries
        const isOver = rect.top <= 100 && rect.bottom >= 40;
        setIsNavbarOverLight(isOver);
      } else {
        setIsNavbarOverLight(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans relative overflow-x-hidden w-full">
      <Navbar theme={theme} isOverLight={isNavbarOverLight} />
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
