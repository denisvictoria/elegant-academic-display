import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      data-section="home"
      className="min-h-screen flex flex-col justify-center items-center text-center relative
        bg-gradient-to-br from-surface-dark via-primary to-surface-dark-accent text-primary-foreground
        py-20 px-8 overflow-hidden"
    >
      {/* Efeito visual de fundo suave para dar profundidade à capa */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>

      <div className="max-w-[900px] mx-auto relative z-10 flex flex-col items-center">
        <span className="inline-block bg-gold text-surface-dark px-5 py-2 rounded-full text-[0.75rem] font-bold uppercase tracking-[2px] mb-10 shadow-sm shadow-gold/20">
          Management International Review • Vol. 47, 2007/3, pp. 453-475
        </span>

        <h1 className="font-serif text-[clamp(1.8rem,4vw,3rem)] font-semibold italic leading-tight mb-8 text-white drop-shadow-md">
          "Is International Business Good for Companies?
          <br />
          <span className="text-primary-foreground/90 text-[clamp(1.4rem,3vw,2.2rem)] font-medium mt-4 block">
            The Evolutionary or Multi-Stage Theory of Internationalization
            <br />
            vs. the Transaction Cost Perspective"
          </span>
        </h1>

        <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 mb-10 backdrop-blur-sm w-full max-w-2xl">
          <p className="font-serif text-[1.5rem] font-bold text-gold-light mb-1">
            Farok J. Contractor
          </p>
          <p className="text-sm md:text-base text-primary-foreground/80">
            Professor of Management and Global Business — Rutgers University, Newark, NJ
          </p>
        </div>

        <div className="w-[80px] h-[2px] bg-gold/50 mx-auto mb-8 rounded-full" />

        <p className="text-xs text-primary-foreground/60 uppercase tracking-[3px] mb-5 font-semibold">
          Apresentação Acadêmica
        </p>
        
        <div className="flex justify-center gap-4 flex-wrap mb-12">
          {["Charles", "Denis", "Luis"].map((name) => (
            <span
              key={name}
              className="bg-white/10 hover:bg-white/20 transition-colors border border-white/10 px-6 py-2 rounded-full text-white font-medium text-sm shadow-sm"
            >
              {name}
            </span>
          ))}
        </div>

        <button
          onClick={() => scrollTo("problema")}
          className="group inline-flex items-center gap-3 bg-gold text-surface-dark px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wide
            hover:bg-gold-light hover:-translate-y-1 hover:shadow-lg hover:shadow-gold/30 transition-all duration-300"
        >
          Iniciar Apresentação
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollTo("problema")}
          className="p-2 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
          aria-label="Rolar para baixo"
        >
          <ChevronDown className="w-8 h-8 text-gold/60 hover:text-gold transition-colors" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
