import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ShaderCanvas from '../components/ShaderCanvas';

const Success = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Theme detection
    const params = new URLSearchParams(window.location.search);
    if (params.get('v') === 'L') {
      setTheme('light');
      document.documentElement.classList.add('theme-light');
    } else {
      setTheme('dark');
      document.documentElement.classList.remove('theme-light');
    }

    // Dynamic SEO
    document.title = 'Vielen Dank | Axiom Operations';
    
    // Add robots noindex
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.name = 'robots';
      document.head.appendChild(metaRobots);
    }
    const originalRobots = metaRobots.content;
    metaRobots.content = 'noindex, follow';

    // Add canonical
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    const originalCanonical = linkCanonical.href;
    linkCanonical.href = 'https://axiom-operations.de/danke';

    // Add description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      const originalDesc = metaDesc.content;
      metaDesc.content = 'Deine Buchung war erfolgreich. Vielen Dank für dein Vertrauen.';
      return () => {
        document.title = 'Axiom Operations – Fulfillment OS™ für Agenturen & Dienstleister';
        metaRobots.content = originalRobots;
        linkCanonical.href = originalCanonical;
        metaDesc.content = originalDesc;
      };
    }
  }, []);

  return (
    <div className={`relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden transition-colors duration-700 ${theme === 'light' ? 'bg-[#E7E2D]' : 'bg-dark'}`}>
      {/* Background Shader */}
      <div className="absolute inset-0 z-0 opacity-40">
        <ShaderCanvas theme={theme} />
      </div>

      {/* Glass Panel Content Container */}
      <div className={`relative z-10 w-full max-w-2xl px-8 py-16 md:px-12 md:py-24 backdrop-blur-xl border transition-all duration-700 ${
        theme === 'light' 
          ? 'bg-dark/5 border-dark/10 shadow-2xl shadow-dark/5' 
          : 'bg-white/5 border-white/10 shadow-2xl shadow-black/20'
      }`}>
        <div className="text-center">
          <div className={`mb-12 inline-flex items-center gap-3 px-4 py-2 border rounded-full transition-colors duration-700 ${
            theme === 'light' ? 'border-dark/20 bg-dark/5' : 'border-accent/20 bg-accent/5'
          }`}>
            <span className={`w-2 h-2 rounded-full animate-pulse ${theme === 'light' ? 'bg-dark' : 'bg-accent'}`} />
            <span className={`font-mono text-[10px] uppercase tracking-[0.2em] ${theme === 'light' ? 'text-dark' : 'text-accent'}`}>
              Termin Bestätigt
            </span>
          </div>

          <h1 className={`font-drama italic text-[clamp(3.5rem,10vw,8rem)] leading-[0.9] mb-8 transition-colors duration-700 ${
            theme === 'light' ? 'text-dark' : 'text-primary'
          }`}>
            Vielen Dank.
          </h1>
          
          <div className={`font-sans text-lg md:text-xl leading-[1.8] mb-12 max-w-lg mx-auto space-y-6 transition-colors duration-700 ${
            theme === 'light' ? 'text-dark/80' : 'text-muted'
          }`}>
            <p>
              Wir rufen dich zum vereinbarten Zeitpunkt an. Bitte halte dein Telefon bereit und stelle sicher, dass du in einer ruhigen Umgebung bist.
            </p>
            <p>
              Bis dann, wir freuen uns auf das Gespräch!
            </p>
          </div>

          <Link
            to={theme === 'light' ? '/?v=L' : '/'}
            className={`inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest transition-all duration-500 border px-10 py-5 rounded-none group ${
              theme === 'light'
                ? 'text-dark border-dark/20 hover:border-dark hover:bg-dark/5'
                : 'text-primary border-primary/20 hover:border-accent hover:bg-accent/10 hover:text-accent'
            }`}
          >
            <span className="transition-transform duration-500 group-hover:-translate-x-1">←</span>
            Zurück zur Hauptseite
          </Link>
        </div>
      </div>

      {/* Minimal Brand Mark */}
      <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.4em] transition-colors duration-700 ${
        theme === 'light' ? 'text-dark/20' : 'text-muted/30'
      }`}>
        Axiom Operations
      </div>
    </div>
  );
};

export default Success;
