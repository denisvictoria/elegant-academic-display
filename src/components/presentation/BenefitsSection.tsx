import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";
import QuoteBox from "./QuoteBox";

const benefits = [
  {
    letter: "a",
    title: "Knowledge acquired from abroad",
    text: "A presença internacional aumenta a capacidade de captar conhecimentos que rivais domésticos não conseguem acessar (Kogut/Zander 1993, Ghoshal/Bartlett 1990). Diferente da experiência acumulada — refere-se a conhecimento externo.",
  },
  {
    letter: "b",
    title: "Accessing or \"arbitraging\" cheaper inputs",
    text: 'Empresa presente em mais países está "in a better position to find arbitrage opportunities than its competitors that are present in few, or only one". Inclui mão de obra e quaisquer outros insumos.',
  },
  {
    letter: "c",
    title: "Exploitation of firm-specific assets",
    text: 'Ativos intangíveis conferem "monopolistic advantage" (Hymer 1976). Contractor rebate Hennart: conhecimento internalizado é "sticky, not easily imitable" e confere vantagem duradoura, não apenas lucros "normais".',
  },
  {
    letter: "d",
    title: "Accumulation of market power",
    text: 'Ser grande e multinacional permite "establish preferred technical standards [...], create global brand equity, and even, in some cases, cartelize the industry to earn \'super-normal\' profits" (Kogut 1985).',
  },
  {
    letter: "e",
    title: "International scale (firm-level)",
    text: 'Para intangíveis centralizados (P&D, branding), não há MES — é "a continuously decreasing function". Empresas "must sell in multiple markets in order to justify and sustain the enormous centralized expenditures on R&D" (p. 463).',
  },
  {
    letter: "f",
    title: "Geographical diversification",
    text: 'Redução de risco via: (1) ciclos econômicos assíncronos; (2) volatilidade cambial suavizada com "cocktail of currencies"; (3) flexibilidade operacional com múltiplas fontes de produção.',
  },
  {
    letter: "g",
    title: "Internationalization experience",
    text: 'A capacidade organizacional acumulada de "reproduce the firm in foreign locations" de forma mais rápida e barata. "This replication ability, at lower cost and time, is gained through greater international experience".',
    wide: true,
  },
];

const BenefitsSection = () => (
  <SectionWrapper id="beneficios" variant="alt">
    <SectionHeader
      number="03 — ESTÁGIO 2: OS SETE BENEFÍCIOS"
      title="Os Vetores do Desempenho Positivo"
      lead='Contractor detalha sete mecanismos específicos pelos quais, no Estágio 2, "the following benefits begin to outweigh these incremental costs" (p. 455)'
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {benefits.map((b) => (
        <div
          key={b.letter}
          className={`bg-card p-5 rounded-lg shadow-academic flex gap-4 items-start ${b.wide ? "lg:col-span-2" : ""}`}
        >
          <div className="w-7 h-7 bg-contractor text-primary-foreground font-bold text-xs rounded flex items-center justify-center shrink-0">
            {b.letter}
          </div>
          <div>
            <h5 className="font-sans text-sm font-semibold mb-1 text-foreground">{b.title}</h5>
            <p className="text-[0.85rem] text-muted-foreground leading-relaxed">{b.text}</p>
          </div>
        </div>
      ))}
    </div>

    <QuoteBox
      text="Based on the seven foregoing benefits, the internationalizing firm, over a considerable range in middle Stage 2, enjoys the net benefits of international expansion."
      author="Contractor (2007)"
      source="p. 458 — Síntese dos benefícios"
    />
  </SectionWrapper>
);

export default BenefitsSection;
