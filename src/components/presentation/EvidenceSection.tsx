import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";
import QuoteBox from "./QuoteBox";

const studies = [
  { name: "Geringer et al. (1989)", shape: "U-Invertido", badge: "bg-muted text-muted-foreground", interp: "Estágios 2 + 3" },
  { name: "Qian (1998)", shape: "U", badge: "bg-muted text-muted-foreground", interp: "Estágios 1 + 2" },
  { name: "Contractor et al. (2003)", shape: "Curva em S", badge: "bg-contractor-bg text-contractor", interp: "3 Estágios" },
  { name: "Lu & Beamish (2004)", shape: "Curva em S", badge: "bg-contractor-bg text-contractor", interp: "3 Estágios (Japão)" },
];

const EvidenceSection = () => (
  <SectionWrapper id="evidencias">
    <SectionHeader
      number="05 — EVIDÊNCIAS EMPÍRICAS E METODOLOGIA"
      title="A Curva em S como Teoria Geral — e os Desafios de Replicação"
      lead="Contractor (2007) defende a Curva em S como modelo unificador. No entanto, estudos recentes como o de Berry e Kaul (2016) desafiam essa universalidade, apontando graves falhas de replicação e problemas de endogeneidade."
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Coluna Esquerda: Contractor */}
      <div>
        <div className="bg-card rounded-lg p-7 shadow-academic border-l-4 border-contractor mb-5 hover:shadow-academic-lg transition-all duration-300">
          <span className="inline-block text-[0.7rem] font-semibold px-2 py-1 rounded bg-contractor-bg text-contractor uppercase tracking-wider mb-3">
            Contractor (2007)
          </span>
          <h3 className="font-serif text-[1.15rem] mb-4 text-slate-800">🔬 A Lente Metodológica</h3>
          <ul className="space-y-3 text-slate-600 list-none pl-0">
            <li className="flex items-start">
              <span className="text-contractor mr-2 font-bold">•</span>
              <span><strong>O empirismo atropelou a teoria:</strong> A literatura acumulou resultados confusos por falhas matemáticas estruturais.</span>
            </li>
            <li className="flex items-start">
              <span className="text-contractor mr-2 font-bold">•</span>
              <span><strong>A Falta do Termo Cúbico:</strong> Até o ano 2000, os estudos não incluíam o "termo estatístico de 3ª ordem" na equação. Sem ele, era matematicamente impossível encontrar uma curva em S.</span>
            </li>
            <li className="flex items-start">
              <span className="text-contractor mr-2 font-bold">•</span>
              <span><strong>Subconjuntos da mesma curva:</strong> As formas em U ou U-invertido do passado não estão erradas; elas apenas capturaram fragmentos (estágios específicos) da jornada sigmoide total.</span>
            </li>
          </ul>
        </div>

        <div className="overflow-hidden rounded-lg shadow-academic">
          <table className="w-full text-sm bg-card">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="p-3 text-left font-semibold text-xs">Estudo</th>
                <th className="p-3 text-left font-semibold text-xs">Forma</th>
                <th className="p-3 text-left font-semibold text-xs">Interpretação</th>
              </tr>
            </thead>
            <tbody>
              {studies.map((s, i) => (
                <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-3 font-medium text-slate-700">{s.name}</td>
                  <td className="p-3">
                    <span className={`inline-block px-2 py-0.5 rounded text-[0.7rem] font-bold tracking-wide ${s.badge}`}>
                      {s.shape}
                    </span>
                  </td>
                  <td className="p-3 text-slate-600">{s.interp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Coluna Direita: O Contraponto */}
      <div>
        <div className="bg-card rounded-lg p-7 shadow-academic border-l-4 border-amber-500 mb-5 hover:shadow-academic-lg transition-all duration-300">
          <span className="inline-block text-[0.7rem] font-semibold px-2 py-1 rounded bg-amber-50 text-amber-600 uppercase tracking-wider mb-3">
            Contraponto Empírico
          </span>
          <h3 className="font-serif text-[1.15rem] mb-4 text-slate-800">⚠️ Berry & Kaul (2016): A Falha de Replicação</h3>
          <ul className="space-y-3 text-slate-600 list-none pl-0">
            <li className="flex items-start">
              <span className="text-amber-500 mr-2 font-bold">•</span>
              <span><strong>O Teste de Robustez:</strong> Tentaram replicar os achados exatos de Lu e Beamish (2004) utilizando 2.023 multinacionais americanas (1989-2007).</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2 font-bold">•</span>
              <span><strong>O Resultado:</strong> Falharam em replicar. <em>Não há evidência de uma Curva em S</em> para a amostra dos EUA.</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2 font-bold">•</span>
              <span><strong>O Efeito Ilusório:</strong> Encontraram uma fraca relação em U na manufatura, mas ela desapareceu completamente ao controlarem a endogeneidade da firma.</span>
            </li>
          </ul>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-6 shadow-sm">
          <h4 className="font-bold text-amber-900 mb-2">A Implicação da "Endogeneidade"</h4>
          <p className="text-[0.95rem] text-amber-800/80 mb-3 leading-relaxed">
            A expansão <strong>não é a causa</strong> do sucesso. A expansão é uma <em>escolha estratégica</em>.
          </p>
          <p className="text-[0.95rem] text-amber-800/80 leading-relaxed">
            Empresas já eficientes e bem geridas são as que escolhem (e conseguem) globalizar-se. Ao não isolar matematicamente este fator prévio de excelência, os estudos do passado mediram <strong>correlações falsas</strong>, atribuindo o lucro à internacionalização, quando o mérito era da governança interna prévia.
          </p>
        </div>
      </div>
    </div>

    <QuoteBox
      text="Um fato inescapável permanece: em praticamente todos os estudos empíricos de M/P, quer vejamos um formato em U, U-invertido ou em S, há embutido nos resultados um segmento de inclinação positiva [...] sustentando assim empiricamente a noção de que a expansão internacional é 'boa' em alguma ou em grande parte dessa faixa."
      author="Contractor (2007)"
      source="p. 458 — Argumento central"
    />
  </SectionWrapper>
);

export default EvidenceSection;
