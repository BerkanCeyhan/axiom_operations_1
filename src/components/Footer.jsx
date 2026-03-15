const Footer = () => {
  return (
    <footer className="bg-[#0A0A09] pt-20 pb-12 px-6 md:px-12 border-t border-border relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="md:col-span-5">
            <div className="font-mono text-sm tracking-widest text-primary uppercase mb-4 opacity-90">
              Axiom
            </div>
            <p className="font-sans text-muted text-sm leading-[1.7] max-w-sm mb-8">
              Architekten für ausfallsichere KI-Infrastruktur und maßgeschneiderte Unternehmensprozesse für Agenturen und B2B-Dienstleister.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#4CAF50] rounded-full animate-pulse blur-[1px]" />
              <span className="w-1.5 h-1.5 bg-[#4CAF50] rounded-full animate-pulse absolute" />
              <span className="font-mono text-[10px] text-muted uppercase tracking-widest pl-1">System Operational</span>
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
              <li><a href="#" className="hover:text-primary transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">AGB</a></li>
              <li className="mt-4"><a href="mailto:systems@axiom-operations.com" className="font-mono text-[11px] truncate block hover:text-primary transition-colors">systems@axiom-operations.com</a></li>
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
