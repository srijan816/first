import React from 'react';
import './Technology.css';

const Technology = () => {
  const techAdvantages = [
    {
      id: 1,
      title: 'Quantum Neural Processing',
      description: 'Our proprietary quantum-enhanced neural processing architecture achieves 100 petaFLOPS of computing power, enabling complex AI models to run with unprecedented efficiency.'
    },
    {
      id: 2,
      title: 'Advanced Algorithm Design',
      description: 'Pioneering self-optimizing algorithms that continuously refine their own architecture, achieving a 300% improvement in problem-solving capabilities compared to traditional AI systems.'
    },
    {
      id: 3,
      title: 'Sustainable Computing',
      description: 'Revolutionary energy-efficient design reduces power consumption by 80% while maintaining peak performance, making advanced AI accessible and environmentally responsible.'
    }
  ];

  return (
    <section id="tech" className="technology">
      <div className="container">
        <h2 className="section-title">Core Technology</h2>
        <div className="tech-content">
          <h3 className="tech-subtitle">Leading Technical Advantages</h3>
          <div className="tech-advantages">
            {techAdvantages.map(tech => (
              <div className="tech-card" key={tech.id}>
                <h4>{tech.title}</h4>
                <p>{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
