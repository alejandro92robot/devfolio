import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          
          {/* Tech Stack */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Tecnologías</h4>
            <div className="footer-tech">
              <span className="tech-tag">React</span>
              <span className="tech-tag">HTML5</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">CSS3</span>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p className="footer-author">
              Diseñado y desarrollado por <strong>Alejandro Aguilera</strong>
            </p>
            <p>&copy; {currentYear} Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;