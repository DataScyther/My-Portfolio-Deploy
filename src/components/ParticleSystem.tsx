import { useEffect, useRef } from 'react';

interface ParticleSystemProps {
  particleCount?: number;
  className?: string;
}

const ParticleSystem = ({ particleCount = 50, className = '' }: ParticleSystemProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    // Clear existing particles
    container.innerHTML = '';

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random starting position
      const startX = Math.random() * window.innerWidth;
      const delay = Math.random() * 10; // Random delay up to 10s
      const size = Math.random() * 3 + 1; // Size between 1-4px
      
      particle.style.left = `${startX}px`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.animationDelay = `${delay}s`;
      
      // Random horizontal drift
      const drift = (Math.random() - 0.5) * 200; // -100px to +100px drift
      particle.style.setProperty('--drift', `${drift}px`);
      
      container.appendChild(particle);
    }

    // Cleanup function
    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [particleCount]);

  return (
    <div 
      ref={containerRef} 
      className={`particle-field ${className}`}
      aria-hidden="true"
    />
  );
};

export default ParticleSystem;
