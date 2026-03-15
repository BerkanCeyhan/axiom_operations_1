import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { AlertTriangle, Clock, ActivitySquare } from 'lucide-react';

const ProblemSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.problem-card', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="problem" ref={containerRef} className="section-padding bg-dark relative">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="font-mono text-accent uppercase text-xs tracking-[0.2em] block mb-4">
            Kommt dir das bekannt vor?
          </span>
          <h2 className="font-sans font-light text-primary text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-[-0.04em] mb-6">
            Jeder neue Kunde fühlt sich an wie eine Gefahr für das System.
          </h2>
          <p className="font-sans text-muted text-lg md:text-xl leading-[1.7] max-w-2xl">
            Du steckst in der Wachstumsfalle. Das Pricing stimmt, der Sales-Prozess läuft, aber das Fulfillment bricht unter der Last zusammen. Statt unternehmerischer Freiheit bedeutet Skalierung für dich aktuell nur mehr Brände löschen, mehr Slack-Nachrichten am späten Abend und das ständige Gefühl, der größte Flaschenhals im eigenen Unternehmen zu sein.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="problem-card bg-surface border border-border rounded-lg p-8 md:p-10 transition-colors hover:border-muted/50">
            <AlertTriangle className="text-accent w-8 h-8 mb-6 stroke-[1.5]" />
            <h3 className="font-sans text-primary text-xl mb-4 font-normal tracking-[-0.02em]">Das operative Chaos</h3>
            <p className="font-sans text-muted leading-[1.7]">
              Wichtige Kunden-Onboardings und Task-Zuweisungen passieren manuell. Ein falscher Klick, eine vergessene E-Mail, und Deadlines platzen. Dein Team verbringt den halben Tag damit, Informationen in Drive-Ordnern zu suchen, anstatt produktiv zu arbeiten.
            </p>
          </div>

          <div className="problem-card bg-surface border border-border rounded-lg p-8 md:p-10 transition-colors hover:border-muted/50">
            <ActivitySquare className="text-accent w-8 h-8 mb-6 stroke-[1.5]" />
            <h3 className="font-sans text-primary text-xl mb-4 font-normal tracking-[-0.02em]">Explodierende Personalkosten</h3>
            <p className="font-sans text-muted leading-[1.7]">
              Jeder neue Mrr-Meilenstein wird sofort durch neue Gehälter für simple Fleißarbeit aufgefressen. Du stellst Leute ein, die eigentlich nur Copy-Paste-Aufgaben zwischen Tools erledigen, anstatt echte Hebelwirkung zu erzeugen. Die Marge sinkt, obwohl der Umsatz steigt.
            </p>
          </div>

          <div className="problem-card bg-surface border border-border rounded-lg p-8 md:p-10 transition-colors hover:border-muted/50">
            <Clock className="text-accent w-8 h-8 mb-6 stroke-[1.5]" />
            <h3 className="font-sans text-primary text-xl mb-4 font-normal tracking-[-0.02em]">Der Inhaber als Flaschenhals</h3>
            <p className="font-sans text-muted leading-[1.7]">
              Ohne dein "Go" bewegt sich im Fulfillment nichts. Fragen zum Projekt-Status, fehlende Dokumente, kleine Freigaben – alles landet auf deinem Tisch. Urlaub nehmen? Nur mit Laptop am Strand und ständiger Erreichbarkeit, weil das System ohne dich kollabiert.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
