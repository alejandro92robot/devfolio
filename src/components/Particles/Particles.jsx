import { useEffect, useRef } from 'react';
import './Particles.css';

const Particles = ({ count = 15 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Crear partículas
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';

      // Tamaño y posición aleatorios
      const size = Math.random() * 60 + 10;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 10 + 10;

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${left}%`;
      particle.style.top = `${top}%`;
      particle.style.animationDelay = `${delay}s`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.background = `radial-gradient(circle at 30% 30%, var(--primary), transparent)`;
      particle.style.opacity = Math.random() * 0.4 + 0.1;

      container.appendChild(particle);
    }

    return () => {
      // Cleanup
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, [count]);

  return <div ref={containerRef} className='particles'></div>;
};

export default Particles;
