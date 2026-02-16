import { useState, useEffect } from 'react';
import { skills } from '../../data/projects';
import './Skills.css';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const getSkillLevelColor = (level) => {
    if (level >= 90) return '#10B981';
    if (level >= 80) return '#3B82F6';
    if (level >= 70) return '#F59E0B';
    if (level >= 60) return '#EF4444';
    return '#6B7280';
  };

  const getSkillLevelLabel = (level) => {
    if (level >= 90) return 'Experto';
    if (level >= 80) return 'Avanzado';
    if (level >= 70) return 'Intermedio';
    if (level >= 60) return 'Básico';
    return 'Principiante';
  };

  return (
    <section id='skills' className='skills-section'>
      <div className='container'>
        <div className='skills-header'>
          <h2 className='section-title'>Mis Habilidades Técnicas</h2>
          <p className='skills-subtitle'>
            Nivel de competencia en diferentes tecnologías y herramientas
          </p>
        </div>

        <div className='skills-grid'>
          {skills.map((category, categoryIndex) => (
            <div
              key={category.category}
              className={`skill-category ${isVisible ? 'fade-in-up' : ''}`}
              style={{
                animationDelay: `${categoryIndex * 0.2}s`,
                borderLeft: `4px solid ${category.color}`,
              }}
            >
              <div className='category-header'>
                <div className='category-icon'>
                  <span>{category.icon}</span>
                </div>
                <h3 className='category-title'>{category.category}</h3>
              </div>

              <div className='skill-items'>
                {category.items.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`skill-item ${selectedSkill?.name === skill.name ? 'active' : ''}`}
                    onClick={() =>
                      setSelectedSkill(selectedSkill?.name === skill.name ? null : skill)
                    }
                  >
                    <div className='skill-main'>
                      <div className='skill-info'>
                        <span className='skill-name'>{skill.name}</span>
                        <div className='skill-level-info'>
                          <span
                            className='skill-level-badge'
                            style={{ backgroundColor: getSkillLevelColor(skill.level) }}
                          >
                            {getSkillLevelLabel(skill.level)}
                          </span>
                          <span className='skill-percentage'>{skill.level}%</span>
                        </div>
                      </div>

                      <div className='skill-bar-container'>
                        <div className='skill-bar'>
                          <div
                            className='skill-progress'
                            style={{
                              width: `${skill.level}%`,
                              backgroundColor: getSkillLevelColor(skill.level),
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {selectedSkill?.name === skill.name && (
                      <div className='skill-details'>
                        <p className='skill-description'>{skill.description}</p>
                        <div className='skill-metrics'>
                          <div className='metric'>
                            <span className='metric-label'>Nivel:</span>
                            <span
                              className='metric-value'
                              style={{ color: getSkillLevelColor(skill.level) }}
                            >
                              {getSkillLevelLabel(skill.level)}
                            </span>
                          </div>
                          <div className='metric'>
                            <span className='metric-label'>Confianza:</span>
                            <span className='metric-value'>{skill.level}%</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/*
        <div className="skills-legend">
          <h4>Leyenda de Niveles:</h4>
          <div className="legend-items">
            {[
              { color: '#10B981', label: 'Experto (90-100%)' },
              { color: '#3B82F6', label: 'Avanzado (80-89%)' },
              { color: '#F59E0B', label: 'Intermedio (70-79%)' },
              { color: '#EF4444', label: 'Básico (60-69%)' },
              { color: '#6B7280', label: 'Principiante (0-59%)' }
            ].map((item, index) => (
              <div key={index} className="legend-item">
                <div className="legend-color" style={{ backgroundColor: item.color }}></div>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
