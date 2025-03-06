
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
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[30%] right-[15%] w-60 h-60 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-[40%] right-[20%] w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-[20%] left-[30%] w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}
