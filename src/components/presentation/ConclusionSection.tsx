import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";
import QuoteBox from "./QuoteBox";

const conclusions = [
  {
    num: 1,
    title: "A Curva em S como Teoria Geral",
    text: "A teoria multi-stage reconcilia décadas de resultados empíricos. Formas lineares, U e U-invertido são subconjuntos da curva sigmoide, dependendo de quais estágios predominam na amostra.",
  },
  {
    num: 2,
    title: 'Benefícios no "Middle Range"',
    text: "Em virtualmente todos os estudos M/P, existe uma inclinação positiva em alguma parte do espectro de DOI — apoiando empiricamente que a expansão é \"boa\" sobre parte considerável do range.",
  },
  {
    num: 3,
    title: "Contexto Importa",
    text: '"The context or situation of the firm, or sector, does make a difference". A duração do Estágio 1 e o ponto de inflexão do Estágio 3 variam por setor, país de origem e características da firma.',
  },
];

const ConclusionSection = () => (
  <SectionWrapper id="conclusao" variant="alt">
    <SectionHeader
      number="06 — CONCLUSÕES"
      title="Implicações Teóricas e Práticas"
      lead='A resposta de Contractor à pergunta central: "Is International Business Good for Companies?" é sim, mas com nuances importantes'
    />

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {conclusions.map((c) => (
        <div key={c.num} className="bg-card rounded-lg p-6 text-center shadow-academic">
          <div className="w-10 h-10 bg-gold text-surface-dark font-bold text-lg rounded-full flex items-center justify-center mx-auto mb-4">
            {c.num}
          </div>
          <h4 className="font-serif text-base mb-2">{c.title}</h4>
          <p className="text-sm text-muted-foreground">{c.text}</p>
        </div>
      ))}
    </div>

    <QuoteBox
      text="The 3-stage model represents the general theory of the M/P literature. All three stages may not show up in empirical results in all studies. Even within the same study showing complete 3-stage results, the shape of the S-curve may vary by sub-sample, or sub-sector. [...] The general theory, however, covers all contingencies."
      author="Contractor (2007)"
      source="p. 468 — Síntese final"
    />

    <div className="mt-6 bg-contractor-bg border-l-4 border-contractor rounded-r-lg p-5 text-[0.95rem]">
      <strong>🎯 Takeaway Final:</strong> Contractor defende que a perspectiva evolucionária
      (Multi-Stage) e a perspectiva TCI (Hennart) não são mutuamente exclusivas. A multinacionalidade
      "bem dosada" gera benefícios líquidos — mas requer entender em qual estágio a firma se encontra
      e escolher a estrutura de governança adequada (hierarquia vs. mercado) para cada contexto.
    </div>
  </SectionWrapper>
);

export default ConclusionSection;
