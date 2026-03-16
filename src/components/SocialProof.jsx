import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Star } from 'lucide-react';

const SocialProof = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Metrics punch in
      gsap.from('.metric-block', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.metrics-container',
          start: 'top 85%',
        }
      });

      // Testimonials slide from right
      gsap.from('.testimony-card', {
        x: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.testimonials-container',
          start: 'top 80%',
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const metrics = [
    { value: "40+", label: "Agenturen & Dienstleister betreut" },
    { value: "15h+", label: "Zeitersparnis pro Mitarbeiter / Woche" },
    { value: "100%", label: "Systemverfügbarkeit im laufenden Betrieb", highlight: true }
  ];

  const testimonials = [
    {
      name: "[Name des Kunden]",
      role: "Inhaber einer 80k MRR Performance-Agentur",
      quote: "Jede Freigabe, jedes Onboarding lief über meinen Schreibtisch. Seit der Implementierung läuft das System autark. Wir haben 4 neue Retainer geclosed — ohne dass sich die operative Last erhöht hat."
    },
    {
      name: "[Name des Kunden]",
      role: "GF einer Webdesign-Agentur",
      quote: "Neue Mitarbeiter sind jetzt in Tagen eingearbeitet statt in Wochen. Die 14 Stunden Recherchearbeit pro Woche bei unseren Projektmanagern? Komplett weggefallen."
    },
    {
      name: "[Name des Kunden]",
      role: "Inhaber B2B-Consulting",
      quote: "Ich dachte, wir brauchen mehr Leute für den nächsten Wachstumsschritt. Die Wahrheit war: Wir brauchten bessere Systeme. Die Personalkosten sind eingefroren, der Umsatz um 30% gestiegen."
    }
  ];

  return (
    <section id="proof" ref={containerRef} className="section-padding bg-[#E8E4DC] text-[#0F0F0E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <h2 className="font-sans font-light text-[clamp(2.5rem,5vw,3.5rem)] leading-tight tracking-[-0.04em] mb-4 text-[#0F0F0E]">
            Was sich nach der Implementierung ändert.
          </h2>
          <p className="font-sans text-[#0F0F0E]/70 text-lg max-w-2xl mx-auto">
            Gute Konzepte klingen auf Papier immer gut. Was zählt, ist die messbare Veränderung in deinem Alltag.
          </p>
        </div>

        {/* Metrics Strip */}
        <div className="metrics-container grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-border/20 mb-20 md:mb-32">
          {metrics.map((m, i) => (
            <div key={i} className={`metric-block flex flex-col items-center justify-center text-center py-6 md:py-0 ${m.highlight ? 'text-accent' : 'text-[#0F0F0E]'}`}>
              <div className="font-mono text-[clamp(3rem,6vw,5rem)] leading-none mb-2 tracking-tighter">
                {m.value}
              </div>
              <div className="font-sans text-sm md:text-base font-medium tracking-wide uppercase opacity-80">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="testimonials-container grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="testimony-card bg-[#F5F3EC] border border-border/10 p-8 md:p-10 rounded-lg flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 text-accent fill-accent" strokeWidth={1} />)}
                </div>
                <p className="font-sans text-[#0F0F0E]/80 text-lg leading-[1.7] mb-8 italic">
                  "{t.quote}"
                </p>
              </div>
              <div className="mt-auto border-t border-border/10 pt-6">
                <div className="font-sans font-medium text-[#0F0F0E]">{t.name}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#0F0F0E]/50 mt-1">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
