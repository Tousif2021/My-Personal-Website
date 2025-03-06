
export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10">
        <pre className="text-primary font-mono text-[8px] leading-tight">
          {Array(30).fill(0).map(() => 
            Math.random() > 0.5 ? '10101001001010101001' : '01001010100101001010'
          ).join('\n')}
        </pre>
      </div>
    </div>
  );
}
