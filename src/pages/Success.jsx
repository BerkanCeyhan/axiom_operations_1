import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ShaderCanvas from '../components/ShaderCanvas';

const Success = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
    <div className="relative min-h-screen bg-dark flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background Shader */}
      <div className="absolute inset-0 z-0 opacity-40">
        <ShaderCanvas theme="dark" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl">
        <div className="mb-12 inline-flex items-center gap-3 px-4 py-2 border border-accent/20 bg-accent/5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
            Termin Bestätigt
          </span>
        </div>

        <h1 className="font-drama italic text-primary text-[clamp(3.5rem,10vw,8rem)] leading-[0.9] mb-8">
          Vielen Dank.
        </h1>
        
        <p className="font-sans text-muted text-lg md:text-xl leading-[1.8] mb-12 max-w-md mx-auto">
          Deine Buchung war erfolgreich. Du erhältst in Kürze eine Bestätigungsmail mit allen Details und dem Meeting-Link. Wir freuen uns auf das Gespräch!
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-primary hover:text-accent transition-all duration-500 border border-primary/20 hover:border-accent bg-primary/5 hover:bg-accent/10 px-10 py-5 rounded-none group"
        >
          <span className="transition-transform duration-500 group-hover:-translate-x-1">←</span>
          Zurück zur Hauptseite
        </Link>
      </div>

      {/* Minimal Brand Mark */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.4em] text-muted/30">
        Axiom Operations
      </div>
    </div>
  );
};

export default Success;
