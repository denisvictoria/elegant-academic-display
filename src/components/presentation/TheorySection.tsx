import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";
import QuoteBox from "./QuoteBox";

const stages = [
  {
    num: 1,
    title: "Internacionalização Inicial",
    label: "Inclinação Negativa",
    color: "stage1",
    text: 'Nesta fase precoce de expansão, os custos incrementais superam os benefícios gerados. A empresa enfrenta a "desvantagem de ser estrangeira" (liability of foreignness), arcando com pesados custos de aprendizagem sobre novas culturas e instituições, além de adaptação local. Adicionalmente, a empresa possui altos custos iniciais de instalação (set-up) e despesas centrais que, por enquanto, só podem ser amortizados em uma base muito pequena de um ou poucos mercados estrangeiros, gerando um impacto negativo temporário no seu desempenho.',
  },
  {
    num: 2,
    title: "Internacionalização Intermediária",
    label: "Inclinação Positiva",
    color: "stage2",
    text: "Após superar a fase inicial, a empresa adentra uma longa faixa onde os benefícios incrementais de adicionar novos mercados superam os seus custos marginais. A empresa agora possui escala para rentabilizar a sua expansão e passa a colher sete ganhos (vetores de benefícios) detalhados por Contractor: (a) Aquisição de conhecimento; (b) Acesso e arbitragem; (c) Exploração de ativos específicos; (d) Poder de mercado global; (e) Economias de escala internacionais; (f) Diversificação geográfica; (g) Experiência de internacionalização.",
  },
  {
    num: 3,
    title: "Internacionalização Excessiva",
    label: "Nova Inclinação Negativa",
    color: "stage3",
    text: "Se a expansão continuar indefinidamente, a empresa ultrapassará o seu ponto ótimo de internacionalização e a lucratividade voltará a cair. A empresa esgota os seus mercados primários e passa a expandir sua rede para mercados cada vez mais periféricos, menores e culturalmente muito distantes. Como resultado, ocorre uma sobrecarga de informações e um aumento drástico nos custos de governança e coordenação global. Nesta terceira fase, o custo e a complexidade de manter essa vasta rede tornam-se novamente maiores do que as receitas geradas pelos novos mercados adicionados.",
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
      title={'A Teoria Geral de Três Estágios (Curva Sigmoide em "S")'}
      lead="Contractor (2007) argumenta que a teoria de três estágios, recentemente proposta na literatura por diversos autores, funciona como um modelo evolutivo e dinâmico capaz de reconciliar os resultados empíricos aparentemente contraditórios dos últimos 30 anos de pesquisa no campo de negócios internacionais"
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
      <strong>💡 Reconciliação dos Resultados Contraditórios:</strong> Contractor demonstra que as
      diferentes curvas encontradas nos mais de 100 estudos anteriores (lineares, em U, ou em
      U-invertido) não estão erradas; elas são apenas subconjuntos (amostras parciais) da mesma curva
      sigmoide geral.
      <br /><br />
      <strong>Curva em U:</strong> Ocorre quando a amostra da pesquisa capta apenas empresas nos
      Estágios 1 e 2. Isso é comum em setores mais jovens ou amostras de empresas de países
      emergentes, onde quase nenhuma corporação atingiu ainda o estágio de "excesso de
      internacionalização".
      <br /><br />
      <strong>Curva em U-invertido:</strong> Ocorre quando os Estágios 2 e 3 predominam na amostra.
      Nesses casos, o ajuste estatístico omite o Estágio 1, possivelmente porque no setor pesquisado
      as empresas conseguem ultrapassar os custos e barreiras de aprendizagem inicial de forma muito
      rápida e fácil. A forma detectada em cada estudo acadêmico, portanto, depende inteiramente da
      maturidade do setor e das características da amostra analisada.
    </div>

    <QuoteBox
      text="Os resultados de mais de cem estudos empíricos ao longo dos últimos 30 anos parecem, sob um exame superficial, ser contraditórios, mas podem ser reconciliados pela teoria geral de três estágios ou em formato de S recentemente proposta."
      author="Contractor (2007)"
      source="p. 453 — Key Results"
    />
  </SectionWrapper>
);

export default TheorySection;
