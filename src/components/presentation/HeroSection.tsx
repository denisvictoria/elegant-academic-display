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
        py-20 px-8"
    >
      <div className="max-w-[900px] mx-auto">
        <span className="inline-block bg-gold text-surface-dark px-5 py-2 rounded text-[0.72rem] font-bold uppercase tracking-[2px] mb-8">
          Management International Review • Vol. 47, 2007/3, pp. 453-475
        </span>

        <h1 className="font-serif text-[clamp(1.6rem,3.2vw,2.5rem)] font-semibold italic leading-[1.4] mb-6 text-primary-foreground">
          "Is International Business Good for Companies?
          <br />
          The Evolutionary or Multi-Stage Theory of Internationalization
          <br />
          vs. the Transaction Cost Perspective"
        </h1>

        <p className="font-serif text-[1.4rem] font-semibold text-gold-light mb-2">
          Farok J. Contractor
        </p>
        <p className="text-base text-primary-foreground/70 mb-10">
          Professor of Management and Global Business — Rutgers University, Newark, NJ
        </p>

        <div className="w-[60px] h-[3px] bg-gold mx-auto mb-8" />

        <p className="text-xs text-primary-foreground/50 uppercase tracking-[2px] mb-4">
          Apresentação Acadêmica
        </p>
        <div className="flex justify-center gap-4 flex-wrap mb-10">
          {["Charles", "Denis", "Luis"].map((name) => (
            <span
              key={name}
              className="bg-primary-foreground/10 px-5 py-2 rounded text-primary-foreground font-medium text-sm"
            >
              {name}
            </span>
          ))}
        </div>

        <button
          onClick={() => scrollTo("problema")}
          className="inline-flex items-center gap-2 bg-gold text-surface-dark px-7 py-3 rounded font-semibold text-sm
            hover:bg-gold-light hover:-translate-y-0.5 transition-all duration-300"
        >
          Iniciar Apresentação
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[18px] h-[18px]">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce-gentle">
        <ChevronDown className="w-6 h-6 text-primary-foreground/40" />
      </div>
    </section>
  );
};

export default HeroSection;
