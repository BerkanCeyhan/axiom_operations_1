import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const FinalCTA = ({ theme }) => {
  const containerRef = useRef(null);
  const isLight = theme === 'light';

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      });

      tl.from('.cta-text', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
      })
        .from('.cta-btn-wrap', {
          scale: 0.95,
          opacity: 0,
          duration: 0.5,
          ease: 'back.out(1.5)',
        }, '-=0.4');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="audit" ref={containerRef} className="py-24 md:py-40 px-5 relative overflow-hidden bg-dark border-t border-border">
      {/* Background Ambience */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="cta-text flex flex-col items-center justify-center mb-10">
          <span className="font-sans font-light text-primary text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1] tracking-[-0.04em] mb-2">
            Die Wachstumsfalle durchbrechen.
          </span>
          <span className="font-drama italic text-muted text-2xl md:text-3xl leading-[1.1]">
            Das Ende des operativen Chaos.
          </span>
        </h2>

        <div className="cta-btn-wrap relative inline-block">
          <Link 
            to="/audit" 
            className="group relative z-10 w-full sm:w-auto px-10 py-5 font-mono text-sm uppercase tracking-widest transition-all duration-300 inline-flex items-center"
            style={{ 
              backgroundColor: isLight ? '#141312' : '#E7E2D8',
              color: isLight ? '#E8E4DC' : '#0F0F0E'
            }}
          >
            <span className="relative z-10">Kostenlose Prozess-Analyse anfragen</span>
          </Link>
          {/* Subtle pulse ring */}
          <div className="absolute inset-0 border border-primary/20 opacity-0 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] z-0 pointer-events-none" />
        </div>

        <div className="cta-text font-mono text-xs text-muted/60 tracking-wider uppercase mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <span>Kostenlos & unverbindlich</span>
          <span className="hidden sm:inline">·</span>
          <span>30 Minuten</span>
          <span className="hidden sm:inline">·</span>
          <span>Keine Verpflichtung</span>
        </div>

        <div className="cta-text font-mono text-[10px] text-accent tracking-widest uppercase mt-6">
          <span className="inline-block w-1.5 h-1.5 bg-accent animate-pulse mr-2" />
          Aktuell 3 freie Plätze für nächsten Monat
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
