import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ShaderCanvas from '../components/ShaderCanvas';

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = '404 - Seite nicht gefunden | Axiom Operations';
  }, []);

  return (
    <div className="relative min-h-screen bg-dark flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background Shader for vibe */}
      <div className="absolute inset-0 z-0 opacity-40">
        <ShaderCanvas theme="dark" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl">
        <h1 className="font-drama italic text-primary text-[clamp(5rem,15vw,12rem)] leading-[0.8] mb-8 select-none opacity-20">
          404
        </h1>
        
        <h2 className="font-sans font-light text-primary text-3xl md:text-5xl tracking-tight mb-6">
          Seite nicht gefunden.
        </h2>
        
        <p className="font-sans text-muted text-base md:text-lg leading-[1.8] mb-12 max-w-md mx-auto">
          Der angeforderte Pfad existiert nicht oder wurde verschoben. Lass uns dich zurück auf den richtigen Weg bringen.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-primary hover:text-accent transition-all duration-500 border border-primary/20 hover:border-accent bg-primary/5 hover:bg-accent/10 px-10 py-5 rounded-none group"
        >
          <span className="transition-transform duration-500 group-hover:-translate-x-1">←</span>
          Zurück zur Hauptseite
        </Link>
      </div>

      {/* Minimal Brand Mark */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.4em] text-muted/30">
        Axiom Operations
      </div>
    </div>
  );
};

export default NotFound;
