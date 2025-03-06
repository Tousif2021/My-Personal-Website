
import { useEffect, useState } from 'react';

export function MatrixBackground() {
  const [columns, setColumns] = useState<JSX.Element[]>([]);

  useEffect(() => {
    // Only create the matrix effect if we're not in reduced motion mode
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const createMatrixColumns = () => {
      const numberOfColumns = Math.floor(window.innerWidth / 18); // Slightly more dense
      const newColumns: JSX.Element[] = [];

      for (let i = 0; i < numberOfColumns; i++) {
        // Mix of programming syntax chars, binary, and special characters
        const chars = "01{}[]()<>/\\|;:,.+-=*_%&#@!abcdefABCDEF$λπΣ";
        
        const characters = Array.from({ length: Math.floor(Math.random() * 25) + 8 }, () => 
          chars.charAt(Math.floor(Math.random() * chars.length))
        ).join('');

        const left = `${i * 18 + Math.random() * 10}px`;
        const animationDuration = `${Math.random() * 20 + 15}s`; // Slower falls
        const animationDelay = `${Math.random() * 8}s`;
        const opacity = Math.random() * 0.5 + 0.1; // Slightly more visible
        const fontSize = `${Math.floor(Math.random() * 4) + 10}px`; // Varying sizes

        newColumns.push(
          <div 
            key={i}
            className="matrix-column"
            style={{
              left,
              fontSize,
              '--fall-duration': animationDuration,
              '--fall-delay': animationDelay,
              opacity
            } as React.CSSProperties}
          >
            {characters}
          </div>
        );
      }

      // Add a few highlighted "special" columns with binary or hex
      for (let i = 0; i < 5; i++) {
        const isBinary = Math.random() > 0.5;
        const chars = isBinary ? "01" : "0123456789ABCDEF";
        
        const specialChars = Array.from({ length: Math.floor(Math.random() * 40) + 20 }, () => 
          chars.charAt(Math.floor(Math.random() * chars.length))
        ).join('');

        const left = `${Math.random() * window.innerWidth}px`;
        const animationDuration = `${Math.random() * 25 + 20}s`; // Even slower
        const animationDelay = `${Math.random() * 10}s`;
        const opacity = 0.7; // More visible
        const specialColor = isBinary ? '#4aff9e' : '#64e6ff';

        newColumns.push(
          <div 
            key={`special-${i}`}
            className="matrix-column"
            style={{
              left,
              color: specialColor,
              fontSize: '11px',
              fontWeight: 'bold',
              '--fall-duration': animationDuration,
              '--fall-delay': animationDelay,
              opacity,
              textShadow: `0 0 8px ${specialColor}`
            } as React.CSSProperties}
          >
            {specialChars}
          </div>
        );
      }

      setColumns(newColumns);
    };

    createMatrixColumns();

    const handleResize = () => {
      setColumns([]);
      createMatrixColumns();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="matrix-container">
      {columns}
    </div>
  );
}
