import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";
import QuoteBox from "./QuoteBox";

const conclusions = [
  {
    num: 1,
    title: "A Curva em S como Teoria Geral",
    text: "A Teoria de Três Estágios (Curva em S) atua como uma teoria geral capaz de reconciliar a aparente confusão de décadas de resultados empíricos contraditórios na literatura de Negócios Internacionais. As curvas lineares, em U ou em U-invertido descobertas pelos pesquisadores no passado não estão erradas; elas são, na verdade, apenas subconjuntos (amostras parciais) da mesma Curva Sigmoide geral. A forma detectada em cada estudo variou estatisticamente porque as amostras focaram em setores ou empresas que predominavam em estágios diferentes do seu processo de internacionalização.",
  },
  {
    num: 2,
    title: "Benefícios Líquidos na Faixa Intermediária",
    text: "Contractor defende que há um \"fato inescapável\": em virtualmente todos os mais de 100 estudos empíricos sobre a relação M/P (Multinacionalidade/Desempenho), existe um segmento de inclinação positiva embutido nos resultados. Isso comprova empiricamente a noção de que a expansão global produz ganhos líquidos reais ao longo de uma considerável faixa do Grau de Internacionalização (DOI). Na prática, essa extensa zona intermediária (o Estágio 2) representa o grande \"alvo estratégico e financeiro\" que justifica a existência das multinacionais.",
  },
  {
    num: 3,
    title: "O Contexto Importa (Implicação Gerencial)",
    text: "Embora o modelo de três estágios seja uma teoria geral, Contractor faz a ressalva de que \"o contexto ou a situação da firma, ou do setor, faz diferença\". A duração e a severidade do Estágio 1, bem como o exato ponto de inflexão em que se inicia a queda do Estágio 3, variam significativamente dependendo do setor da economia, do tamanho do mercado do país de origem e da experiência da firma. Sendo assim, o verdadeiro desafio gerencial para as empresas é conseguir atravessar o mais rápido possível os custos e efeitos negativos iniciais do Estágio 1, posicionar-se firmemente na zona de lucros decolantes do Estágio 2, e ter a sabedoria e os controles internos para frear a expansão antes de adentrar a zona subótima de excesso de internacionalização do Estágio 3.",
  },
];

const ConclusionSection = () => (
  <SectionWrapper id="conclusao" variant="alt">
    <SectionHeader
      number="06 — CONCLUSÕES"
      title="Implicações Teóricas e Gerenciais"
      lead='A resposta de Contractor (2007) à sua pergunta central, "Is International Business Good for Companies?", é um sim categórico — a expansão internacional produz efeitos líquidos positivos para as empresas ao longo de grande parte de sua trajetória, embora esse benefício não seja incondicional e dependa do estágio de evolução da firma'
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
      text="O modelo de três estágios representa a teoria geral da literatura de M/P. Nem todos os três estágios podem aparecer nos resultados empíricos em todos os estudos. Mesmo dentro de um mesmo estudo que apresente os resultados completos dos três estágios, a forma da curva em S pode variar por subamostra ou subsetor. [...] A teoria geral, no entanto, abrange todas as contingências."
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
