import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Terminal, Database, ShieldAlert, GitMerge } from 'lucide-react';

// --- Pattern 1: Agent Status Grid ---
const AgentGrid = ({ theme }) => {
  const isLight = theme === 'light';
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1 });
      const nodes = gsap.utils.toArray('.status-node');
      
      // Reset all using semantic variables
      gsap.set(nodes, { borderColor: isLight ? 'rgba(15, 15, 14, 0.1)' : '#1A1A18', backgroundColor: 'transparent' });
      gsap.set('.node-dot', { backgroundColor: isLight ? '#666664' : '#C8C3B8' }); 
      
      // Choreograph
      nodes.forEach((node, i) => {
        tl.to(node, { borderColor: '#3B4F3A', backgroundColor: 'rgba(59, 79, 58, 0.1)', duration: 0.3 }, i * 1.5)
          .to(node.querySelector('.node-dot'), { backgroundColor: '#3B4F3A', scale: 1.5, duration: 0.3 }, i * 1.5)
          .to(node.querySelector('.node-dot'), { scale: 1, duration: 0.2 })
          // Complete state
          .to(node, { borderColor: isLight ? 'rgba(15, 15, 14, 0.1)' : '#1A1A18', backgroundColor: 'transparent', duration: 0.5 }, i * 1.5 + 1.2)
          .to(node.querySelector('.node-dot'), { backgroundColor: '#3B4F3A', duration: 0.5 }, i * 1.5 + 1.2);
      });
    });
    return () => ctx.revert();
  }, [isLight]);

  return (
    <div className="grid grid-cols-2 gap-3 h-full p-4 items-center">
      {[ 'CRM-Anbindung', 'Datenanreicherung', 'Projekt-Setup', 'Aufgabenzuweisung' ].map((label, i) => (
        <div key={i} className="status-node flex items-center gap-3 p-3 border border-border rounded bg-transparent transition-colors">
          <div className="node-dot w-2 h-2 rounded-full bg-muted shrink-0" />
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted truncate">{label}</span>
        </div>
      ))}
    </div>
  );
};

// --- Pattern 2: Command Line ---
const CommandLineInfo = ({ theme }) => {
  const [text, setText] = useState('');
  const fullText = `> Frage: "Wie läuft das Onboarding für Agenturkunden?"\n> Durchsuche 142 Dokumente...\n✓ Antwort gefunden\n\n"Der Kickoff-Prozess benötigt das ausgefüllte Intake-Formular. Letzte Änderung durch Sarah am 14.02."`;
  
  useEffect(() => {
    let current = '';
    let i = 0;
    let timer;
    const typeWriter = () => {
      if (i < fullText.length) {
        current += fullText.charAt(i);
        setText(current);
        i++;
        timer = setTimeout(typeWriter, Math.random() * 30 + 10);
      } else {
        setTimeout(() => { i = 0; current = ''; setText(''); typeWriter(); }, 4000);
      }
    };
    timer = setTimeout(typeWriter, 500);
    return () => clearTimeout(timer);
  }, [fullText]);

  return (
    <div className="h-full bg-dark p-6 font-mono text-xs text-muted leading-[1.8] rounded-md border border-border overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-6 bg-border/20 flex items-center px-3 border-b border-border">
        <div className="w-2 h-2 rounded-full bg-muted/50 mr-1.5" />
        <div className="w-2 h-2 rounded-full bg-muted/50 mr-1.5" />
        <div className="w-2 h-2 rounded-full bg-muted/50" />
      </div>
      <div className="mt-4 whitespace-pre-wrap">
        {text}
        <span className="animate-pulse w-2 h-3 inline-block bg-accent ml-1 align-middle" />
      </div>
    </div>
  );
};


// --- Pattern 3: Diagnostic Shuffler ---
const DiagnosticShuffler = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.shuffle-card');
      let currentIndex = 0;

      const cycle = () => {
        gsap.to(cards, {
          y: (i) => {
            const pos = (i - currentIndex + cards.length) % cards.length;
            return pos * 12;
          },
          scale: (i) => {
            const pos = (i - currentIndex + cards.length) % cards.length;
            return 1 - (pos * 0.05);
          },
          opacity: (i) => {
            const pos = (i - currentIndex + cards.length) % cards.length;
            return 1 - (pos * 0.2);
          },
          zIndex: (i) => {
            const pos = (i - currentIndex + cards.length) % cards.length;
            return cards.length - pos;
          },
          duration: 0.6,
          ease: 'power3.inOut'
        });
        currentIndex = (currentIndex + 1) % cards.length;
      };

      cycle();
      const interval = setInterval(cycle, 2500);
      return () => clearInterval(interval);
    });
    return () => ctx.revert();
  }, []);

  const items = [
    { title: 'Signal erkannt: Series-B-Finanzierung.', desc: 'TechCrunch-Artikel vor 12 Min. entdeckt.' },
    { title: 'Kaufsignal: Wettbewerber verloren.', desc: 'Stellenanzeige für Inhouse-SEO gelöscht.' },
    { title: 'Aktion: Sales-Briefing erstellt.', desc: 'Personalisierter Gesprächswinkel für den Call generiert.' }
  ];

  return (
    <div className="h-full relative flex items-center justify-center p-6">
      {items.map((item, i) => (
        <div 
          key={i} 
          className="shuffle-card absolute w-full max-w-[240px] bg-dark border border-border p-4 shadow-xl rounded-md"
        >
          <div className="text-[10px] font-mono uppercase tracking-widest text-accent mb-2">Data Point {i+1}</div>
          <div className="font-sans text-primary text-sm mb-1">{item.title}</div>
          <div className="font-sans text-muted text-xs">{item.desc}</div>
        </div>
      ))}
    </div>
  );
};

// --- Pattern 4: Live Gauge Cluster ---
const GaugeCluster = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.gauge-fill', 
        { strokeDashoffset: 100 },
        { strokeDashoffset: (i, el) => 100 - parseFloat(el.dataset.val), duration: 2, ease: 'power3.out', stagger: 0.2,
          scrollTrigger: { trigger: '.gauge-container' }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="gauge-container h-full flex flex-col justify-center items-center gap-6 p-4">
      <div className="flex gap-6 w-full justify-center">
        {/* Gauge 1 */}
        <div className="relative w-20 h-20 flex flex-col items-center justify-center">
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 36 36">
            <path className="stroke-border" strokeWidth="2" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            <path className="gauge-fill stroke-accent" strokeWidth="2" strokeDasharray="100, 100" data-val="98" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
          </svg>
          <span className="font-mono text-sm text-primary">98%</span>
        </div>
        {/* Gauge 2 */}
        <div className="relative w-20 h-20 flex flex-col items-center justify-center">
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 36 36">
            <path className="stroke-border" strokeWidth="2" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            <path className="gauge-fill stroke-muted" strokeWidth="2" strokeDasharray="100, 100" data-val="14" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
          </svg>
          <span className="font-mono text-sm text-primary">14ms</span>
        </div>
      </div>
      <div className="flex justify-between w-full max-w-[200px] px-2">
        <span className="font-mono text-[9px] uppercase tracking-widest text-muted">SLA-Status</span>
        <span className="font-mono text-[9px] uppercase tracking-widest text-muted">System-Latenz</span>
      </div>
    </div>
  );
};

// --- Main Capabilities Section ---
const Capabilities = ({ theme }) => {
  const containerRef = useRef(null);
  
  // ... imports and effects omitted for brevity but they are there

  const capabilities = [
    {
      title: "Automatisches Kunden-Onboarding",
      desc: "Neuer Deal abgeschlossen? Das System erstellt das Projekt-Board, weist Aufgaben ans Team zu und schickt die Willkommensmail raus. In Sekunden, ohne dass du eingreifen musst.",
      icon: GitMerge,
      interactive: <AgentGrid theme={theme} />
    },
    {
      title: "KI-Wissensdatenbank für dein Team",
      desc: "Dein Team fragt die KI statt dich. SOPs, Prozesse, Kundendaten, alles zentral abrufbar. Neue Mitarbeiter sind in Tagen eingearbeitet statt in Wochen.",
      icon: Database,
      interactive: <CommandLineInfo theme={theme} />
    },
    {
      title: "Automatische Lead-Recherche & Scoring",
      desc: "Vor jedem Sales-Call zieht die KI alle relevanten Infos und Kaufsignale zum Lead und fasst sie in einem Sales-Briefing zusammen. Dein Vertriebler geht vorbereitet ins Gespräch, ohne selbst recherchieren zu müssen.",
      icon: Terminal,
      interactive: <DiagnosticShuffler />
    },
    {
      title: "Automatisches Frühwarnsystem",
      desc: "SLA fast verletzt? Deadline in Gefahr? Kunde seit 3 Tagen ohne Update? Das System schlägt Alarm, bevor etwas eskaliert. Kein manuelles Nachhalten mehr nötig.",
      icon: ShieldAlert,
      interactive: <GaugeCluster />
    }
  ];

  return (
    <section id="capabilities" ref={containerRef} className="section-padding bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border pb-8">
          <div className="max-w-2xl">
            <h2 className="font-sans font-light text-primary text-[clamp(2rem,4vw,3rem)] leading-tight tracking-[-0.04em]">
              Was wir konkret für dich bauen.
            </h2>
            <p className="font-sans text-muted mt-4 text-lg max-w-xl">
              Maßgeschneiderte Systeme, die ineinandergreifen und dein Fulfillment von manueller Arbeit befreien.
            </p>
          </div>
          <div className="font-mono text-xs text-accent uppercase tracking-[0.2em] whitespace-nowrap">
            [ Systeme aktiv ]
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="capability-card bg-surface border border-border rounded-lg overflow-hidden flex flex-col">
              {/* Interactive Top Half */}
              <div className="h-[220px] bg-dark relative border-b border-border overflow-hidden">
                {cap.interactive}
              </div>
              
              {/* Text Bottom Half */}
              <div className="p-8 md:p-10 flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <cap.icon className="w-5 h-5 text-accent" />
                  <h3 className="font-sans text-primary text-xl font-normal tracking-[-0.02em]">{cap.title}</h3>
                </div>
                <p className="font-sans text-muted leading-[1.7]">
                  {cap.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
