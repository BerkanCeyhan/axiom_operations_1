import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Plus } from 'lucide-react';

const faqData = [
  {
    question: "Was kostet das?",
    answer: "Betrachte dies nicht als SaaS-Subscription, sondern als architektonischen Eingriff, der die Personalkosten für dein Fulfillment langfristig einfriert. In den meisten Fällen amortisiert sich das System durch eingesparte Arbeitsstunden bereits im ersten Quartal nach dem Go-Live. Im 30-minütigen Audit geben wir dir eine genaue Einschätzung auf Basis eures Volumens."
  },
  {
    question: "Wie viel Aufwand bedeutet das für mein Team?",
    answer: "Minimal. Wir sind keine Berater, die Workshops abhalten und euch dann die Arbeit überlassen. Wir bauen das System komplett funktionsfähig in unserem Labor. Euer Input beschränkt sich auf 1-2 Deep-Dive-Calls für das Mapping eurer aktuellen Prozesse. Danach schalten wir um und schulen euer Team innerhalb eines Tages."
  },
  {
    question: "Wir nutzen schon 15 verschiedene Tools... Müssen wir alles ändern?",
    answer: "Ganz im Gegenteil. Die Resilient Ops Architektur integriert eure bestehenden Systeme (HubSpot, Slack, ClickUp, Asana etc.) durch Custom-APIs und Webhooks. Wir räumen euer Zapier-Chaos auf, aber eure Frontend-Tools bleiben oft gleich – sie werden nur durch unser unterliegendes Nervensystem endlich stabil."
  },
  {
    question: "Wie schnell sehen wir die Ergebnisse?",
    answer: "Sobald wir das System live schalten – in der Regel 4-6 Wochen nach Projektstart. Durch das KI-Fulfillment-Routing fallen ab Tag 1 die manuellen Onboarding- und Zuweisungsaufgaben komplett weg. Die Reduktion der Slack-Nachrichten und das Ende der Flaschenhals-Rolle für dich spürst du am selben Nachmittag."
  },
  {
    question: "Warum Axiom Operations und nicht eine normale Automatisierungs-Agentur?",
    answer: "Normale Agenturen bauen dir 'Wenn-Dann'-Zapiers, die beim kleinsten Edge-Case brechen. Wir bauen autonome KI-Agenten, Fehlerprotokolle und maßgeschneiderten Node-Code, der sich selbst heilt. Wir bauen keine Trigger, wir bauen Infrastruktur."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.faq-item', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%'
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" ref={containerRef} className="section-padding bg-dark border-t border-border">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-widest text-accent uppercase mb-4 block">Klartext</span>
          <h2 className="font-sans font-light text-primary text-[clamp(2.5rem,4vw,3.5rem)] tracking-[-0.04em]">
            Häufige Fragen.
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqData.map((faq, i) => (
            <div 
              key={i} 
              className="faq-item bg-surface border border-border/60 rounded-lg overflow-hidden transition-colors hover:border-border cursor-pointer group"
              onClick={() => toggle(i)}
            >
              <div className="p-6 md:px-8 py-5 md:py-6 flex justify-between items-center select-none">
                <h3 className="font-sans text-primary/90 text-lg md:text-xl font-normal pr-8 transition-colors group-hover:text-primary">
                  {faq.question}
                </h3>
                <div className={`text-accent shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}>
                  <Plus strokeWidth={1.5} size={24} />
                </div>
              </div>
              <div 
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="font-sans text-muted leading-[1.7] px-6 md:px-8 pb-6 md:pb-8">
                    {faq.answer}
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

export default FAQ;
