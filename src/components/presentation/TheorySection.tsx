import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";
import QuoteBox from "./QuoteBox";

const stages = [
  {
    num: 1,
    title: "Internacionalização Inicial",
    label: "Inclinação Negativa",
    color: "stage1",
    text: 'A empresa enfrenta a "liability of foreignness" (Zaheer/Mosakowski, 1997): custos significativos de aprendizagem sobre cultura e instituições estrangeiras, além de custos de adaptação local e legitimação. Os custos superam os benefícios.',
  },
  {
    num: 2,
    title: "Internacionalização Intermediária",
    label: "Inclinação Positiva",
    color: "stage2",
    text: '"For most of the range [...] incremental benefits outweigh the incremental costs". A empresa colhe sete vetores de benefícios (detalhados a seguir) que superam os custos marginais de cada nova operação.',
  },
  {
    num: 3,
    title: "Internacionalização Excessiva",
    label: "Nova Inclinação Negativa",
    color: "stage3",
    text: 'A empresa expande para mercados "smaller, peripheral, and culturally distant". Os custos de governança e coordenação disparam. Contractor cita Hennart: "governance costs rise dramatically with cultural and geographical distance".',
  },
];

const colorMap: Record<string, { border: string; badge: string; label: string }> = {
  stage1: { border: "border-stage1", badge: "bg-stage1", label: "text-stage1" },
  stage2: { border: "border-stage2", badge: "bg-stage2", label: "text-stage2" },
  stage3: { border: "border-stage3", badge: "bg-stage3", label: "text-stage3" },
};

const TheorySection = () => (
  <SectionWrapper id="teoria">
    <SectionHeader
      number="02 — A TEORIA MULTI-STAGE"
      title="A Curva Sigmoide (S-Shaped) de Três Estágios"
      lead="Contractor argumenta que a teoria de três estágios, recentemente proposta (Contractor/Kundu/Hsu 2003; Lu/Beamish 2004; Thomas/Eden 2004), pode reconciliar os resultados aparentemente contraditórios"
    />

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {stages.map((s) => (
        <div
          key={s.num}
          className={`bg-card rounded-lg p-6 shadow-academic relative overflow-hidden border-t-4 ${colorMap[s.color].border}`}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mb-3 ${colorMap[s.color].badge}`}
          >
            {s.num}
          </div>
          <h4 className="font-serif text-base mb-1">{s.title}</h4>
          <div className={`text-[0.7rem] uppercase tracking-wider font-semibold mb-3 ${colorMap[s.color].label}`}>
            {s.label}
          </div>
          <p className="text-[0.9rem] text-muted-foreground">{s.text}</p>
        </div>
      ))}
    </div>

    <div className="mt-7 bg-contractor-bg border-l-4 border-contractor rounded-r-lg p-5 text-[0.95rem]">
      <strong>💡 Reconciliação dos Resultados Contraditórios:</strong> Contractor argumenta que
      resultados lineares, em U ou U-invertido são <strong>subconjuntos</strong> da curva sigmoide
      geral. Uma curva em U captura Estágios 1+2 (setores jovens com poucas empresas
      over-internationalized). Um U-invertido captura Estágios 2+3 (setores onde a passagem pelo
      Estágio 1 é rápida). A forma depende de <em>quais estágios predominam na amostra</em>.
    </div>

    <QuoteBox
      text="The results of over one hundred empirical studies over the past 30 years appear, on superficial examination, to be contradictory, but can be reconciled by the recently proposed 3-stage or S-shaped general theory."
      author="Contractor (2007)"
      source="p. 453 — Key Results"
    />
  </SectionWrapper>
);

export default TheorySection;
