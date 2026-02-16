import { useState } from 'react';
import { Github, ExternalLink, Filter } from 'lucide-react';
import { projects } from '../../data/projects';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const filters = [
    { key: 'todos', label: 'Todos los proyectos' },
    { key: 'profesional', label: 'Profesionales' },
    { key: 'educativo', label: 'Educativos' },
    { key: 'featured', label: 'Destacados' },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'todos') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.category === activeFilter;
  });

  return (
    <section id='projects' className='section projects'>
      <div className='container'>
        <h2 className='section-title'>Mis Proyectos</h2>

        <div className='filters'>
          <Filter size={20} />
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className='projects-grid'>
          {filteredProjects.map((project) => (
            <div key={project.id} className='project-card card'>
              <div className='project-image'>
                <img src={project.image} alt={project.title} loading='lazy' />
                <div className='project-overlay'>
                  <div className='project-links'>
                    <a href={project.github} className='project-link'>
                      <Github size={20} />
                    </a>
                    <a href={project.demo} className='project-link'>
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <span className={`project-category ${project.category}`}>{project.category}</span>
              </div>

              <div className='project-content'>
                <h3 className='project-title'>{project.title}</h3>
                <p className='project-description'>{project.description}</p>

                <div className='project-technologies'>
                  {project.technologies.map((tech) => (
                    <span key={tech} className='technology-tag'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
