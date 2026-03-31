import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";
import QuoteBox from "./QuoteBox";

const benefits = [
  {
    letter: "a",
    title: "Aquisição de conhecimento no exterior",
    text: "A presença em várias nações aumenta a capacidade da empresa de absorver ideias e conhecimentos estrangeiros que rivais estritamente domésticos (ou menos internacionalizados) não conseguem acessar. É importante destacar que isso difere da \"experiência de internacionalização\"; este vetor refere-se à captação de conhecimento externo oriundo do mercado.",
  },
  {
    letter: "b",
    title: "Acesso ou \"arbitragem\" de insumos mais baratos",
    text: "Uma empresa presente em vários países está em uma posição muito melhor para encontrar e explorar oportunidades de arbitragem em comparação com concorrentes que atuam em apenas um ou poucos mercados. Isso inclui o acesso a mão de obra de menor custo ou a quaisquer outros insumos vantajosos ao redor do globo.",
  },
  {
    letter: "c",
    title: "Exploração de ativos específicos da firma",
    text: "A transferência de ativos (como marcas, patentes e rotinas) para mercados estrangeiros confere vantagens monopolistas de longa duração. Rebatendo a visão estritamente econômica de Hennart, Contractor argumenta que o conhecimento internalizado é aderente (sticky) e não é facilmente imitável, o que garante à multinacional uma vantagem contínua e lucros superiores de longo prazo, e não apenas lucros \"normais\" que se dissipam rapidamente pela concorrência.",
  },
  {
    letter: "d",
    title: "Acúmulo de poder de mercado global",
    text: "Ser grande e possuir ampla presença multinacional permite à empresa impor seus padrões e protocolos técnicos preferenciais, criar um imenso valor para sua marca global (brand equity) e, em alguns casos, até cartelizar a indústria para obter lucros extraordinários ou \"supernormais\".",
  },
  {
    letter: "e",
    title: "Escala internacional (em nível de firma)",
    text: "Para despesas centralizadas na criação de ativos intangíveis (como Pesquisa e Desenvolvimento ou marketing global), não existe uma Escala Mínima Eficiente (MES) limitante; o custo do intangível por unidade vendida atua como uma \"função continuamente decrescente\". Portanto, as empresas de alta tecnologia têm a necessidade imperativa de vender em múltiplos mercados estrangeiros para conseguir justificar, sustentar e amortizar esses enormes gastos centralizados.",
  },
  {
    letter: "f",
    title: "Diversificação geográfica (Redução de riscos)",
    text: "Neste contexto específico, a diversificação refere-se puramente à redução de riscos e da volatilidade para a empresa, e não ao aumento direto do lucro. Essa proteção ocorre por três vias: (1) a atuação em países com ciclos econômicos assíncronos; (2) a suavização da volatilidade através do recebimento de fluxos de caixa em um \"coquetel de moedas\" variadas; e (3) a maior flexibilidade estratégica e operacional para lidar com interrupções ao possuir múltiplas fontes de produção.",
  },
  {
    letter: "g",
    title: "Experiência de internacionalização",
    text: "Refere-se à capacidade organizacional, acumulada ao longo do tempo, de conseguir reproduzir a empresa em novos locais no exterior. Essa habilidade de replicação, conquistada por meio de extensa experiência internacional, permite que as sucessivas aberturas de filiais estrangeiras sejam feitas de forma muito mais rápida e barata, impulsionando os lucros da multinacional.",
    wide: true,
  },
];

const BenefitsSection = () => (
  <SectionWrapper id="beneficios" variant="alt">
    <SectionHeader
      number="03 — ESTÁGIO 2: OS SETE BENEFÍCIOS"
      title="Os Vetores do Desempenho Positivo (Estágio 2)"
      lead="Contractor (2007) detalha sete mecanismos específicos pelos quais, no Estágio 2 da expansão, os benefícios incrementais de adicionar novos mercados começam a superar os custos marginais"
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
      text="Com base nos sete benefícios supracitados, a empresa em processo de internacionalização, ao longo de uma considerável faixa intermediária do Estágio 2, desfruta dos benefícios líquidos da expansão internacional."
      author="Contractor (2007)"
      source="p. 458 — Síntese dos benefícios"
    />
  </SectionWrapper>
);

export default BenefitsSection;
