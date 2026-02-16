import { useState, useRef, useEffect } from 'react';
import { skills } from '../../data/projects';
import './SkillsTree.css';

const SkillsTree = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const canvasRef = useRef(null);

  // Colores para las categorías
  const categoryColors = skills.reduce((acc, category) => {
    acc[category.category] = category.color;
    return acc;
  }, {});

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) * 0.35;

    // Limpiar canvas
    ctx.clearRect(0, 0, width, height);

    // Dibujar gráfico radial
    drawRadialChart(ctx, centerX, centerY, radius);
  }, [selectedCategory, hoveredSkill]);

  const drawRadialChart = (ctx, centerX, centerY, radius) => {
    const allSkills = skills.flatMap((category) =>
      category.items.map((skill) => ({
        ...skill,
        category: category.category,
        color: category.color,
      }))
    );

    const totalSkills = allSkills.length;
    const angleStep = (2 * Math.PI) / totalSkills;

    // Dibujar círculos de referencia
    ctx.strokeStyle = 'var(--border-light)';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 3]);

    // Círculos de nivel
    for (let level = 20; level <= 100; level += 20) {
      const levelRadius = (level / 100) * radius;
      ctx.beginPath();
      ctx.arc(centerX, centerY, levelRadius, 0, 2 * Math.PI);
      ctx.stroke();

      // Etiquetas de nivel
      if (level % 40 === 0) {
        ctx.fillStyle = 'var(--text-muted)';
        ctx.font = '12px Inter, sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(`${level}%`, centerX - levelRadius - 5, centerY);
      }
    }
    ctx.setLineDash([]);

    // Dibujar habilidades
    allSkills.forEach((skill, index) => {
      const angle = index * angleStep;
      const skillRadius = (skill.level / 100) * radius;
      const endX = centerX + Math.cos(angle) * skillRadius;
      const endY = centerY + Math.sin(angle) * skillRadius;

      // Línea de habilidad
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(endX, endY);
      ctx.strokeStyle = skill.color;
      ctx.lineWidth = hoveredSkill === skill.name ? 3 : 2;
      ctx.stroke();

      // Punto final
      ctx.beginPath();
      ctx.arc(endX, endY, hoveredSkill === skill.name ? 6 : 4, 0, 2 * Math.PI);
      ctx.fillStyle = skill.color;
      ctx.fill();

      // Etiqueta de habilidad (solo si está hovered o seleccionada)
      if (
        hoveredSkill === skill.name ||
        (selectedCategory && skill.category === selectedCategory)
      ) {
        ctx.fillStyle = 'var(--text-primary)';
        ctx.font = 'bold 12px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(skill.name, endX, endY - 10);

        ctx.fillStyle = 'var(--text-muted)';
        ctx.font = '10px Inter, sans-serif';
        ctx.fillText(`${skill.level}%`, endX, endY + 20);
      }
    });

    // Círculo central
    ctx.beginPath();
    ctx.arc(centerX, centerY, 8, 0, 2 * Math.PI);
    ctx.fillStyle = 'var(--primary)';
    ctx.fill();

    // Información central sin cuadro de texto
    ctx.fillStyle = 'var(--text-primary)';
    ctx.font = 'bold 16px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    if (hoveredSkill) {
      const skill = allSkills.find((s) => s.name === hoveredSkill);
      ctx.fillText(hoveredSkill, centerX, centerY - 15);
      ctx.fillStyle = 'var(--text-muted)';
      ctx.font = '12px Inter, sans-serif';
      ctx.fillText(`${skill.level}%`, centerX, centerY + 5);
    } else if (selectedCategory) {
      const categorySkills = allSkills.filter((s) => s.category === selectedCategory);
      const averageLevel = Math.round(
        categorySkills.reduce((sum, s) => sum + s.level, 0) / categorySkills.length
      );
      ctx.fillText(selectedCategory, centerX, centerY - 15);
      ctx.fillStyle = 'var(--text-muted)';
      ctx.font = '12px Inter, sans-serif';
      ctx.fillText(`Avg: ${averageLevel}%`, centerX, centerY + 5);
    } else {
      ctx.fillText('Skills Tree', centerX, centerY - 15);
      ctx.fillStyle = 'var(--text-muted)';
      ctx.font = '12px Inter, sans-serif';
      ctx.fillText(`${allSkills.length} habilidades`, centerX, centerY + 5);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  const getCategoryStats = (categoryName) => {
    const category = skills.find((cat) => cat.category === categoryName);
    if (!category) return null;

    const items = category.items;
    const averageLevel = Math.round(
      items.reduce((sum, item) => sum + item.level, 0) / items.length
    );
    const maxSkill = items.reduce((max, item) => (item.level > max.level ? item : max), items[0]);

    return { averageLevel, maxSkill, totalSkills: items.length };
  };

  return (
    <section className='skills-tree-section'>
      <div className='container'>
        <div className='skills-tree-header'>
          <h2 className='section-title'>Mapa de Habilidades</h2>
          <p className='skills-tree-subtitle'>
            Visualización radial de todas mis competencias técnicas organizadas por categorías
          </p>
        </div>

        <div className='skills-tree-content'>
          {/* Panel de categorías */}
          <div className='categories-panel'>
            <h3 className='panel-title'>Categorías</h3>
            <div className='categories-list'>
              {skills.map((category) => {
                const stats = getCategoryStats(category.category);
                const isSelected = selectedCategory === category.category;

                return (
                  <div
                    key={category.category}
                    className={`category-card ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleCategoryClick(category.category)}
                    onMouseEnter={() => setHoveredSkill(null)}
                    style={{
                      borderLeftColor: category.color,
                      background: isSelected
                        ? `linear-gradient(135deg, ${category.color}20, transparent)`
                        : 'var(--bg-card)',
                    }}
                  >
                    <div className='category-card-header'>
                      <div className='category-icon' style={{ backgroundColor: category.color }}>
                        {category.icon}
                      </div>
                      <h4 className='category-name'>{category.category}</h4>
                    </div>

                    {stats && (
                      <div className='category-stats'>
                        <div className='stat-item'>
                          <span className='stat-label'>Promedio:</span>
                          <span className='stat-value' style={{ color: category.color }}>
                            {stats.averageLevel}%
                          </span>
                        </div>
                        <div className='stat-item'>
                          <span className='stat-label'>Mejor habilidad:</span>
                          <span className='stat-value'>{stats.maxSkill.name}</span>
                        </div>
                        <div className='stat-item'>
                          <span className='stat-label'>Total:</span>
                          <span className='stat-value'>{stats.totalSkills} skills</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Gráfico radial sin cuadro de texto */}
          <div className='radial-chart-container'>
            <div className='chart-wrapper'>
              <canvas
                ref={canvasRef}
                width={600}
                height={600}
                className='radial-chart'
                onMouseLeave={() => setHoveredSkill(null)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsTree;
