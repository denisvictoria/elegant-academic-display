import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";
import QuoteBox from "./QuoteBox";

const ProblemSection = () => (
  <SectionWrapper id="problema" variant="alt">
    <SectionHeader
      number="01 — O PROBLEMA CENTRAL"
      title="A Meta-Hipótese do Campo de Negócios Internacionais"
      lead="Contractor abre seu artigo questionando uma premissa fundamental: a expansão internacional realmente melhora o desempenho das empresas?"
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-card rounded-lg p-7 shadow-academic border-l-4 border-primary hover:shadow-academic-lg hover:-translate-y-0.5 transition-all duration-300">
        <span className="inline-block text-[0.7rem] font-semibold px-2 py-1 rounded bg-contractor-bg text-contractor uppercase tracking-wider mb-3">
          Contractor (2007)
        </span>
        <h3 className="font-serif text-[1.15rem] mb-3 flex items-center gap-2">
          📊 O Paradoxo dos 100+ Estudos
        </h3>
        <p className="mb-3">
          O campo de M/P (Multinationality/Performance) acumulou mais de{" "}
          <strong>100 estudos empíricos</strong> nas últimas três décadas. Ruigrok e Wagner (2004)
          citam mais de 180 referências, mas os 62 estudos analisados não revelam consenso sobre a
          forma da relação M/P.
        </p>
        <ul className="ml-5 list-disc space-y-1">
          <li>Alguns encontraram relações <strong>lineares positivas</strong></li>
          <li>Outros mostraram relações <strong>lineares negativas</strong></li>
          <li>Alguns identificaram curvas em <strong>formato de U</strong></li>
          <li>Outros encontraram <strong>U-invertido</strong></li>
        </ul>
      </div>

      <div className="bg-card rounded-lg p-7 shadow-academic border-l-4 border-contractor hover:shadow-academic-lg hover:-translate-y-0.5 transition-all duration-300">
        <span className="inline-block text-[0.7rem] font-semibold px-2 py-1 rounded bg-contractor-bg text-contractor uppercase tracking-wider mb-3">
          Contractor (2007)
        </span>
        <h3 className="font-serif text-[1.15rem] mb-3 flex items-center gap-2">
          🎯 Objetivos do Artigo
        </h3>
        <p className="mb-3">Contractor estabelece dois objetivos claros:</p>
        <p className="mb-3">
          <strong>(1)</strong> Articular, de forma mais precisa do que ocorreu no passado, os{" "}
          <em>rationales</em> teóricos subjacentes à relação M/P, examinando cada argumento sobre
          benefícios positivos ou negativos da internacionalização.
        </p>
        <p>
          <strong>(2)</strong> Responder às críticas de Hennart (2007) e discutir problemas de
          metodologia e operacionalização nos testes empíricos.
        </p>
      </div>
    </div>

    <QuoteBox
      text="While international expansion of a firm will not necessarily always improve performance (during the initial international expansion stage, or in cases where a firm may have over-internationalized), for the most part, over the considerable middle range of expansion, net positive benefits accrue from internationalization."
      author="Farok J. Contractor"
      source="Management International Review, 2007, p. 453 — Abstract"
    />
  </SectionWrapper>
);

export default ProblemSection;
