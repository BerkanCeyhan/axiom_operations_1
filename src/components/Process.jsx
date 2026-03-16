import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Process = () => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.process-card');
      const isDesktop = window.matchMedia("(min-width: 768px)").matches;

      if (isDesktop && cards.length > 0) {
        // Pinning strategy: Pin the cards-container while the main wrapper scrolls
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: `+=${cards.length * 100}%`,
            pin: true,
            scrub: true,
            // pinSpacing: true is default
          }
        });

        cards.forEach((card, i) => {
          if (i === 0) {
            // First card starts visible, no entrance animation needed in the timeline
            // But we might want to fade it out as next one comes
          }

          if (i > 0) {
            // Animate card entrance
            tl.fromTo(card,
              { yPercent: 100, opacity: 0 },
              { yPercent: 0, opacity: 1, duration: 1, ease: 'none' },
              i - 0.5 // Start overlap
            );
          }

          // Subtle parallax/scale-back for previous cards
          if (i < cards.length - 1) {
            tl.to(card, {
              scale: 0.9,
              opacity: 0.4,
              filter: 'blur(8px)',
              yPercent: -10,
              duration: 1,
              ease: 'none'
            }, i + 0.5);
          }
        });
      } else {
        // Mobile simple scroll-triggered fade-ups
        cards.forEach((card) => {
          gsap.from(card, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          });
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      num: "01",
      title: "Analyse. Wo verliert ihr Zeit und Geld?",
      desc: "Wir zerlegen euer aktuelles Setup in seine Einzelteile. Wo werden Daten manuell übergeben? Wo brechen Prozesse bei steigender Kundenzahl zusammen? Wir finden die Engpässe, die euch vom Skalieren abhalten.",
      bgElem: (
        <svg className="absolute inset-0 w-full h-full opacity-[0.08] animate-[spin_60s_linear_infinite]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="1 6" />
        </svg>
      )
    },
    {
      num: "02",
      title: "Implementierung. Parallel zum Tagesgeschäft.",
      desc: "Keine wochenlangen Workshops. Wir bauen eure KI-Agenten und Automationen auf, während euer Tagesgeschäft normal weiterläuft. Eure Tools werden sauber verbunden, Prozesse automatisiert, das Team Schritt für Schritt eingebunden.",
      bgElem: (
        <div className="absolute inset-0 opacity-[0.08] flex flex-col justify-center">
          <div className="h-px w-full bg-primary relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-accent animate-[translate_3s_linear_infinite_alternate]" />
          </div>
          <div className="h-px w-full bg-primary mt-8 relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-accent animate-[translate_4s_linear_infinite_alternate_reverse]" />
          </div>
        </div>
      )
    },
    {
      num: "03",
      title: "Live-Schaltung. Das System übernimmt.",
      desc: "Der Tag, an dem ihr den Schalter umlegt. Die Systeme laufen. Das Team atmet auf. Und ihr habt die Marge und die Kapazität, deutlich mehr Kunden anzunehmen, ohne zusätzliches Personal und ohne Stress.",
      bgElem: (
        <svg className="absolute inset-0 w-full h-full opacity-[0.1]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,20 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.5" className="animate-[dash_5s_linear_infinite]" strokeDasharray="4 8" />
        </svg>
      )
    }
  ];

  return (
    <section id="process" ref={containerRef} className="bg-dark relative overflow-hidden">
      {/* 
          Main scrolling space is defined by the container height (via GSAP end: +=X00%).
          The viewport content is pinned.
      */}
      <div className="relative min-h-screen flex flex-col items-center justify-center section-padding md:p-0">
        <div className="max-w-7xl mx-auto w-full relative h-auto md:h-[60vh]">

          <div className="mb-12 md:absolute md:-top-24 md:left-0 z-20">
            <h2 className="font-sans font-light text-primary text-3xl md:text-5xl tracking-tight">Der Implementierungs-Pfad</h2>
          </div>

          <div className="relative w-full h-auto md:h-full">
            {steps.map((step, i) => (
              <div
                key={i}
                className="process-card md:absolute inset-0 w-full h-auto md:h-full bg-surface border border-border backdrop-blur-md rounded-lg overflow-hidden flex flex-col md:flex-row shadow-2xl transition-shadow will-change-transform mb-8 md:mb-0"
                style={{
                  zIndex: i + 1,
                  // Mobile starts relative and stacked, Desktop starts absolute inside the pinned container
                }}
              >
                {step.bgElem}
                {/* Background Number watermark - repositioned to top-right as requested */}
                <div className="absolute right-4 top-4 md:right-12 md:top-1/2 md:-translate-y-1/2 font-mono text-[6rem] md:text-[12rem] text-muted/10 md:text-muted/5 font-medium leading-none select-none pointer-events-none z-0">
                  {step.num}
                </div>

                {/* Content - Increased top padding on mobile to push title below the number */}
                <div className="relative z-10 pt-32 pb-12 px-8 md:p-16 flex flex-col justify-center w-full h-full">
                  <div className="max-w-2xl">
                    <span className="font-mono text-xs tracking-widest text-accent uppercase mb-4 block">Phase {step.num}</span>
                    <h3 className="font-sans font-light text-primary text-[clamp(1.75rem,4vw,3.5rem)] mb-6 tracking-[-0.04em] leading-tight">
                      {step.title}
                    </h3>
                    <p className="font-sans text-muted text-base md:text-xl leading-[1.7]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
