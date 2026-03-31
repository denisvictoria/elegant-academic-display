import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";
import QuoteBox from "./QuoteBox";

const ProblemSection = () => (
  <SectionWrapper id="problema" variant="alt">
    <SectionHeader
      number="01 — O PROBLEMA CENTRAL"
      title="A Meta-Hipótese do Campo de Negócios Internacionais"
      lead="A premissa fundamental de que 'expandir fronteiras aumenta lucros' entrou em xeque após décadas de pesquisas empíricas revelarem resultados matematicamente contraditórios."
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Coluna 1: O Paradoxo */}
      <div className="bg-card rounded-lg p-7 shadow-academic border-l-4 border-primary hover:shadow-academic-lg hover:-translate-y-0.5 transition-all duration-300">
        <span className="inline-block text-[0.7rem] font-semibold px-2 py-1 rounded bg-slate-100 text-primary uppercase tracking-wider mb-3">
          O Paradoxo Empírico
        </span>
        <h3 className="font-serif text-[1.15rem] mb-4 text-slate-800 flex items-center gap-2">
          📊 Mais de 100 Estudos Confusos
        </h3>
        <p className="mb-4 text-slate-600 text-[0.95rem]">
          A literatura sobre Multinacionalidade e Desempenho (M/P) acumulou três décadas de pesquisas sem consenso. A relação entre expandir e lucrar foi medida como:
        </p>
        <ul className="space-y-3 text-slate-700 list-none pl-0 mb-4">
          <li className="flex items-center">
            <span className="text-primary mr-2 font-bold text-lg">↗️</span>
            <span>Relações estritamente <strong>Lineares Positivas</strong></span>
          </li>
          <li className="flex items-center">
            <span className="text-primary mr-2 font-bold text-lg">📉</span>
            <span>Curvas em formato de <strong>U</strong> (queda, depois alta)</span>
          </li>
          <li className="flex items-center">
            <span className="text-primary mr-2 font-bold text-lg">📈</span>
            <span>Curvas em <strong>U-invertido</strong> (alta, depois queda)</span>
          </li>
        </ul>
        <p className="text-[0.85rem] text-slate-500 italic border-t border-slate-100 pt-3">
          A literatura parecia incapaz de provar, de forma universal, se a internacionalização era realmente vantajosa para as empresas.
        </p>
      </div>

      {/* Coluna 2: A Solução/Objetivos */}
      <div className="bg-card rounded-lg p-7 shadow-academic border-l-4 border-contractor hover:shadow-academic-lg hover:-translate-y-0.5 transition-all duration-300">
        <span className="inline-block text-[0.7rem] font-semibold px-2 py-1 rounded bg-contractor-bg text-contractor uppercase tracking-wider mb-3">
          Contractor (2007)
        </span>
        <h3 className="font-serif text-[1.15rem] mb-4 text-slate-800 flex items-center gap-2">
          🎯 Os Objetivos do Artigo
        </h3>
        <p className="mb-4 text-slate-600 text-[0.95rem]">
          Para resgatar a validade teórica da expansão global, o autor propõe três missões:
        </p>
        <ul className="space-y-4 text-slate-700 list-none pl-0">
          <li className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-contractor-bg text-contractor flex items-center justify-center font-bold text-xs mr-3 mt-0.5">1</div>
            <span><strong>Articular Fundamentos:</strong> Mapear exaustivamente os custos e benefícios reais da atuação no exterior.</span>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-contractor-bg text-contractor flex items-center justify-center font-bold text-xs mr-3 mt-0.5">2</div>
            <span><strong>Rebater a TCI:</strong> Responder às críticas da Teoria dos Custos de Transação (Hennart) sobre falhas de governança.</span>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-contractor-bg text-contractor flex items-center justify-center font-bold text-xs mr-3 mt-0.5">3</div>
            <span><strong>Reconciliar a Literatura:</strong> Provar que os estudos confusos do passado são apenas "fragmentos" de uma teoria evolutiva unificada em formato de <strong>Curva Sigmoide (S)</strong>.</span>
          </li>
        </ul>
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
