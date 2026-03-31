import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";
import QuoteBox from "./QuoteBox";

const ProblemSection = () => (
  <SectionWrapper id="problema" variant="alt">
    <SectionHeader
      number="01 — O PROBLEMA CENTRAL"
      title="A Meta-Hipótese do Campo de Negócios Internacionais"
      lead="Contractor (2007) inicia seu artigo destacando que todo o campo de estudos de Negócios Internacionais se baseia em uma meta-hipótese fundamental: a de que o aumento da internacionalização geralmente aumenta os lucros das empresas. No entanto, os resultados contraditórios das pesquisas empíricas recentes acabaram colocando essa premissa básica (e todo o subcampo de estudos) em xeque."
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
          O campo que estuda a relação entre Multinacionalidade e Desempenho (M/P) acumulou mais de{" "}
          <strong>100 estudos empíricos</strong> nas últimas três décadas. Revisões dessas pesquisas
          (como a de Ruigrok e Wagner, 2004) revelaram que não há um consenso sobre a forma dessa
          relação, gerando uma grande confusão acadêmica. Dependendo do estudo analisado, os
          resultados encontrados foram:
        </p>
        <ul className="ml-5 list-disc space-y-1">
          <li>Relações <strong>lineares positivas</strong></li>
          <li>Curvas em formato de <strong>U</strong></li>
          <li>Curvas em formato de <strong>U-invertido</strong></li>
        </ul>
        <p className="mt-3 text-muted-foreground text-sm">
          Esse aparente paradoxo fez com que muitos pesquisadores questionassem a validade das teorias
          de internacionalização, já que a literatura parecia não conseguir provar que expandir é sempre bom.
        </p>
      </div>

      <div className="bg-card rounded-lg p-7 shadow-academic border-l-4 border-contractor hover:shadow-academic-lg hover:-translate-y-0.5 transition-all duration-300">
        <span className="inline-block text-[0.7rem] font-semibold px-2 py-1 rounded bg-contractor-bg text-contractor uppercase tracking-wider mb-3">
          Contractor (2007)
        </span>
        <h3 className="font-serif text-[1.15rem] mb-3 flex items-center gap-2">
          🎯 Objetivos do Artigo
        </h3>
        <p className="mb-3">
          Para resolver essa confusão e defender a validade da expansão internacional, Contractor
          estabelece os seguintes objetivos:
        </p>
        <p className="mb-3">
          <strong>(1)</strong> Articular de forma mais precisa os fundamentos teóricos (<em>rationales</em>)
          que sustentam a relação M/P, examinando detalhadamente cada argumento sobre os custos e
          benefícios da expansão internacional.
        </p>
        <p className="mb-3">
          <strong>(2)</strong> Responder às críticas (especialmente as da Teoria dos Custos de Transação
          de Hennart) e debater os problemas de metodologia e operacionalização que causaram tantas
          falhas e contradições nos testes empíricos do passado.
        </p>
        <p>
          <strong>(3)</strong> Reconciliar os resultados empíricos aparentemente contraditórios através
          da teoria geral de três estágios (curva em S), demonstrando que os achados anteriores
          (lineares, em U ou U-invertido) não estão errados, mas são apenas partes isoladas
          (subconjuntos) de um processo evolutivo maior da empresa.
        </p>
      </div>
    </div>

    <QuoteBox
      text="Embora a expansão internacional de uma empresa nem sempre melhore necessariamente o seu desempenho (durante o estágio inicial de expansão internacional, ou em casos em que a empresa possa ter se internacionalizado excessivamente), na maior parte das vezes, ao longo da considerável faixa intermediária de expansão, a internacionalização gera benefícios líquidos positivos."
      author="Farok J. Contractor"
      source="Management International Review, 2007, p. 453 — Abstract"
    />
  </SectionWrapper>
);

export default ProblemSection;
