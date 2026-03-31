import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";
import QuoteBox from "./QuoteBox";

const conclusions = [
  {
    num: 1,
    title: "A Curva em S como Teoria Geral",
    text: "Reconcilia décadas de resultados empíricos contraditórios. As curvas lineares, em U ou U-invertido do passado não estão erradas; são apenas subconjuntos (amostras parciais) da mesma Curva Sigmoide geral, capturados em fases diferentes de maturidade da internacionalização.",
  },
  {
    num: 2,
    title: "Benefícios Líquidos na Faixa Intermediária",
    text: "Um \"fato inescapável\": em mais de 100 estudos, existe sempre um segmento de inclinação positiva. Isso comprova empiricamente que a expansão global produz ganhos líquidos reais. A extensa zona intermediária (Estágio 2) é o verdadeiro \"alvo estratégico e financeiro\" das multinacionais.",
  },
  {
    num: 3,
    title: "O Contexto Importa (Implicação Gerencial)",
    text: "A duração de cada estágio varia conforme o setor e a experiência. O desafio gerencial é triplo: sobreviver rapidamente aos pesados custos iniciais (Estágio 1), posicionar-se na zona de lucro (Estágio 2) e ter a sabedoria para frear a expansão antes do declínio burocrático (Estágio 3).",
  },
];

const ConclusionSection = () => (
  <SectionWrapper id="conclusao" variant="alt">
    <SectionHeader
      number="06 — CONCLUSÕES"
      title="Implicações Teóricas e Gerenciais"
      lead='A resposta de Contractor (2007) à pergunta "Is International Business Good for Companies?" é um SIM categórico. A expansão gera efeitos líquidos positivos, mas este benefício não é incondicional — depende da precisão cirúrgica na navegação dos três estágios.'
    />

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {conclusions.map((c) => (
        <div key={c.num} className="bg-card rounded-lg p-6 text-center shadow-academic hover:shadow-academic-md transition-shadow duration-300">
          <div className="w-10 h-10 bg-gold text-surface-dark font-bold text-lg rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
            {c.num}
          </div>
          <h4 className="font-serif text-lg font-bold text-slate-800 mb-3">{c.title}</h4>
          <p className="text-[0.95rem] text-slate-600 leading-relaxed text-justify">{c.text}</p>
        </div>
      ))}
    </div>

    <QuoteBox
      text="O modelo de três estágios representa a teoria geral da literatura de M/P. Nem todos os três estágios podem aparecer nos resultados empíricos em todos os estudos. Mesmo dentro de um mesmo estudo que apresente os resultados completos dos três estágios, a forma da curva em S pode variar por subamostra ou subsetor. [...] A teoria geral, no entanto, abrange todas as contingências."
      author="Contractor (2007)"
      source="p. 468 — Síntese final"
    />

    <div className="mt-8 bg-slate-50 border-l-4 border-contractor rounded-r-lg p-6 shadow-sm">
      <strong className="text-contractor text-lg">🎯 Takeaway Final:</strong> 
      <p className="mt-2 text-slate-700 leading-relaxed">
        A perspectiva evolucionária (Multi-Stage) e a perspectiva TCI (Hennart) não precisam ser mutuamente exclusivas. A multinacionalidade "bem dosada" gera benefícios líquidos reais, mas exige que a liderança compreenda em qual estágio de evolução se encontra e saiba escolher, a cada passo, se é mais eficiente construir hierarquias (filiais próprias) ou utilizar o mercado livre.
      </p>
    </div>
  </SectionWrapper>
);

export default ConclusionSection;
