import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ShaderCanvas from './ShaderCanvas';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered fade up for hero elements
      gsap.from('.hero-element', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        delay: 0.3,
        ease: 'power2.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[100dvh] w-full flex items-end pb-20 md:pb-32 px-5 md:px-12 lg:px-20 overflow-hidden bg-dark"
    >
      {/* WebGL Shader Background */}
      <ShaderCanvas />
      
      {/* Heavy gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-dark/95 via-dark/40 to-transparent pointer-events-none" />
      
      {/* Content wrapper anchored to bottom-left */}
      <div className="relative z-10 w-full max-w-5xl">
        <div className="max-w-3xl">
          {/* Headline Block */}
          <div className="mb-6 mb-8">
            <h1 className="flex flex-col">
              <span className="hero-element font-sans font-light text-muted uppercase tracking-[0.2em] text-xs sm:text-sm md:text-base mb-2 md:mb-4">
                Die Resilient Ops Architektur™
              </span>
              <span className="hero-element font-drama italic text-primary leading-[0.9] text-[clamp(3.5rem,10vw,11rem)] -ml-1">
                Ausfallsicher.
              </span>
            </h1>
          </div>
          
          {/* Subheadline */}
          <p className="hero-element font-sans font-normal text-primary/80 text-base md:text-lg lg:text-xl max-w-prose leading-[1.7] mb-8">
            Wir bauen das ausfallsichere digitale Nervensystem für Agenturen mit 30k–150k MRR. Skalierung bedeutet nicht länger operatives Chaos, explodierende Personalkosten für Fleißarbeit oder das Gefühl, der ewige Flaschenhals im eigenen Fulfillment zu sein.
          </p>
          
          {/* Social Proof Micro-strip */}
          <div className="hero-element font-mono text-xs text-muted mb-8 tracking-widest uppercase">
            // Verlässliche Infrastruktur für B2B-Dienstleister
          </div>
          
          {/* CTA */}
          <div className="hero-element inline-block">
            <a href="#audit" className="btn-primary inline-flex items-center">
              <span>Kostenloses Architektur-Audit anfragen</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
