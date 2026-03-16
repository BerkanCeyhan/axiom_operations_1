import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const FailedSolutions = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        }
      });

      tl.from('.failed-card', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
      })
        .to('.strike-line', {
          strokeDashoffset: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.inOut',
        }, '-=0.4');

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-padding bg-dark relative" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="font-sans font-light text-primary text-[clamp(2rem,4vw,3rem)] leading-tight tracking-[-0.04em]">
            Warum die offensichtlichen Lösungen nicht funktionieren...
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          <div className="failed-card relative overflow-hidden bg-surface border border-border/60 rounded-lg p-8 md:p-10 opacity-70">
            <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-accent/40 stroke-[2] z-10 hidden sm:block">
              <line className="strike-line text-accent" x1="0" y1="0" x2="100%" y2="100%" strokeDasharray="150%" strokeDashoffset="150%" />
            </svg>
            <h3 className="font-sans text-primary/80 text-xl md:text-2xl mb-4 font-normal tracking-[-0.02em] relative z-20">Mehr Mitarbeiter einstellen</h3>
            <p className="font-sans text-muted/80 leading-[1.7] relative z-20">
              Jeder neue Kopf bringt nicht nur Arbeitskraft, sondern auch Kommunikations-Overhead und Einarbeitungszeit. Die Fixkosten steigen, die Marge schmilzt. Am Ende tauscht du ein Fulfillment-Problem gegen ein Management-Problem.
            </p>
          </div>

          <div className="failed-card relative overflow-hidden bg-surface border border-border/60 rounded-lg p-8 md:p-10 opacity-70">
            <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-accent/40 stroke-[2] z-10 hidden sm:block">
              <line className="strike-line" x1="0" y1="0" x2="100%" y2="100%" strokeDasharray="150%" strokeDashoffset="150%" />
            </svg>
            <h3 className="font-sans text-primary/80 text-xl md:text-2xl mb-4 font-normal tracking-[-0.02em] relative z-20">Noch ein Tool oder eine Automatisierung</h3>
            <p className="font-sans text-muted/80 leading-[1.7] relative z-20">
              Tools und Automationen sind nur so gut wie die Strategie dahinter. Ein Zap hier, ein Make-Szenario da, aber ohne durchdachten Gesamtprozess entsteht einfach nur ein neues Flickwerk, das beim nächsten Sonderfall auseinanderfällt.
            </p>
          </div>

          <div className="failed-card relative overflow-hidden bg-surface border border-border/60 rounded-lg p-8 md:p-10 opacity-70">
            <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-accent/40 stroke-[2] z-10 hidden sm:block">
              <line className="strike-line" x1="0" y1="0" x2="100%" y2="100%" strokeDasharray="150%" strokeDashoffset="150%" />
            </svg>
            <h3 className="font-sans text-primary/80 text-xl md:text-2xl mb-4 font-normal tracking-[-0.02em] relative z-20">Freelancer zur Entlastung</h3>
            <p className="font-sans text-muted/80 leading-[1.7] relative z-20">
              Kurzfristig hilft es. Aber wenn der Freelancer das Projekt verlässt, geht das Wissen mit. Du stehst wieder am Anfang und das System bleibt genauso fragil wie vorher.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans font-light text-primary/90 text-lg md:text-xl leading-[1.6]">
            Wenn mehr Mitarbeiter, Tools oder Freelancer die Antwort wären, hätten sie bei dir schon längst funktioniert. Du hast diese Wege ausprobiert. Das operative Chaos ist geblieben.
            <span className="block mt-4 text-accent">Es liegt nicht an den einzelnen Tools. Es liegt daran, wie sie zusammenspielen.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FailedSolutions;
