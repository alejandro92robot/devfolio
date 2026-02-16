import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Sobre Mí</h2>
            <div className="about-description">
              <p>
                Soy un desarrollador apasionado por la ciencia, la tecnología y la innovación. 
                Me encanta crear soluciones digitales que impacten positivamente en la vida de las personas.
              </p>
              <p>
                Con experiencia tanto en entornos profesionales como académicos, he trabajado en 
                diversos proyectos que van desde aplicaciones web empresariales hasta herramientas 
                educativas innovadoras.
              </p>
              <p>
                Mi enfoque combina las mejores prácticas de desarrollo con una atención meticulosa 
                al detalle, asegurando código limpio, documentado, escalable y mantenible.
              </p>
            </div>
            
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Proyectos Completados</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Años de Experiencia</span>
              </div>
              <div className="stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Tecnologías Dominadas</span>
              </div>
            </div>
          </div>
          
          <div className="image-container">
  <img 
    src="/devfolio/images/desarrollo.jpeg" 
    alt="Sobre mí - Alejandro Aguilera"
    className="about-image"
  />
</div>
        </div>
      </div>
    </section>
  );
};

export default About;