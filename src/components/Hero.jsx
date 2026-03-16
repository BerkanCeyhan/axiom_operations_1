import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ShaderCanvas from './ShaderCanvas';

const Hero = ({ theme }) => {
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
      className="relative min-h-[100dvh] w-full flex flex-col justify-center md:justify-center pt-32 pb-10 md:pb-32 px-5 md:px-12 lg:px-20 overflow-hidden bg-dark"
    >
      {/* WebGL Shader Background */}
      <ShaderCanvas theme={theme} />

      {/* Heavy gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-dark/95 via-dark/40 to-transparent pointer-events-none" />

      {/* Content wrapper shifted slightly to the right for 'left-center' alignment */}
      <div className="relative z-10 w-full max-w-5xl md:ml-[8vw]">
        {/* Glass Content Panel */}
        <div className="relative p-4 md:p-12 lg:p-16 rounded-md backdrop-blur-md bg-white/[0.20] border border-white/5 max-w-4xl hero-element">
          <div className="max-w-3xl">
            {/* Headline Block */}
            <div className="mb-8">
              <h1 className="flex flex-col">
                <span className="font-sans font-light uppercase tracking-[0.2em] text-xs sm:text-sm md:text-base mb-2 md:mb-4">
                  Die Resilient Ops Architektur™
                </span>
                <span className="font-drama italic text-primary leading-[0.9] text-[clamp(2.5rem,8vw,9rem)]">
                  Ausfallsicher.
                </span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="font-sans font-normal text-primary/80 text-base md:text-lg lg:text-xl max-w-prose leading-[1.7] mb-10">
              Wir bauen das ausfallsichere digitale Nervensystem für Agenturen mit 30k–150k MRR. Skalierung bedeutet nicht länger operatives Chaos, explodierende Personalkosten für Fleißarbeit oder das Gefühl, der ewige Flaschenhals im eigenen Fulfillment zu sein.
            </p>

            {/* Social Proof Micro-strip */}
            <div className="font-mono text-xs mb-8 tracking-widest uppercase">
              // Verlässliche Infrastruktur für B2B-Dienstleister
            </div>

            {/* CTA */}
            <div className="inline-block">
              <Link to="/audit" className="btn-hero inline-flex items-center text-white text-xs  md:text-lg">
                <span>Kostenloses Architektur-Audit anfragen</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
