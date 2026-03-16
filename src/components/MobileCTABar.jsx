import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const MobileCTABar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;
    
    // Show after scrolling past hero
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden animate-in slide-in-from-bottom-full duration-500">
      <div className="bg-dark/95 backdrop-blur-md border-t border-border p-4 relative">
        <button 
          onClick={() => setIsDismissed(true)}
          className="absolute -top-3 right-4 bg-border text-muted rounded-full p-1 border border-dark hover:text-primary"
          aria-label="Dismiss"
        >
          <X size={14} />
        </button>
        <Link 
          to="/audit" 
          className="w-full flex items-center justify-center border border-border bg-transparent text-primary hover:bg-primary hover:text-dark transition-all duration-300 min-h-[48px] px-6 font-mono text-xs uppercase tracking-widest rounded-none"
        >
          Kostenloses Architektur-Audit anfragen
        </Link>
      </div>
    </div>
  );
};

export default MobileCTABar;
