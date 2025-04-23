import React from 'react';
import './Applications.css';

const Applications = () => {
  const applications = [
    {
      id: 1,
      title: 'Healthcare Revolution',
      description: 'Transforming medical diagnostics and treatment planning with predictive AI',
      image: 'https://readdy.ai/api/search-image?query=A futuristic medical facility with AI visualization systems analyzing patient data, with doctors viewing holographic medical scans. The scene should have blue tech lighting and a clean, advanced aesthetic&width=600&height=400&orientation=landscape&flag=20fe198ac943c863e682456700a5be1c'
    },
    {
      id: 2,
      title: 'Climate Modeling',
      description: 'Advanced predictive systems for climate change analysis and mitigation strategies',
      image: 'https://readdy.ai/api/search-image?query=A visualization of climate data being processed by AI systems, showing Earth with data overlays and prediction models. The scene should have blue tech elements and scientific aesthetics&width=600&height=400&orientation=landscape&flag=02c05dfcddf00bdf71784717159e8627'
    },
    {
      id: 3,
      title: 'Financial Intelligence',
      description: 'Revolutionizing market analysis and investment strategies through quantum-powered predictive models',
      image: 'https://readdy.ai/api/search-image?query=A futuristic financial trading room with AI systems analyzing market data, with traders viewing holographic charts and graphs. The scene should emphasize advanced technology with blue lighting&width=600&height=400&orientation=landscape&flag=429f972fd24a22f397721a62a0d66a1d'
    }
  ];

  return (
    <section id="about" className="applications">
      <div className="container">
        <h2 className="section-title">Industry Applications</h2>
        <div className="applications-list">
          {applications.map(app => (
            <div className="application-item" key={app.id}>
              <div className="application-image">
                <img src={app.image} alt={app.title} />
              </div>
              <div className="application-content">
                <h3>{app.title}</h3>
                <p>{app.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;
