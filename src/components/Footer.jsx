import { Link } from 'react-router-dom';

const Footer = ({ theme }) => {
  const isLight = theme === 'light';
  return (
    <footer className="bg-dark pt-20 pb-12 px-6 md:px-12 border-t border-border relative overflow-hidden z-20">
      {/* Botanical strip: macro nature sign of life */}
      <div 
        className={`absolute inset-0 z-0 pointer-events-none grayscale ${isLight ? 'opacity-[0.08]' : 'opacity-[0.05]'}`}
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200&q=50")',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom'
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="md:col-span-5">
            <div className="font-mono text-sm tracking-[0.2em] text-primary uppercase mb-4 opacity-90">
              Axiom
            </div>
            <p className="font-sans text-muted text-sm leading-[1.8] max-w-sm mb-8">
              Wir automatisieren Fulfillment, Vertrieb und Prozesse für Agenturen und Dienstleister — mit KI-Agenten und smarten Automationen.
            </p>
            <div className="flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full animate-pulse transition-shadow ${isLight ? 'bg-accent shadow-[0_0_8px_rgba(59,79,58,0.8)]' : 'bg-accent shadow-[0_0_8px_rgba(59,79,58,0.5)]'}`} />
              <span className="font-mono text-[10px] text-muted uppercase tracking-widest pl-1">System Betriebsbereit</span>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="font-sans text-primary mb-6 font-medium">Plattform</h4>
            <ul className="flex flex-col gap-3 font-sans text-muted text-sm">
              <li><a href="#problem" className="hover:text-primary transition-colors">Das Problem</a></li>
              <li><a href="#mechanism" className="hover:text-primary transition-colors">Die Architektur</a></li>
              <li><a href="#capabilities" className="hover:text-primary transition-colors">System-Module</a></li>
              <li><a href="#proof" className="hover:text-primary transition-colors">Ergebnisse</a></li>
            </ul>
          </div>
          
          {/* Contact / Legal */}
          <div className="md:col-span-3">
            <h4 className="font-sans text-primary mb-6 font-medium">Legal & Kontakt</h4>
            <ul className="flex flex-col gap-3 font-sans text-muted text-sm">
              <li><Link to="/impressum" className="hover:text-primary transition-colors">Impressum</Link></li>
              <li><Link to="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">AGB</a></li>
              <li className="mt-4"><a href="mailto:berkan@berkanceyhan.de" className="font-mono text-[11px] truncate block hover:text-primary transition-colors">berkan@berkanceyhan.de</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-sans text-muted/60 text-xs">
            © {new Date().getFullYear()} Axiom Operations. All rights reserved.
          </div>
          <div className="font-mono text-[9px] uppercase tracking-widest text-muted/40">
            Resilient Ops Architektur™
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
