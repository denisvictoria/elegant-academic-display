import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";
import QuoteBox from "./QuoteBox";

const stages = [
  {
    num: 1,
    title: "Internacionalização Inicial",
    label: "Inclinação Negativa",
    color: "stage1",
    text: "Custos superam os benefícios. A empresa sofre com a 'desvantagem de ser estrangeira' (liability of foreignness). Altos custos de aprendizagem, adaptação local e instalação inicial diluídos em poucos mercados.",
  },
  {
    num: 2,
    title: "Internacionalização Intermediária",
    label: "Inclinação Positiva",
    color: "stage2",
    text: "Fase de ouro. Benefícios incrementais superam os custos. A empresa ganha escala para rentabilizar a expansão e colhe os 7 benefícios detalhados por Contractor (ex: aquisição de conhecimento, economias de escala, diversificação).",
  },
  {
    num: 3,
    title: "Internacionalização Excessiva",
    label: "Nova Inclinação Negativa",
    color: "stage3",
    text: "Ultrapassa o ponto ótimo. Expansão para mercados periféricos e distantes gera sobrecarga de informações. Os custos de governança e coordenação global tornam-se maiores que as novas receitas.",
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
      lead="Contractor (2007) propõe a teoria de três estágios como um modelo evolutivo e dinâmico, capaz de reconciliar 30 anos de resultados empíricos aparentemente contraditórios."
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
      <strong>💡 Reconciliação dos Resultados:</strong> As diferentes curvas encontradas em estudos anteriores (lineares, U, U-invertido) são apenas amostras parciais da mesma curva sigmoide geral.
      <br /><br />
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Curva em U:</strong> Amostra foca nos Estágios 1 e 2 (comum em setores jovens ou países emergentes).</li>
        <li><strong>Curva em U-invertido:</strong> Amostra foca nos Estágios 2 e 3 (empresas ultrapassaram rapidamente os custos iniciais do Estágio 1).</li>
      </ul>
      <p className="mt-2">A forma detectada depende da maturidade do setor e da amostra analisada.</p>
    </div>

    <QuoteBox
      text="Os resultados de mais de cem estudos empíricos ao longo dos últimos 30 anos parecem, sob um exame superficial, ser contraditórios, mas podem ser reconciliados pela teoria geral de três estágios ou em formato de S recentemente proposta."
      author="Contractor (2007)"
      source="p. 453 — Key Results"
    />
  </SectionWrapper>
);

export default TheorySection;
