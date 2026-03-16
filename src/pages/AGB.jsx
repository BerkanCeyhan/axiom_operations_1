import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AGB = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Dynamic SEO
    document.title = 'AGB | Axiom Operations';
    
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
    linkCanonical.href = 'https://axiom-operations.de/agb';

    // Add description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      const originalDesc = metaDesc.content;
      metaDesc.content = 'Allgemeine Geschäftsbedingungen von Axiom Operations.';
      return () => {
        document.title = 'Axiom Operations – Fulfillment OS™ für Agenturen & Dienstleister';
        metaRobots.content = originalRobots;
        linkCanonical.href = originalCanonical;
        metaDesc.content = originalDesc;
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-dark text-primary font-sans">
      {/* Top Nav Strip */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 max-w-4xl w-[calc(100%-3rem)] md:w-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted hover:text-primary transition-colors duration-300 border border-border bg-dark/80 backdrop-blur-md px-6 py-3 rounded-none"
        >
          <span className="text-accent">←</span>
          Zurück zur Hauptseite
        </Link>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 md:px-12 pt-40 pb-32">
        {/* Page Header */}
        <div className="mb-16 border-b border-border pb-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-6">
            // Rechtliche Angaben
          </p>
          <h1 className="font-drama italic text-primary text-[clamp(3rem,8vw,6rem)] leading-[0.9] mb-8">
            AGB.
          </h1>
          <p className="font-sans text-muted text-sm leading-[1.8] max-w-prose">
            Allgemeine Geschäftsbedingungen von Axiom Operations.
          </p>
        </div>

        {/* Content Section Placeholder */}
        <div className="space-y-14">
          <section>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-5">
              01 — Geltungsbereich
            </h2>
            <p className="font-sans text-primary/80 text-base leading-[1.9]">
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Dienstleistungen von Axiom Operations.
            </p>
          </section>
        </div>

        {/* Footer strip */}
        <div className="mt-24 pt-10 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-muted">
              System Operational
            </span>
          </div>
          <span className="font-mono text-[9px] uppercase tracking-widest text-muted/40">
            Axiom Operations
          </span>
        </div>
      </main>
    </div>
  );
};

export default AGB;
