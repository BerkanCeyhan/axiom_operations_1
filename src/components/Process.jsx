import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Process = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Check if desktop (>= 768px for md breakpoint)
      const isDesktop = window.matchMedia("(min-width: 768px)").matches;
      
      if (isDesktop) {
        const cards = gsap.utils.toArray('.process-card');
        
        // Pin the whole container
        ScrollTrigger.create({
          trigger: '.process-wrapper',
          start: 'top top',
          end: `+=${cards.length * 100}%`,
          pin: true,
          pinSpacing: true,
        });

        cards.forEach((card, i) => {
          if (i === cards.length - 1) return; // Skip last card

          gsap.to(card, {
            scale: 0.9,
            opacity: 0.3,
            filter: 'blur(10px)',
            ease: "none",
            scrollTrigger: {
              trigger: '.process-wrapper',
              start: () => `top -${i * 100}%`,
              end: () => `top -${(i + 1) * 100}%`,
              scrub: true,
            }
          });
        });
      } else {
        // Mobile simple fade up
        gsap.from('.process-card', {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.process-wrapper',
            start: 'top 80%'
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      num: "01",
      title: "Die Architektur-Analyse",
      desc: "Wir zerlegen euer aktuelles Setup in seine Einzelteile. Wo übergeben Menschen manuell Daten? Wo brechen Asanas oder Zapiers bei Lastspitzen zusammen? Wir identifizieren exakt den Engpass, der euch vom Skalieren abhält.",
      bgElem: (
        <svg className="absolute inset-0 w-full h-full opacity-[0.03] animate-[spin_60s_linear_infinite]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#E8E4DC" strokeWidth="0.5" strokeDasharray="2 4" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="#E8E4DC" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="#E8E4DC" strokeWidth="1" strokeDasharray="1 6" />
        </svg>
      )
    },
    {
      num: "02",
      title: "Maßgeschneiderte Implementierung",
      desc: "Keine Wochenlangen Workshops. Wir bauen die Resilient Ops Architektur parallel zu eurem Tagesgeschäft auf. Native API-Anbindungen, eigene kleine LLMs für eure SOPs und striktes Error-Handling. Ein echtes digitales Nervensystem.",
      bgElem: (
        <div className="absolute inset-0 opacity-[0.03] flex flex-col justify-center">
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
      title: "Die Live-Schaltung & Autonomie",
      desc: "Der Tag, an dem ihr den Schalter umlegt. Euer Inhaber-Flaschenhals wird aufgelöst. Die Systeme laufen. Das Team atmet auf. Und ihr habt plötzlich die Marge und die Kapazität, um doppelt so viele Kunden anzunehmen – ohne Stress.",
      bgElem: (
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,20 50,50 T100,50" fill="none" stroke="#E8E4DC" strokeWidth="0.5" className="animate-[dash_5s_linear_infinite]" strokeDasharray="4 8" />
        </svg>
      )
    }
  ];

  return (
    <section id="process" ref={containerRef} className="bg-dark relative">
      <div className="process-wrapper md:h-[100vh] relative max-w-7xl mx-auto md:w-full">
        <div className="md:absolute md:inset-x-0 md:top-1/2 md:-translate-y-1/2 flex flex-col gap-8 md:block p-5 md:p-12 lg:p-20">
          
          <div className="mb-12 md:hidden">
            <h2 className="font-sans font-light text-primary text-3xl">Der Implementierungs-Pfad</h2>
          </div>

          {steps.map((step, i) => (
            <div 
              key={i} 
              className="process-card md:absolute md:inset-0 md:h-[60vh] md:mt-[20vh] w-full bg-surface border border-border backdrop-blur-md rounded-lg overflow-hidden flex flex-col md:flex-row shadow-2xl z-10"
              style={{ zIndex: steps.length - i }}
            >
              {step.bgElem}
              <div className="relative z-10 p-10 md:p-16 flex flex-col justify-center w-full h-full">
                <div className="font-mono text-[8rem] md:text-[12rem] text-muted/5 font-medium leading-none absolute right-4 top-4 md:right-12 md:top-1/2 md:-translate-y-1/2 select-none pointer-events-none">
                  {step.num}
                </div>
                <div className="max-w-2xl relative">
                  <span className="font-mono text-xs tracking-widest text-accent uppercase mb-4 block">Phase {step.num}</span>
                  <h3 className="font-sans font-light text-primary text-[clamp(2rem,4vw,3.5rem)] mb-6 tracking-[-0.04em]">
                    {step.title}
                  </h3>
                  <p className="font-sans text-muted text-lg md:text-xl leading-[1.7]">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
