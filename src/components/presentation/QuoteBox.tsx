interface QuoteBoxProps {
  text: string;
  author: string;
  source: string;
}

const QuoteBox = ({ text, author, source }: QuoteBoxProps) => (
  <div className="relative bg-gradient-to-br from-primary to-surface-dark rounded-lg p-7 text-primary-foreground my-7">
    <span className="absolute top-[-5px] left-3 font-serif text-[4rem] opacity-15 leading-none select-none">"</span>
    <p className="font-serif text-[1.1rem] italic leading-relaxed mb-3">{text}</p>
    <p className="font-semibold text-sm">{author}</p>
    <p className="opacity-70 text-xs">{source}</p>
  </div>
);

export default QuoteBox;
