import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react';
import Particles from '../Particles/Particles';
import './Hero.css';

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ['Desarrollador Full Stack', 'Especialista en Ciberseguridad', 'Desarrollador Mobile'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section id="home" className="hero">
      <Particles count={20} />
      <div className="hero-background"></div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge fade-in-up">
              <span className="badge-text">¡Bienvenido a mi portafolio!</span>
            </div>
            
            <h1 className="hero-title">
              Hola, soy <span className="text-gradient">Alejandro Aguilera</span>
            </h1>
            
            <div className="hero-typing">
              <span className="typing-text">{texts[textIndex]}</span>
              <span className="typing-cursor">|</span>
            </div>
            
            <p className="hero-description fade-in-up">
              Desarrollador full stack especializado en crear soluciones innovadoras 
              con enfoque en ciberseguridad, machine learning y desarrollo móvil.
            </p>
            
            <div className="hero-buttons fade-in-up">
              <a href="#projects" className="btn btn-primary pulse-on-hover">
                Explorar Proyectos
                <ArrowDown size={20} />
              </a>
              <a href="/cv.pdf" download className="btn btn-secondary">
                Descargar CV
                <Download size={20} />
              </a>
            </div>
            
            <div className="hero-social fade-in-up">
              {[
                { icon: Github, href: 'https://github.com/tuusuario', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/tuusuario', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:alejandro@ejemplo.com', label: 'Email' }
              ].map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="social-link"
                  style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="hero-image float">
            <div className="image-container">
              <div className="main-image glass">
                {/* Reemplaza con tu foto de perfil */}
                <img 
                  src="/devfolio/images/profile.JPG" 
                  alt="Alejandro Aguilera" 
                  className="profile-image"
                />
              </div>
              <div className="floating-elements">
                <div className="floating-element element-1">🚀</div>
                <div className="floating-element element-2">💻</div>
                <div className="floating-element element-3">🔒</div>
              </div>
            </div>
          </div>
        </div>
        
        <a href="#projects" className="scroll-indicator bounce">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;