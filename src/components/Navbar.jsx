import { useState, useEffect } from 'react';

const Navbar = ({ theme, isOverLight, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isLight = theme === 'light';
  
  // Dynamic color logic: Use dark colors if base theme is light OR if currently over a light section
  const useDarkColors = isLight || isOverLight;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'problem', label: 'Problem' },
    { id: 'mechanism', label: 'Architektur' },
    { id: 'capabilities', label: 'Systeme' },
    { id: 'process', label: 'Prozess' },
    { id: 'proof', label: 'Ergebnisse' }
  ];

  return (
    <header 
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 max-w-5xl w-[calc(100%-2rem)] md:w-max rounded-full border ${
        isOverLight ? 'border-dark/10 shadow-sm' : 'border-border shadow-lg'
      } ${
        isScrolled 
          ? (useDarkColors ? 'bg-white/90' : 'bg-dark/90') + ' backdrop-blur-xl py-3 px-6' 
          : (useDarkColors ? 'bg-white/60' : 'bg-dark/60') + ' backdrop-blur-md py-4 px-8'
      }`}
    >
      <div className="flex items-center justify-between md:justify-center md:gap-10">
        <a href="#" className="flex items-center gap-2 group shrink-0">
          <span className={`font-mono text-sm tracking-widest font-bold uppercase transition-colors ${
            useDarkColors ? 'text-dark' : 'text-primary'
          }`}>
            Axiom
          </span>
        </a>
        
        <nav className="hidden lg:flex items-center gap-7 text-[11px] font-sans font-medium uppercase tracking-[0.1em]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                className={`relative transition-all duration-300 flex items-center gap-1.5 ${
                  isActive 
                    ? (useDarkColors ? 'text-dark font-bold' : 'text-primary font-bold') 
                    : (useDarkColors ? 'text-dark/40 hover:text-dark' : 'text-muted hover:text-primary')
                }`}
              >
                {isActive && (
                  <span className={`w-1 h-1 rounded-full animate-pulse ${
                    useDarkColors ? 'bg-dark' : 'bg-accent'
                  }`} />
                )}
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="#audit" 
            className={`hidden md:inline-flex items-center justify-center border transition-all duration-300 px-5 py-2 font-mono text-[10px] uppercase tracking-widest rounded-none ${
              useDarkColors 
                ? 'border-dark bg-transparent text-dark hover:bg-dark hover:text-white' 
                : 'border-accent bg-transparent text-primary hover:bg-accent hover:text-primary'
            }`}
          >
            Audit
          </a>
          
          {/* Mobile simplified CTA button in nav */}
          <a 
            href="#audit" 
            className={`md:hidden inline-flex items-center justify-center border px-3 py-1.5 font-mono text-[9px] uppercase tracking-widest transition-colors ${
              useDarkColors
                ? 'border-dark/20 text-dark hover:bg-dark hover:text-white'
                : 'border-border text-primary hover:bg-primary hover:text-dark'
            }`}
          >
            Audit
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
