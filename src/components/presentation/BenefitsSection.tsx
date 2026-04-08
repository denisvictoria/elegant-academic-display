import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";
import QuoteBox from "./QuoteBox";

const benefits = [
  {
    letter: "a",
    title: "Aquisição de conhecimento no exterior",
    text: "Absorção de ideias e inovações estrangeiras inacessíveis a rivais puramente domésticos. Foco na captação de conhecimento externo oriundo do mercado local.",
  },
  {
    letter: "b",
    title: 'Acesso ou "arbitragem" de insumos mais baratos',
    text: "Exploração de oportunidades globais de arbitragem, garantindo acesso flexível a mão de obra de menor custo e matérias-primas geograficamente vantajosas.",
  },
  {
    letter: "c",
    title: "Exploração de ativos específicos da firma",
    text: "A transferência de marcas e patentes confere vantagens monopolistas duradouras. O conhecimento internalizado é difícil de imitar (sticky), garantindo lucros superiores a longo prazo.",
  },
  {
    letter: "d",
    title: "Acúmulo de poder de mercado global",
    text: "Capacidade de impor padrões técnicos preferenciais, construir um imenso valor de marca global (brand equity) e obter lucros extraordinários pela dimensão da rede.",
  },
  {
    letter: "e",
    title: "Escala internacional (em nível de firma)",
    text: "Para a criação de ativos intangíveis (P&D e marketing), o custo por unidade cai continuamente. A expansão é uma necessidade matemática para amortizar despesas centralizadas massivas.",
  },
  {
    letter: "f",
    title: "Diversificação geográfica (Redução de riscos)",
    text: 'Proteção contra a volatilidade global através de: (1) ciclos económicos assíncronos; (2) fluxos de caixa num "cocktail de moedas"; (3) múltiplas fontes flexíveis de produção.',
  },
  {
    letter: "g",
    title: "Experiência de internacionalização",
    text: "Capacidade organizacional acumulada para replicar a empresa no exterior. Com a experiência prévia, abrir novas filiais torna-se um processo significativamente mais rápido e barato.",
    wide: true,
  },
];

const BenefitsSection = () => (
  <SectionWrapper id="beneficios" variant="alt">
    <SectionHeader
      number="03"
      subtitle="Estágio 2: Os Sete Benefícios"
      title="Os Vetores do Desempenho Positivo"
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
      {benefits.map((b) => (
        <div
          key={b.letter}
          className={`bg-card rounded-lg p-6 shadow-academic border border-border hover:shadow-academic-md transition-shadow ${
            b.wide ? "md:col-span-2" : ""
          }`}
        >
          <div className="flex items-start gap-4">
            <span className="flex-none w-9 h-9 rounded-full bg-contractor text-primary-foreground flex items-center justify-center font-mono text-sm font-semibold">
              {b.letter}
            </span>
            <div>
              <h4 className="text-lg font-serif font-semibold text-foreground mb-1">
                {b.title}
              </h4>
              <p className="text-muted-foreground text-[0.95rem] leading-relaxed">
                {b.text}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>

    <QuoteBox className="mt-12">
      "Com base nos sete benefícios supracitados, a empresa em processo de
      internacionalização, ao longo de uma considerável faixa intermediária do
      Estágio 2, desfruta dos benefícios líquidos da expansão internacional."
    </QuoteBox>
  </SectionWrapper>
);

export default BenefitsSection;
