interface SectionHeaderProps {
  number: string;
  title: string;
  lead: string;
  dark?: boolean;
}

const SectionHeader = ({ number, title, lead, dark = false }: SectionHeaderProps) => (
  <div className="mb-10">
    <div className={`font-mono text-xs font-semibold tracking-[2px] mb-2 ${dark ? "text-gold-light" : "text-gold"}`}>
      {number}
    </div>
    <h2 className={`font-serif text-[clamp(1.6rem,2.8vw,2.2rem)] mb-3 ${dark ? "text-primary-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    <p className={`text-[1.05rem] max-w-[750px] ${dark ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
      {lead}
    </p>
  </div>
);

export default SectionHeader;
