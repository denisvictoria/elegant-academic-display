import NavBar from "@/components/presentation/NavBar";
import ProgressBar from "@/components/presentation/ProgressBar";
import HeroSection from "@/components/presentation/HeroSection";
import ProblemSection from "@/components/presentation/ProblemSection";
import TheorySection from "@/components/presentation/TheorySection";
import BenefitsSection from "@/components/presentation/BenefitsSection";
import DebateSection from "@/components/presentation/DebateSection";
import EvidenceSection from "@/components/presentation/EvidenceSection";
import ConclusionSection from "@/components/presentation/ConclusionSection";
import PresentationFooter from "@/components/presentation/PresentationFooter";

const sections = [
  { id: "home", label: "Início" },
  { id: "problema", label: "Problema" },
  { id: "teoria", label: "Teoria Multi-Stage" },
  { id: "beneficios", label: "7 Benefícios" },
  { id: "embate", label: "O Embate" }, // <-- Adicionado ao menu
  { id: "debate", label: "Debate TCI" },
  { id: "evidencias", label: "Evidências" },
  { id: "conclusao", label: "Conclusão" },
];

const Index = () => (
  <>
    <ProgressBar />
    <NavBar sections={sections} />
    <HeroSection />
    <ProblemSection />
    <TheorySection />
    <BenefitsSection />

    {/* --- INÍCIO: PÁGINA DE ALÍVIO CÔMICO (O EMBATE) --- */}
    <section id="embate" className="min-h-screen flex items-center justify-center py-24 relative overflow-hidden bg-slate-50/50">
      <div className="max-w-6xl mx-auto w-full px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 font-medium text-sm tracking-wider uppercase mb-4">
            O Embate
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800">Evolução vs. Custos de Transação</h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Lado Esquerdo: Contractor */}
          <div className="flex-1 text-center md:text-right animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-3xl font-bold text-slate-800 font-serif">Farok J. Contractor</h3>
            <p className="text-xl text-slate-500 italic mt-2">Rutgers University</p>
            <p className="text-sm font-bold text-emerald-600 mt-4 uppercase tracking-widest">Defensor da Curva em S</p>
          </div>
          
          {/* Centro: O GIF */}
          <div className="flex-none shrink-0 z-20 animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative p-3 bg-white rounded-2xl shadow-2xl border border-slate-100 transform hover:scale-105 transition-transform duration-500">
              <img src="/confronto.gif" alt="O embate" className="w-64 md:w-80 h-auto rounded-xl object-cover" />
            </div>
          </div>
          
          {/* Lado Direito: Hennart */}
          <div className="flex-1 text-center md:text-left animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-3xl font-bold text-slate-800 font-serif">Jean-François Hennart</h3>
            <p className="text-xl text-slate-500 italic mt-2">Tilburg University</p>
            <p className="text-sm font-bold text-red-600 mt-4 uppercase tracking-widest">Defensor da Teoria TCI</p>
          </div>
        </div>
      </div>
      
      {/* Linha decorativa de fundo */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent -z-10"></div>
    </section>
    {/* --- FIM DO ALÍVIO CÔMICO --- */}

    <DebateSection />
    <EvidenceSection />
    <ConclusionSection />
    <PresentationFooter />
  </>
);

export default Index;
