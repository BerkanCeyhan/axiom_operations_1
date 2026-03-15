import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// ... rest of imports

function App() {
  const [theme, setTheme] = useState('dark');

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

  return (
    <div className={`min-h-screen font-sans relative ${theme === 'light' ? 'bg-[#E8E4DC] text-[#0F0F0E]' : 'bg-[#0F0F0E] text-[#E8E4DC]'}`}>
      <Navbar theme={theme} />
      <Hero theme={theme} />
      <div id="content-start">
        <ProblemSection />
        <FailedSolutions />
        <Mechanism />
        <Capabilities />
        <SocialProof />
        <Process />
        <FAQ />
        <FinalCTA />
        <Footer theme={theme} />
      </div>
      <MobileCTABar />
    </div>
  );
}

export default App;
