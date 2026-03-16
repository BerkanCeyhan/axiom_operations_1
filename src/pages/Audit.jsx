import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Audit = () => {
  const calendlyLoaded = useRef(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Architektur-Audit anfragen | Axiom Operations';

    // Load Calendly widget script only once
    if (calendlyLoaded.current) return;
    calendlyLoaded.current = true;

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existing = document.querySelector('script[src*="calendly"]');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark text-primary font-sans">
      {/* Back Nav */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 max-w-4xl w-[calc(100%-3rem)] md:w-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted hover:text-primary transition-colors duration-300 border border-border bg-dark/80 backdrop-blur-md px-6 py-3 rounded-none"
        >
          <span className="text-accent">←</span>
          Zurück zur Hauptseite
        </Link>
      </header>

      {/* Hero Header */}
      <div className="pt-36 pb-12 px-6 md:px-12 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-6">
            // Kostenloses Erstgespräch
          </p>
          <h1 className="font-drama italic text-primary text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] mb-6">
            Architektur&#8209;Audit.
          </h1>
          <p className="font-sans text-muted text-base md:text-lg leading-[1.8] max-w-2xl">
            30 Minuten. Keine Verpflichtung. Wir analysieren gemeinsam, wo dein operativer
            Flaschenhals sitzt — und welche Hebel den größten Effekt hätten.
          </p>
        </div>
      </div>

      {/* Main Content: 2-col on desktop, stacked on mobile */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

        {/* Left Sidebar: What to expect */}
        <aside className="lg:col-span-4 space-y-10">

          <div>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-5">
              Was dich erwartet
            </h2>
            <ul className="space-y-5">
              {[
                {
                  step: '01',
                  title: 'Ist-Analyse',
                  desc: 'Wir schauen uns dein aktuelles Fulfillment, deine Prozesse und deine größten Zeitfresser an.',
                },
                {
                  step: '02',
                  title: 'Engpass-Diagnose',
                  desc: 'Gemeinsam identifizieren wir, wo operative Reibung entsteht und warum Skalierung bisher Stress bedeutet.',
                },
                {
                  step: '03',
                  title: 'Konkrete Hebel',
                  desc: 'Du bekommst 2–3 spezifische Ansätze, die wir direkt umsetzen könnten — unabhängig davon, ob wir zusammenarbeiten.',
                },
              ].map(({ step, title, desc }) => (
                <li key={step} className="flex gap-4">
                  <span className="font-mono text-[10px] text-accent/60 mt-1 w-6 shrink-0">{step}</span>
                  <div>
                    <p className="font-sans text-primary text-sm font-medium mb-1">{title}</p>
                    <p className="font-sans text-muted text-sm leading-[1.7]">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="h-px bg-border" />

          <div>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-5">
              Für wen
            </h2>
            <ul className="space-y-3">
              {[
                'Agenturen mit 30k–150k MRR',
                'Operative Flaschenhals-Probleme',
                'Bereit für systemische Lösungen',
                'Keine Lust mehr auf manuelle Fleißarbeit',
              ].map(item => (
                <li key={item} className="flex items-center gap-3 font-sans text-muted text-sm">
                  <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="h-px bg-border" />

          {/* Trust signals */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-muted">
              Kostenlos &amp; unverbindlich · 30 Minuten
            </span>
          </div>
        </aside>

        {/* Right: Calendly Widget */}
        <div className="lg:col-span-8">
          <div className="border border-border bg-white/[0.02] p-2 md:p-4">
            {/* Calendly Label */}
            <div className="flex items-center justify-between px-2 py-3 mb-2 border-b border-border">
              <span className="font-mono text-[9px] uppercase tracking-widest text-muted">
                Termin wählen
              </span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-[9px] uppercase tracking-widest text-accent">
                  Live
                </span>
              </div>
            </div>

            {/* Calendly Inline Widget */}
            <div
              className="calendly-inline-widget w-full rounded-none overflow-hidden"
              data-url="https://calendly.com/berkanceyhan/15min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0f0f0e&text_color=e8e4dc&primary_color=3b4f3a"
              style={{ minWidth: '280px', height: '700px' }}
            />
          </div>

          {/* Disclaimer */}
          <p className="font-mono text-[9px] text-muted/40 uppercase tracking-widest mt-4 px-2">
            Terminbuchung via Calendly · Deine Daten werden gemäß unserer{' '}
            <Link to="/datenschutz" className="text-muted/60 hover:text-muted transition-colors underline underline-offset-2">
              Datenschutzerklärung
            </Link>{' '}
            verarbeitet.
          </p>
        </div>
      </div>

      {/* Footer strip */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 pb-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-[9px] uppercase tracking-widest text-muted">
            System Operational
          </span>
        </div>
        <div className="flex gap-6 font-sans text-muted/60 text-xs">
          <Link to="/impressum" className="hover:text-primary transition-colors">Impressum</Link>
          <span className="text-muted/20">|</span>
          <Link to="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</Link>
        </div>
      </div>
    </div>
  );
};

export default Audit;
