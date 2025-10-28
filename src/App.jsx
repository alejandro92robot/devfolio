// src/App.jsx
import { useEffect } from 'react';
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import './styles/globals.css'

function App() {
  useEffect(() => {
    // Agregar clase de carga inicial
    document.body.classList.add('loaded');
    
    // Remover la clase después de la animación inicial
    const timer = setTimeout(() => {
      document.body.classList.remove('loaded');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  )
}

export default App