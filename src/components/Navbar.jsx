import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ theme, isOverLight, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isLight = theme === 'light';

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
    { id: 'capabilities', label: 'Systeme' }
  ];

  return (
    <header
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 max-w-4xl w-[calc(100%-3rem)] md:w-max rounded-full border ${isOverLight || isLight ? 'border-dark/10' : 'border-border'
        } ${isScrolled
          ? (useDarkColors ? 'bg-white/80' : 'bg-dark/80') + ' backdrop-blur-xl py-3 px-6 shadow-lg'
          : (useDarkColors ? 'bg-white/40' : 'bg-dark/40') + ' backdrop-blur-md py-4 px-8'
        }`}
    >
      <div className="flex items-center justify-between md:justify-center md:gap-12">
        <a href="#" className="flex items-center gap-2 group">
          <span className={`font-mono text-sm tracking-widest font-medium uppercase transition-colors ${useDarkColors ? 'text-[#0F0F0E]' : 'text-primary'
            }`}>
            Axiom
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-[11px] font-sans font-medium uppercase tracking-widest">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`transition-colors duration-300 ${activeSection === link.id
                ? (useDarkColors ? 'text-[#0F0F0E]' : 'text-primary')
                : (useDarkColors ? 'text-[#0F0F0E]/40 hover:text-[#0F0F0E]' : 'text-muted hover:text-primary')
                }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Link
          to="/audit"
          className={`hidden md:inline-flex items-center justify-center border transition-all duration-300 px-6 py-2.5 font-mono text-[10px] uppercase tracking-widest rounded-none ${useDarkColors
            ? 'border-[#0F0F0E] bg-transparent text-[#0F0F0E] hover:bg-[#0F0F0E] hover:text-white'
            : 'border-accent bg-transparent text-primary hover:bg-accent hover:text-primary'
            }`}
        >
          Analyse
        </Link>

        {/* Mobile simplified CTA button in nav */}
        <Link
          to="/audit"
          className={`md:hidden inline-flex items-center justify-center border px-4 py-2 font-mono text-[9px] uppercase tracking-widest transition-colors ${useDarkColors
            ? 'border-[#0F0F0E]/10 text-[#0F0F0E] hover:bg-[#0F0F0E] hover:text-white'
            : 'border-border text-primary hover:bg-primary hover:text-dark'
            }`}
        >
          Analyse
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
