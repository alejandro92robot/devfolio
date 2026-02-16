// src/App.jsx
import { useEffect, Suspense, lazy } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Loading from './components/Loading/Loading';
import './styles/globals.css';

// Lazy load components
const Projects = lazy(() => import('./components/Projects/Projects'));
const Skills = lazy(() => import('./components/Skills/Skills'));
const SkillsTree = lazy(() => import('./components/Skills/SkillsTree'));
const About = lazy(() => import('./components/About/About'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Footer = lazy(() => import('./components/Footer/Footer'));

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
    <div className='App'>
      <Header />
      <Hero />
      <Suspense fallback={<Loading />}>
        <Projects />
        <Skills />
        <SkillsTree />
        <About />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
