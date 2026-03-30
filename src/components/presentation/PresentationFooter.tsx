const PresentationFooter = () => (
  <footer className="bg-surface-dark text-primary-foreground py-10 px-8 text-center">
    <h3 className="font-serif text-base mb-3 text-primary-foreground">
      Is International Business Good for Companies?
    </h3>
    <div className="text-primary-foreground/60 text-[0.8rem] mb-5 leading-loose max-w-[800px] mx-auto">
      <p>
        <strong className="text-primary-foreground/80">Artigo Principal:</strong>
        <br />
        Contractor, F. J. (2007). Is International Business Good for Companies? The Evolutionary or
        Multi-Stage Theory of Internationalization vs. the Transaction Cost Perspective.{" "}
        <em>Management International Review</em>, 47(3), 453-475.
      </p>
      <p className="mt-3">
        <strong className="text-primary-foreground/80">Artigos Complementares (Contrapontos):</strong>
        <br />
        Hennart, J. F. (2007). The Theoretical Rationale for a Multinationality-Performance
        Relationship. <em>MIR</em>, 47(3), 423-452.
        <br />
        Berry, H. & Kaul, A. (2016). Replicating the Multinationality-Performance Relationship.{" "}
        <em>Strategic Management Journal</em>, 37, 2275-2290.
      </p>
    </div>
    <div className="flex justify-center gap-6 mb-5">
      {["Charles", "Denis", "Luis"].map((name) => (
        <span key={name} className="text-gold-light font-semibold text-sm">{name}</span>
      ))}
    </div>
    <p className="text-primary-foreground/40 text-xs pt-5 border-t border-primary-foreground/10">
      Apresentação desenvolvida para fins acadêmicos • 2026
    </p>
  </footer>
);

export default PresentationFooter;
