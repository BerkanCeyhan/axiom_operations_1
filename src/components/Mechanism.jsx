import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Database, Network, Cpu, Activity, Workflow } from 'lucide-react';

const Mechanism = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entry animations for the section
      gsap.from('.mech-text', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%'
        }
      });
      
      // Node entrance animation
      gsap.from('.mech-node', {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: '.mech-viz-container',
          start: 'top 80%'
        }
      });
      
      // Infinite pulse loops for the network edges
      gsap.to('.pulse-particle', {
        motionPath: {
          path: 'M 0,0 L 400,0',
          align: 'self',
        },
        duration: 2,
        repeat: -1,
        ease: 'none',
        stagger: 0.5
      });
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="mechanism" ref={containerRef} className="section-padding bg-dark border-t border-border relative overflow-hidden">
      {/* Botanical Structural Element: High-contrast specimen nature in low light - Increased Visibility */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.20] pointer-events-none grayscale mix-blend-screen"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1546559336-0c9f16da0890?auto=format&fit=crop&w=1200&q=60")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Clinical Stillness: Vertical shimmer line - Hidden on Mobile */}
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-accent/20 overflow-hidden">
        <div className="absolute inset-0 w-full h-[30%] bg-gradient-to-b from-transparent via-accent to-transparent animate-shimmer" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* Text Side */}
        <div className="z-10 text-primary">
          <div className="mb-8">
            <h2 className="mech-text flex flex-col gap-2">
              <span className="font-sans font-light text-muted uppercase tracking-[0.05em] text-sm md:text-base">
                Die meisten fokussieren sich auf: <span className="text-primary/70 line-through decoration-muted/50">isolierte Tool-Hacks.</span>
              </span>
              <span className="font-drama italic text-primary leading-[1.1] text-[clamp(2.5rem,5vw,4.5rem)] mt-2">
                Wir bauen: <span className="text-accent underline decoration-1 underline-offset-8">Ganzheitliche Systeme.</span>
              </span>
            </h2>
          </div>
          
          <div className="space-y-6">
            <p className="mech-text font-sans text-muted leading-[1.7] text-lg">
              Die <strong>Resilient Ops Architektur™</strong> ist kein Pflaster für akute Schmerzen. Es ist ein tiefgreifender architektonischer Eingriff, der die operative Arbeit vom Menschen entkoppelt.
            </p>
            <p className="mech-text font-sans text-muted leading-[1.7] text-lg">
              Deshalb setzen wir nicht auf ein wackeliges Zapier-Chaos, das beim kleinsten Edge-Case zusammenbricht. Wir entwerfen ein in sich geschlossenes, digitales Nervensystem. Datenbanken, Kommunikationskanäle und operative Tools verschmelzen durch maßgeschneiderte KI-Agenten zu einer Einheit.
            </p>
            <p className="mech-text font-sans text-muted leading-[1.7] text-lg">
              Das bedeutet: Aufgaben werden autonom zugewiesen, Wissen wird zentral aggregiert und Fehler werden vom System abgefangen, bevor ein Kunde überhaupt etwas davon mitbekommt. <strong className="font-normal text-primary">Das Ergebnis ist brutale Ausfallsicherheit und grenzenlose Skalierbarkeit für Dienstleister und Agenturen.</strong>
            </p>
          </div>
        </div>
        
        {/* Visualization Side: The Flow Connector Pattern */}
        <div className="mech-viz-container relative w-full aspect-square md:aspect-[4/3] bg-surface border border-border rounded-lg overflow-hidden flex items-center justify-center p-4">
          
          {/* Subtle grid background */}
          <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'radial-gradient(var(--text-muted) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          
          {/* Flow Connector Structure */}
          <div className="relative w-full max-w-[400px] h-[300px] flex items-center justify-center z-10">
            {/* SVG Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full stroke-border z-0" viewBox="0 0 400 300">
              <path id="path-1" d="M 50,150 L 200,50" fill="none" strokeWidth="1" />
              <path id="path-2" d="M 50,150 L 200,250" fill="none" strokeWidth="1" />
              <path id="path-3" d="M 200,50 L 350,150" fill="none" strokeWidth="1" />
              <path id="path-4" d="M 200,250 L 350,150" fill="none" strokeWidth="1" />
              <path id="path-5" d="M 200,50 L 200,250" fill="none" strokeWidth="1" strokeDasharray="4 4" className="opacity-50" />
              
              {/* Animated particles along paths */}
              <circle r="3" fill="#3B4F3A" className="animate-[dash_3s_linear_infinite]">
                <animateMotion dur="3s" repeatCount="indefinite" path="M 50,150 L 200,50" />
              </circle>
              <circle r="3" fill="#3B4F3A" className="animate-[dash_4s_linear_infinite]">
                <animateMotion dur="4s" repeatCount="indefinite" path="M 50,150 L 200,250" />
              </circle>
              <circle r="3" fill="#3B4F3A">
                <animateMotion dur="2.5s" repeatCount="indefinite" path="M 200,50 L 350,150" />
              </circle>
              <circle r="3" fill="#3B4F3A">
                <animateMotion dur="3.5s" repeatCount="indefinite" path="M 200,250 L 350,150" />
              </circle>
            </svg>

            {/* Nodes */}
            {/* Incoming / Trigger Node */}
            <div className="mech-node absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-lg bg-dark border border-border flex items-center justify-center relative shadow-lg shadow-black/50">
                <div className="absolute inset-0 border border-accent rounded-lg opacity-50 animate-ping !duration-3000" />
                <Activity size={20} className="text-primary" />
              </div>
              <span className="font-mono text-[10px] uppercase text-muted tracking-widest bg-dark px-2 rounded">Client Input</span>
            </div>

            {/* AI Router Node */}
            <div className="mech-node absolute left-1/2 top-4 -translate-x-1/2 flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-lg bg-accent/20 border border-accent flex items-center justify-center shadow-lg shadow-black/50">
                <Cpu size={24} className="text-accent" />
              </div>
              <span className="font-mono text-[10px] uppercase text-accent tracking-widest bg-dark px-2 rounded">AI Router</span>
            </div>

            {/* RAG Knowledge Node */}
            <div className="mech-node absolute left-1/2 bottom-4 -translate-x-1/2 flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-lg bg-dark border border-border flex items-center justify-center shadow-lg shadow-black/50">
                <Database size={20} className="text-primary" />
              </div>
              <span className="font-mono text-[10px] uppercase text-muted tracking-widest bg-dark px-2 rounded">Wissens-Silo</span>
            </div>

            {/* Execution / SLA Node */}
            <div className="mech-node absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-lg bg-dark border border-border flex items-center justify-center shadow-lg shadow-black/50 overflow-hidden relative group">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />
                <Workflow size={20} className="text-primary" />
              </div>
              <span className="font-mono text-[10px] uppercase text-primary tracking-widest bg-dark px-2 rounded">Autonome Task</span>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mechanism;
