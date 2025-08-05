import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const particleCount = 50;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Random animation delay
      particle.style.animationDelay = `${Math.random() * 6}s`;
      
      // Random size variation
      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random color variation
      const hue = Math.random() * 60 + 270; // Purple to pink range
      particle.style.background = `hsl(${hue}, 100%, 70%)`;
      
      container.appendChild(particle);
    }

    return () => {
      // Cleanup particles
      container.innerHTML = '';
    };
  }, []);

  return <div ref={containerRef} className="particle-bg" />;
}