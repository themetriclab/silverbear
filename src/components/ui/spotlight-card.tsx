import React, { useEffect, useRef, ReactNode } from 'react';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({ children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncPointer = (e: PointerEvent) => {
      const { clientX: x, clientY: y } = e;
      if (cardRef.current) {
        cardRef.current.style.setProperty('--x', x.toFixed(2));
        cardRef.current.style.setProperty('--xp', (x / window.innerWidth).toFixed(2));
        cardRef.current.style.setProperty('--y', y.toFixed(2));
        cardRef.current.style.setProperty('--yp', (y / window.innerHeight).toFixed(2));
      }
    };
    document.addEventListener('pointermove', syncPointer);
    return () => document.removeEventListener('pointermove', syncPointer);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        [data-glow] {
          --base: 42;
          --spread: 40;
          --radius: 14;
          --border: 2;
          --backdrop: hsl(220 12% 12% / 0.9);
          --backup-border: hsl(220 10% 20%);
          --size: 200;
          --outer: 1;
          --border-size: calc(var(--border, 2) * 1px);
          --spotlight-size: calc(var(--size, 150) * 1px);
          --hue: calc(var(--base) + (var(--xp, 0) * var(--spread, 0)));
          background-image: radial-gradient(
            var(--spotlight-size) var(--spotlight-size) at
            calc(var(--x, 0) * 1px)
            calc(var(--y, 0) * 1px),
            hsl(var(--hue, 42) 60% 40% / 0.06), transparent
          );
          background-color: var(--backdrop, transparent);
          background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
          background-position: 50% 50%;
          background-attachment: fixed;
          border: var(--border-size) solid var(--backup-border);
          position: relative;
          touch-action: none;
        }
        [data-glow]::before,
        [data-glow]::after {
          pointer-events: none;
          content: "";
          position: absolute;
          inset: calc(var(--border-size) * -1);
          border: var(--border-size) solid transparent;
          border-radius: calc(var(--radius) * 1px);
          background-attachment: fixed;
          background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
          background-repeat: no-repeat;
          background-position: 50% 50%;
          mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
          mask-clip: padding-box, border-box;
          mask-composite: intersect;
        }
        [data-glow]::before {
          background-image: radial-gradient(
            calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
            calc(var(--x, 0) * 1px)
            calc(var(--y, 0) * 1px),
            hsl(var(--hue, 42) 65% 38% / 0.8), transparent 100%
          );
          filter: brightness(1.2);
        }
        [data-glow]::after {
          background-image: radial-gradient(
            calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
            calc(var(--x, 0) * 1px)
            calc(var(--y, 0) * 1px),
            hsl(42 50% 70% / 0.4), transparent 100%
          );
        }
        [data-glow] [data-glow] {
          position: absolute;
          inset: 0;
          will-change: filter;
          opacity: 0.6;
          border-radius: calc(var(--radius) * 1px);
          border-width: calc(var(--border-size) * 20);
          filter: blur(calc(var(--border-size) * 10));
          background: none;
          pointer-events: none;
          border: none;
        }
        [data-glow] > [data-glow]::before {
          inset: -10px;
          border-width: 10px;
        }
      `}} />
      <div
        ref={cardRef}
        data-glow
        className={`rounded-2xl relative shadow-[0_1rem_2rem_-1rem_black] backdrop-blur-[5px] ${className}`}
      >
        <div data-glow></div>
        {children}
      </div>
    </>
  );
};

export { SpotlightCard };
