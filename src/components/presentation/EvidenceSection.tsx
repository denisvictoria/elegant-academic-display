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
      lead="Enquanto Contractor (2007) defende que a teoria de três estágios (Curva em S) é capaz de unificar e explicar a diversidade de resultados contraditórios do passado, estudos mais recentes, como o de Berry e Kaul (2016), desafiam a universalidade desse modelo ao levantar sérias questões de endogeneidade e falhas de replicação empírica."
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <div className="bg-card rounded-lg p-7 shadow-academic border-l-4 border-contractor mb-5 hover:shadow-academic-lg transition-all duration-300">
          <span className="inline-block text-[0.7rem] font-semibold px-2 py-1 rounded bg-contractor-bg text-contractor uppercase tracking-wider mb-3">
            Contractor (2007)
          </span>
          <h3 className="font-serif text-[1.15rem] mb-3">🔬 Contractor e a Lente Metodológica</h3>
          <p className="mb-3">
            Contractor aponta que o campo de estudos sobre a relação Multinacionalidade/Desempenho (M/P)
            acumulou resultados confusos em grande parte porque <em>"o empirismo atropelou o desenvolvimento
            teórico"</em>.
          </p>
          <p className="mb-3">
            Ele identifica um erro metodológico crucial na literatura: até o ano 2000 (com a exceção de
            Riahi-Belkaoui, 1998), nenhum estudo havia especificado um <strong>termo estatístico cúbico</strong>{" "}
            (de terceira ordem) para o Grau de Internacionalização (DOI). Sem inserir esse termo na equação,
            era matematicamente impossível que os pesquisadores encontrassem uma curva sigmoide (em S) nos dados.
          </p>
          <p>
            Para Contractor, as diferentes formas encontradas nas pesquisas anteriores não invalidam a teoria
            geral, elas apenas refletem <em>quais estágios da internacionalização predominavam</em> na amostra
            específica de cada estudo.
          </p>
        </div>

        <div className="overflow-hidden rounded-lg shadow-academic">
          <table className="w-full text-sm bg-card">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="p-3 text-left font-semibold text-xs">Estudo</th>
                <th className="p-3 text-left font-semibold text-xs">Forma</th>
                <th className="p-3 text-left font-semibold text-xs">Interpretação</th>
              </tr>
            </thead>
            <tbody>
              {studies.map((s, i) => (
                <tr key={i} className="border-b border-muted last:border-b-0">
                  <td className="p-3">{s.name}</td>
                  <td className="p-3">
                    <span className={`inline-block px-2 py-0.5 rounded text-[0.7rem] font-semibold ${s.badge}`}>
                      {s.shape}
                    </span>
                  </td>
                  <td className="p-3">{s.interp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <div className="bg-card rounded-lg p-7 shadow-academic border-l-4 border-berry mb-5 hover:shadow-academic-lg transition-all duration-300">
          <span className="inline-block text-[0.7rem] font-semibold px-2 py-1 rounded bg-surface-warm text-gold uppercase tracking-wider mb-3">
            Contraponto Empírico
          </span>
          <h3 className="font-serif text-[1.15rem] mb-3">⚠️ Berry & Kaul (2016): A Falha de Replicação</h3>
          <p className="mb-3">
            Apesar da grande aceitação da Curva em S, Berry e Kaul (2016) testaram a robustez dessa teoria
            tentando replicar os achados exatos de Lu e Beamish (2004). Utilizando um banco de dados maciço e
            longitudinal com <strong>2.023 multinacionais americanas</strong> no período de 1989 a 2007, eles
            falharam em replicar os resultados.
          </p>
          <p className="mb-3">
            Os autores concluíram de forma contundente: <em>não há nenhuma evidência de uma Curva em S para a
            amostra de multinacionais dos EUA</em>. Curiosamente, eles chegaram a encontrar uma relação marginal
            em formato de U ao isolarem apenas a subamostra de empresas de manufatura; contudo, esse efeito
            desapareceu completamente assim que os autores controlaram estatisticamente a{" "}
            <strong>endogeneidade</strong> da multinacionalidade.
          </p>
        </div>

        <div className="bg-surface-warm border-l-4 border-gold rounded-r-lg p-5 text-[0.95rem]">
          <strong>Implicação Metodológica: A Endogeneidade e a Escolha Estratégica</strong>
          <p className="mt-2">
            O achado de Berry e Kaul traz um peso enorme para a literatura: eles argumentam que a
            multinacionalidade não é uma força autônoma que "causa" o desempenho, mas sim uma{" "}
            <em>escolha estratégica</em>. Empresas bem-sucedidas e experientes escolhem sistematicamente o
            nível adequado de expansão global com base em suas capacidades, recursos e na estrutura do mercado.
          </p>
          <p className="mt-2">
            Portanto, ao não controlarem essa endogeneidade, os estudos tradicionais correm o risco de medir
            correlações falsas, interpretando como uma "vantagem da internacionalização" o que na verdade é o
            reflexo de um bom planejamento prévio da gestão. Isso dialoga diretamente com a ressalva que o
            próprio Contractor (2007) fez ao defender sua teoria, lembrando que a{" "}
            <em>"situação da firma ou o contexto do setor faz diferença"</em>, não existindo um determinismo
            universal aplicável a todos.
          </p>
        </div>
      </div>
    </div>

    <QuoteBox
      text="Um fato inescapável permanece: em praticamente todos os estudos empíricos de M/P, quer vejamos um formato em U, U-invertido ou em S, há embutido nos resultados um segmento de inclinação positiva ao longo de alguma parte da faixa do Grau de Internacionalização, sustentando assim empiricamente a noção de que a expansão internacional é 'boa' em alguma ou em grande parte dessa faixa."
      author="Contractor (2007)"
      source="p. 458 — Argumento central"
    />
  </SectionWrapper>
);

export default EvidenceSection;
