import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 max-w-4xl w-[calc(100%-3rem)] md:w-max rounded-full ${
        isScrolled ? 'bg-dark/80 backdrop-blur-xl border border-border py-3 px-6' : 'bg-transparent py-4 px-6'
      }`}
    >
      <div className="flex items-center justify-between md:justify-center md:gap-12">
        <a href="#" className="flex items-center gap-2 group">
          <span className={`font-mono text-sm tracking-widest font-medium uppercase transition-colors ${
            isScrolled ? 'text-primary' : 'text-primary/90 group-hover:text-primary'
          }`}>
            Axiom
          </span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-sans tracking-wide">
          <a href="#problem" className="text-muted hover:text-primary transition-colors">Problem</a>
          <a href="#mechanism" className="text-muted hover:text-primary transition-colors">Architektur</a>
          <a href="#capabilities" className="text-muted hover:text-primary transition-colors">Systeme</a>
        </nav>

        <a 
          href="#audit" 
          className="hidden md:inline-flex items-center justify-center border border-border bg-transparent text-primary hover:bg-primary hover:text-dark transition-all duration-300 px-6 py-2.5 font-mono text-xs uppercase tracking-widest rounded-none"
        >
          Audit anfragen
        </a>
        
        {/* Mobile simplified CTA button in nav */}
        <a 
          href="#audit" 
          className="md:hidden inline-flex items-center justify-center border border-border bg-transparent text-primary px-4 py-2 font-mono text-[10px] uppercase tracking-widest transition-colors hover:bg-primary hover:text-dark"
        >
          Audit
        </a>
      </div>
    </header>
  );
};

export default Navbar;
