
import { useEffect, useState } from 'react';

export function MatrixBackground() {
  const [columns, setColumns] = useState<JSX.Element[]>([]);

  useEffect(() => {
    // Only create the matrix effect if we're not in reduced motion mode
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const createMatrixColumns = () => {
      const numberOfColumns = Math.floor(window.innerWidth / 20); // Adjust spacing
      const newColumns: JSX.Element[] = [];

      for (let i = 0; i < numberOfColumns; i++) {
        const characters = Array.from({ length: Math.floor(Math.random() * 20) + 5 }, () => {
          // Mix of numbers, brackets, and some special programming characters
          const chars = "01{}[]<>/\\|;:,.-_+=%&$#@!";
          return chars.charAt(Math.floor(Math.random() * chars.length));
        }).join('');

        const left = `${i * 20 + Math.random() * 10}px`;
        const animationDuration = `${Math.random() * 15 + 10}s`;
        const animationDelay = `${Math.random() * 5}s`;
        const opacity = Math.random() * 0.4 + 0.1;

        newColumns.push(
          <div 
            key={i}
            className="matrix-column"
            style={{
              left,
              '--fall-duration': animationDuration,
              '--fall-delay': animationDelay,
              opacity
            } as React.CSSProperties}
          >
            {characters}
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
