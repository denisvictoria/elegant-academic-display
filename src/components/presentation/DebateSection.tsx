import { useState, useMemo } from "react";
import { Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer, ComposedChart, ReferenceDot } from "recharts";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

const contractorPoints = [
  "Expansão é um processo orgânico de aprendizagem",
  "Ganhos superam perdas na longa fase intermediária",
  "Escala global é imperativa para amortizar ativos intangíveis"
];

const hennartPoints = [
  "Expansão é sintoma de eficiência, não a causa do lucro",
  "Hierarquia (filiais) só se justifica se o mercado livre falhar",
  "O declínio final é puramente um erro gerencial (Misfit)"
];

const DebateSection = () => {
  const [doi, setDoi] = useState(50);

  const chartData = useMemo(() => {
    const data = [];
    for (let i = 0; i <= 100; i += 2) {
      const baseLogistica = 75 / (1 + Math.exp(-0.15 * (i - 45)));
      const penalidadeInicial = Math.pow(Math.max(0, 25 - i), 1.5) * 0.15;
      const penalidadeFinal = Math.pow(Math.max(0, i - 75), 2) * 0.12;
      const cValue = Math.max(0, 15 + baseLogistica - penalidadeInicial - penalidadeFinal);
      const hValue = Math.max(0, 85 - Math.pow(i - 50, 2) * 0.03);
      data.push({ doi: i, contractor: cValue, hennart: hValue });
    }
    return data;
  }, []);

  const currentPoint = useMemo(() => {
    const idx = chartData.findIndex((d) => d.doi >= doi);
    return chartData[idx] || chartData[chartData.length - 1];
  }, [doi, chartData]);

  const stageInfo = useMemo(() => {
    if (doi < 25) return {
      content: (
        <>
          <strong className="text-contractor">Estágio 1 (Contractor):</strong> Desempenho em queda. Altos custos de aprendizagem e "desvantagem de ser estrangeiro".
          <br /><br />
          <strong className="text-hennart">Misfit (Hennart):</strong> Desajuste por sub-internacionalização. A empresa perde eficiência por não usar o mercado adequadamente.
        </>
      ),
      bgClass: "bg-hennart-bg border-stage1",
    };
    if (doi <= 75) return {
      content: (
        <>
          <strong className="text-contractor">Estágio 2 (Contractor):</strong> A fase de ouro! Economias de escala globais e conhecimento impulsionam os lucros.
          <br /><br />
          <strong className="text-hennart">Ponto Ótimo (Hennart):</strong> A governança está perfeitamente equilibrada e eficiente.
        </>
      ),
      bgClass: "bg-contractor-bg border-contractor",
    };
    return {
      content: (
        <>
          <strong className="text-contractor">Estágio 3 (Contractor):</strong> Excesso de expansão. Mercados distantes e complexidade destroem os lucros.
          <br /><br />
          <strong className="text-hennart">Misfit (Hennart):</strong> Desajuste severo por sobre-internacionalização. Abertura de filiais onde deveria ter terceirizado.
        </>
      ),
      bgClass: "bg-surface-warm border-stage3",
    };
  }, [doi]);

  return (
    <SectionWrapper id="debate" variant="dark">
      <SectionHeader
        number="04 — O DEBATE: CONTRACTOR VS. HENNART"
        title="Perspectiva Evolucionária vs. Teoria de Custos de Transação"
        lead="O embate foca em decidir se a internacionalização é um destino inevitável (Evolução) ou uma ferramenta restrita de eficiência (TCI)."
        dark
      />

      {/* Debate grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 items-start mb-8">
        <div className="bg-card rounded-lg p-6 shadow-academic border-t-4 border-contractor">
          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-border">
            <div className="w-10 h-10 rounded-full bg-contractor text-primary-foreground flex items-center justify-center font-bold">C</div>
            <div>
              <div className="font-semibold text-[0.95rem] text-foreground">Contractor</div>
              <div className="text-xs text-muted-foreground">Perspectiva Evolucionária</div>
            </div>
          </div>
          <ul className="space-y-0">
            {contractorPoints.map((p, i) => (
              <li key={i} className="py-2 border-b border-muted last:border-b-0 text-sm text-foreground">
                <span className="text-contractor font-bold mr-2">•</span>{p}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-11 h-11 rounded-full bg-gold text-surface-dark font-extrabold text-sm flex items-center justify-center self-center mx-auto shadow-md">
          VS
        </div>

        <div className="bg-card rounded-lg p-6 shadow-academic border-t-4 border-hennart">
          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-border">
            <div className="w-10 h-10 rounded-full bg-hennart text-primary-foreground flex items-center justify-center font-bold">H</div>
            <div>
              <div className="font-semibold text-[0.95rem] text-foreground">Hennart</div>
              <div className="text-xs text-muted-foreground">Teoria de Custos de Transação (TCI)</div>
            </div>
          </div>
          <ul className="space-y-0">
            {hennartPoints.map((p, i) => (
              <li key={i} className="py-2 border-b border-muted last:border-b-0 text-sm text-foreground">
                <span className="text-hennart font-bold mr-2">•</span>{p}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Interactive Chart */}
      <div className="bg-card rounded-lg p-6 shadow-academic-md">
        <h3 className="font-serif text-lg text-foreground mb-4 text-center">
          Simulador Interativo: Multinacionalidade × Desempenho
        </h3>

        <div className="h-[320px] mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={chartData} margin={{ top: 10, right: 20, bottom: 20, left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(210,10%,90%)" />
              <XAxis
                dataKey="doi"
                label={{ value: "Grau de Internacionalização (DOI %)", position: "insideBottom", offset: -10, style: { fontWeight: 600, fontSize: 12 } }}
                tickFormatter={(v) => v % 25 === 0 ? `${v}%` : ""}
                tick={{ fontSize: 11 }}
              />
              <YAxis
                domain={[0, 100]}
                label={{ value: "Desempenho Financeiro", angle: -90, position: "insideLeft", style: { fontWeight: 600, fontSize: 12 } }}
                tick={false}
              />
              <Legend verticalAlign="top" wrapperStyle={{ paddingBottom: 10 }} />
              <Line
                type="monotone"
                dataKey="contractor"
                name="Contractor (Curva em S)"
                stroke="hsl(155,32%,32%)"
                strokeWidth={3}
                dot={false}
                activeDot={false}
              />
              <Line
                type="monotone"
                dataKey="hennart"
                name="Hennart (Ponto Ótimo)"
                stroke="hsl(350,30%,32%)"
                strokeWidth={3}
                strokeDasharray="5 5"
                dot={false}
                activeDot={false}
              />
              <ReferenceDot
                x={currentPoint.doi}
                y={currentPoint.contractor}
                r={8}
                fill="hsl(32,40%,42%)"
                stroke="white"
                strokeWidth={3}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <div className="flex items-center gap-4 mb-6 bg-slate-50 p-3 rounded-lg border border-slate-200">
          <label className="text-sm font-semibold text-foreground whitespace-nowrap">DOI:</label>
          <input
            type="range"
            min={0}
            max={100}
            value={doi}
            onChange={(e) => setDoi(Number(e.target.value))}
            className="flex-1 accent-gold cursor-pointer"
          />
          <span className="font-mono text-lg font-bold text-gold min-w-[3ch] text-right">{doi}%</span>
        </div>

        <div className={`p-4 rounded-lg border-l-4 text-sm text-foreground leading-relaxed transition-colors duration-300 ${stageInfo.bgClass}`}>
          {stageInfo.content}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default DebateSection;
