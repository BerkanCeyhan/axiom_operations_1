import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Impressum = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Impressum | Axiom Operations';
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
            Impressum.
          </h1>
          <p className="font-sans text-muted text-sm leading-[1.8] max-w-prose">
            Angaben gemäß § 5 TMG
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-14">

          {/* Anbieter */}
          <section>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-5">
              01 — Anbieter
            </h2>
            <div className="font-sans text-primary/90 text-base leading-[1.9] space-y-1">
              <p>Berkn Ceyhan</p>
              <p>Kasterstraße 26</p>
              <p>41517 Grevenbroich</p>
            </div>
          </section>

          <div className="w-full h-px bg-border" />

          {/* Kontakt */}
          <section>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-5">
              02 — Kontakt
            </h2>
            <div className="font-sans text-primary/90 text-base leading-[1.9] space-y-2">
              <p>
                <span className="text-muted text-sm">Telefon: </span>
                <a
                  href="tel:+4917621411434"
                  className="hover:text-accent transition-colors duration-200"
                >
                  +49 176 21411434
                </a>
              </p>
              <p>
                <span className="text-muted text-sm">E-Mail: </span>
                <a
                  href="mailto:berkan@berkanceyhan.de"
                  className="hover:text-accent transition-colors duration-200"
                >
                  berkan@berkanceyhan.de
                </a>
              </p>
            </div>
          </section>

          <div className="w-full h-px bg-border" />

          {/* EU-Streitschlichtung */}
          <section>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-5">
              03 — EU-Streitschlichtung
            </h2>
            <div className="font-sans text-primary/80 text-base leading-[1.9] space-y-4">
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-primary transition-colors duration-200 underline underline-offset-4 decoration-accent/30"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p>
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </div>
          </section>

          <div className="w-full h-px bg-border" />

          {/* Verbraucherstreitbeilegung */}
          <section>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-5">
              04 — Verbraucherstreitbeilegung
            </h2>
            <p className="font-sans text-primary/80 text-base leading-[1.9]">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
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

export default Impressum;
