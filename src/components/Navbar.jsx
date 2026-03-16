import { useState, useEffect } from 'react';

const Navbar = ({ theme, isOverLight }) => {
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

  return (
    <header 
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 max-w-4xl w-[calc(100%-3rem)] md:w-max rounded-full border ${
        isOverLight ? 'border-dark/10' : 'border-border'
      } ${
        isScrolled 
          ? (useDarkColors ? 'bg-white/80' : 'bg-dark/80') + ' backdrop-blur-xl py-3 px-6 shadow-lg' 
          : (useDarkColors ? 'bg-white/40' : 'bg-dark/40') + ' backdrop-blur-md py-4 px-6'
      }`}
    >
      <div className="flex items-center justify-between md:justify-center md:gap-12">
        <a href="#" className="flex items-center gap-2 group">
          <span className={`font-mono text-sm tracking-widest font-medium uppercase transition-colors ${
            useDarkColors ? 'text-dark' : 'text-primary'
          }`}>
            Axiom
          </span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-sans tracking-wide">
          <a href="#problem" className={`${useDarkColors ? 'text-dark/70 hover:text-dark' : 'text-muted hover:text-primary'} transition-colors`}>Problem</a>
          <a href="#mechanism" className={`${useDarkColors ? 'text-dark/70 hover:text-dark' : 'text-muted hover:text-primary'} transition-colors`}>Architektur</a>
          <a href="#capabilities" className={`${useDarkColors ? 'text-dark/70 hover:text-dark' : 'text-muted hover:text-primary'} transition-colors`}>Systeme</a>
        </nav>

        <a 
          href="#audit" 
          className={`hidden md:inline-flex items-center justify-center border transition-all duration-300 px-6 py-2.5 font-mono text-xs uppercase tracking-widest rounded-none ${
            useDarkColors 
              ? 'border-dark bg-transparent text-dark hover:bg-dark hover:text-white' 
              : 'border-accent bg-transparent text-primary hover:bg-accent hover:text-primary'
          }`}
        >
          Audit anfragen
        </a>
        
        {/* Mobile simplified CTA button in nav */}
        <a 
          href="#audit" 
          className={`md:hidden inline-flex items-center justify-center border px-4 py-2 font-mono text-[10px] uppercase tracking-widest transition-colors ${
            useDarkColors
              ? 'border-dark/20 text-dark hover:bg-dark hover:text-white'
              : 'border-border text-primary hover:bg-primary hover:text-dark'
          }`}
        >
          Audit
        </a>
      </div>
    </header>
  );
};

export default Navbar;
