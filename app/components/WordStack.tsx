type Props = {
  text: string;
  className?: string;
  delayBase?: number;
};

export default function WordStack({ text, className = "", delayBase = 0 }: Props) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="word-stack">
          <span
            className="word"
            style={{ ["--i" as string]: i + delayBase } as React.CSSProperties}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </span>
  );
}
