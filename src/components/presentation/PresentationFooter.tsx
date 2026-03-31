const PresentationFooter = () => (
  <footer className="bg-surface-dark text-primary-foreground py-16 px-8 text-center relative overflow-hidden">
    {/* Mensagem de encerramento */}
    <h2 className="font-serif text-3xl font-bold text-gold-light mb-2">
      Obrigado!
    </h2>
    <h3 className="font-serif text-lg mb-8 text-primary-foreground/90">
      Is International Business Good for Companies?
    </h3>

    {/* Bloco de Referências Estilo Bibliografia */}
    <div className="text-primary-foreground/70 text-[0.85rem] mb-10 leading-relaxed max-w-[800px] mx-auto text-left bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
      <div className="mb-4">
        <strong className="text-gold uppercase tracking-wider text-xs block mb-1">Artigo Principal:</strong>
        <p>Contractor, F. J. (2007). Is International Business Good for Companies? The Evolutionary or Multi-Stage Theory of Internationalization vs. the Transaction Cost Perspective. <em>Management International Review</em>, 47(3), 453-475.</p>
      </div>
      
      <div className="w-full h-px bg-white/10 my-4" />
      
      <div>
        <strong className="text-gold uppercase tracking-wider text-xs block mb-1">Artigos Complementares (Contrapontos):</strong>
        <p className="mb-2">Hennart, J. F. (2007). The Theoretical Rationale for a Multinationality-Performance Relationship. <em>Management International Review</em>, 47(3), 423-452.</p>
        <p>Berry, H. & Kaul, A. (2016). Replicating the Multinationality-Performance Relationship. <em>Strategic Management Journal</em>, 37, 2275-2290.</p>
      </div>
    </div>

    {/* Apresentadores */}
    <div className="flex justify-center gap-6 mb-8 flex-wrap">
      {["Charles", "Denis", "Luis"].map((name) => (
        <span key={name} className="text-primary-foreground font-medium text-sm bg-white/10 hover:bg-white/20 transition-colors px-5 py-2 rounded-full border border-white/10">
          {name}
        </span>
      ))}
    </div>

    {/* Créditos Finais */}
    <p className="text-primary-foreground/40 text-xs pt-6 border-t border-primary-foreground/10 max-w-md mx-auto">
      Apresentação desenvolvida para fins acadêmicos • 2026
    </p>
  </footer>
);

export default PresentationFooter;
