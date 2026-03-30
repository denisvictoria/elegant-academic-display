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
      title="A Curva em S como Teoria Geral — e Seus Desafios"
      lead="Contractor discute como a teoria multi-stage explica a diversidade de resultados, enquanto estudos posteriores como Berry & Kaul (2016) levantam questões de replicação"
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <div className="bg-card rounded-lg p-7 shadow-academic border-l-4 border-contractor mb-5 hover:shadow-academic-lg transition-all duration-300">
          <span className="inline-block text-[0.7rem] font-semibold px-2 py-1 rounded bg-contractor-bg text-contractor uppercase tracking-wider mb-3">
            Contractor (2007)
          </span>
          <h3 className="font-serif text-[1.15rem] mb-3">🔬 Operacionalização e Metodologia</h3>
          <p className="mb-3">
            Contractor reconhece: <em>"The M/P field has been particularly vulnerable to the charge
            of decidedly mixed results [...] partly because empiricism ran ahead of theory development"</em> (p. 465).
          </p>
          <p className="mb-3">
            Até 2000, nenhum estudo (exceto Riahi-Belkaoui 1998) especificou um <strong>termo cúbico</strong> para
            DOI. <em>"Hence it was impossible to find a sigmoid curve in most studies"</em>.
          </p>
          <p>Diferentes formas (U, U-invertido, linear) refletem <em>quais estágios predominam</em> em cada amostra.</p>
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
          <h3 className="font-serif text-[1.15rem] mb-3">⚠️ Berry & Kaul (2016): Falha na Replicação</h3>
          <p className="mb-3">
            Em estudo posterior, Berry & Kaul tentaram replicar Lu & Beamish (2004) com{" "}
            <strong>2.023 multinacionais americanas</strong> (1989-2007).
          </p>
          <p className="mb-3">
            <em>"Our empirical results fail to replicate the relationship between multinationality
            and performance found by Lu and Beamish. We see no evidence for an S-curve in our sample"</em>.
          </p>
          <p>
            O efeito U encontrado na subsamostra de manufatura <strong>desaparece</strong> quando se controla
            pela <strong>endogeneidade</strong> da multinacionalidade.
          </p>
        </div>

        <div className="bg-surface-warm border-l-4 border-gold rounded-r-lg p-5 text-[0.95rem]">
          <strong>Implicação Metodológica:</strong> Berry & Kaul sugerem que empresas já bem-sucedidas{" "}
          <em>escolhem</em> se internacionalizar — o que confunde a relação causal. Contractor (2007) já
          havia notado: <em>"the context or situation of the firm, or sector, does make a difference"</em>.
        </div>
      </div>
    </div>

    <QuoteBox
      text="One inescapable fact remains: In virtually all empirical M/P studies, whether we see a U, inverted-U, or S-shape, there is embedded in the results a positively sloped leg over some part of the Degree of Internationalization range, thus empirically supporting the notion that international expansion is 'good' over some or much of the range."
      author="Contractor (2007)"
      source="p. 458 — Argumento central"
    />
  </SectionWrapper>
);

export default EvidenceSection;
