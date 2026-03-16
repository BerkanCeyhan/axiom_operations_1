import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Section = ({ number, title, children }) => (
  <section className="space-y-5">
    <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
      {number} — {title}
    </h2>
    <div className="font-sans text-primary/80 text-base leading-[1.9] space-y-4">
      {children}
    </div>
  </section>
);

const Datenschutz = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Dynamic SEO
    document.title = 'Datenschutzerklärung | Axiom Operations';
    
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
    linkCanonical.href = 'https://axiom-operations.de/datenschutz';

    // Add description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      const originalDesc = metaDesc.content;
      metaDesc.content = 'Datenschutzerklärung von Axiom Operations gemäß DSGVO. Minimale Datenerhebung, kein Tracking, keine Analyse-Tools.';
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
            // Datenschutz &amp; Privatsphäre
          </p>
          <h1 className="font-drama italic text-primary text-[clamp(3rem,8vw,6rem)] leading-[0.9] mb-8">
            Datenschutz.
          </h1>
          <p className="font-sans text-muted text-sm leading-[1.8] max-w-prose">
            Wir nehmen den Schutz deiner persönlichen Daten ernst. Diese Seite informiert dich
            darüber, welche Daten wir erheben, wie wir sie nutzen und welche Rechte du hast.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-14">

          <Section number="01" title="Verantwortlicher">
            <p>
              Verantwortlicher im Sinne der DSGVO:
            </p>
            <div className="border-l-2 border-accent/40 pl-5 space-y-1 text-sm">
              <p>Berkn Ceyhan</p>
              <p>Kasterstraße 26, 41517 Grevenbroich</p>
              <p>
                E-Mail:{' '}
                <a href="mailto:berkan@berkanceyhan.de" className="text-accent hover:text-primary transition-colors">
                  berkan@berkanceyhan.de
                </a>
              </p>
            </div>
          </Section>

          <div className="h-px bg-border" />

          <Section number="02" title="Grundsatz: Minimale Datenerhebung">
            <p>
              Wir verfolgen das Prinzip der Datensparsamkeit. Diese Website erhebt keine
              Nutzungsprofile, setzt keine eigenen Tracking-Cookies und verwendet keine
              Analyse-Tools wie Google Analytics, Hotjar oder ähnliche Dienste.
            </p>
            <p>
              Die nachfolgend beschriebenen Drittanbieter-Dienste sind technisch notwendig
              oder werden nur auf explizite Nutzerinteraktion hin aktiv.
            </p>
          </Section>

          <div className="h-px bg-border" />

          <Section number="03" title="Hosting & Server-Logs">
            <p>
              Diese Website wird über{' '}
              <strong className="text-primary font-medium">GitHub Pages</strong> gehostet
              (GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA). Beim Aufruf
              der Seite verarbeitet GitHub automatisch folgende Daten:
            </p>
            <ul className="list-none space-y-2 font-mono text-sm text-muted">
              {['IP-Adresse (anonymisiert)', 'Datum und Uhrzeit des Abrufs', 'Browsertyp und -version', 'Referrer-URL', 'Aufgerufene Seite'].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-accent mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Diese Daten werden ausschließlich zur Sicherstellung des technischen Betriebs
              verarbeitet und nicht mit anderen Datenquellen zusammengeführt.
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
            </p>
            <p>
              Weitere Informationen zur Datenverarbeitung durch GitHub findest du unter:{' '}
              <a
                href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-primary transition-colors underline underline-offset-4 decoration-accent/30"
              >
                GitHub Privacy Statement
              </a>
            </p>
          </Section>

          <div className="h-px bg-border" />

          <Section number="04" title="Lokale Schriftarten (Google Fonts)">
            <p>
              Diese Website verwendet zur einheitlichen Darstellung von Schriftarten lokale Kopien von{' '}
              <strong className="text-primary font-medium">Google Fonts</strong>.
            </p>
            <p>
              Im Gegensatz zur Standardeinbindung werden diese Schriftarten nicht von den Servern von Google
              abgerufen, sondern direkt von unserem Webserver geladen. Dadurch findet beim Seitenaufruf{' '}
              <strong className="text-accent underline decoration-1 underline-offset-4">keine</strong> Übermittlung
              deiner IP-Adresse oder anderer Daten an Google statt.
            </p>
            <p>
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
              einheitlichem Erscheinungsbild und datenschutzfreundlicher technischer Umsetzung).
            </p>
          </Section>

          <div className="h-px bg-border" />

          <Section number="05" title="Calendly (Terminbuchung)">
            <p>
              Für die Buchung von Beratungsgesprächen setzen wir{' '}
              <strong className="text-primary font-medium">Calendly</strong> ein, einen Dienst
              der Calendly LLC, 271 17th St NW, Suite 1000, Atlanta, GA 30363, USA.
            </p>
            <p>
              Calendly wird nur auf explizite Interaktion hin geladen — d.h. wenn du auf einen
              Buchungs-Button klickst. Erst in diesem Moment wird eine Verbindung zu den
              Calendly-Servern hergestellt und dabei deine IP-Adresse sowie weitere
              Verbindungsdaten übertragen.
            </p>
            <p>
              Im Rahmen der Terminbuchung werden folgende Daten erhoben und an uns übermittelt:
            </p>
            <ul className="list-none space-y-2 font-mono text-sm text-muted">
              {['Name', 'E-Mail-Adresse', 'Gewünschter Termin', 'Optionale Anmerkungen (sofern von dir angegeben)'].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-accent mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Diese Daten werden ausschließlich zur Durchführung und Organisation des
              Beratungsgesprächs verwendet und nicht an Dritte weitergegeben.
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung).
            </p>
            <p>
              Weitere Informationen: {' '}
              <a
                href="https://calendly.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-primary transition-colors underline underline-offset-4 decoration-accent/30"
              >
                Calendly Privacy Policy
              </a>
            </p>
          </Section>

          <div className="h-px bg-border" />

          <Section number="06" title="Kontaktaufnahme">
            <p>
              Wenn du uns per E-Mail kontaktierst, werden die von dir übermittelten Daten
              (Name, E-Mail-Adresse, Nachrichteninhalt) ausschließlich zur Bearbeitung deiner
              Anfrage gespeichert und verwendet. Diese Daten geben wir nicht ohne deine
              Einwilligung weiter.
            </p>
            <p>
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
              Beantwortung der Anfrage).
            </p>
          </Section>

          <div className="h-px bg-border" />

          <Section number="07" title="Deine Rechte">
            <p>
              Nach der DSGVO stehen dir folgende Rechte zu:
            </p>
            <ul className="list-none space-y-3">
              {[
                ['Auskunft', 'Recht auf Auskunft über die zu deiner Person gespeicherten Daten (Art. 15 DSGVO)'],
                ['Berichtigung', 'Recht auf Berichtigung unrichtiger oder unvollständiger Daten (Art. 16 DSGVO)'],
                ['Löschung', 'Recht auf Löschung deiner Daten, soweit keine gesetzliche Aufbewahrungspflicht besteht (Art. 17 DSGVO)'],
                ['Einschränkung', 'Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)'],
                ['Widerspruch', 'Widerspruchsrecht gegen die Verarbeitung deiner Daten (Art. 21 DSGVO)'],
                ['Datenübertragbarkeit', 'Recht auf Erhalt deiner Daten in einem strukturierten, maschinenlesbaren Format (Art. 20 DSGVO)'],
              ].map(([title, desc]) => (
                <li key={title} className="flex items-start gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent mt-1.5 shrink-0 w-28">
                    {title}
                  </span>
                  <span className="text-sm text-muted/80 leading-[1.8]">{desc}</span>
                </li>
              ))}
            </ul>
            <p>
              Zur Ausübung deiner Rechte wende dich an:{' '}
              <a href="mailto:berkan@berkanceyhan.de" className="text-accent hover:text-primary transition-colors">
                berkan@berkanceyhan.de
              </a>
            </p>
            <p>
              Du hast zudem das Recht, dich bei einer Aufsichtsbehörde zu beschweren.
              Die zuständige Behörde für Nordrhein-Westfalen ist die{' '}
              <a
                href="https://www.ldi.nrw.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-primary transition-colors underline underline-offset-4 decoration-accent/30"
              >
                Landesbeauftragte für Datenschutz und Informationsfreiheit NRW
              </a>
              .
            </p>
          </Section>

          <div className="h-px bg-border" />

          <Section number="08" title="Aktualität dieser Erklärung">
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und datiert vom{' '}
              <strong className="text-primary font-medium">März 2026</strong>.
              Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher
              bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung
              zu ändern.
            </p>
          </Section>

        </div>

        {/* Footer strip */}
        <div className="mt-24 pt-10 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-muted">
              System Operational
            </span>
          </div>
          <div className="flex gap-6 font-sans text-muted/60 text-xs">
            <Link to="/impressum" className="hover:text-primary transition-colors">Impressum</Link>
            <span className="text-muted/20">|</span>
            <Link to="/" className="hover:text-primary transition-colors">Hauptseite</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Datenschutz;
