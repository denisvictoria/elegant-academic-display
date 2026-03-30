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
    <DebateSection />
    <EvidenceSection />
    <ConclusionSection />
    <PresentationFooter />
  </>
);

export default Index;
