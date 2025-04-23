import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      id: 1,
      title: 'Neural Processing',
      description: 'Utilizing state-of-the-art neural networks for advanced pattern recognition and deep learning capabilities, enabling unprecedented AI performance.',
      image: 'https://readdy.ai/api/search-image?query=A minimalist 3D illustration of a neural network with glowing connections, centered on a dark background with subtle tech patterns. The image should emphasize AI and intelligence, using blue neon accents. Clean, modern design with a single main element&width=300&height=300&orientation=squarish&flag=966475bd117188ddc8cbc32e1a123e45'
    },
    {
      id: 2,
      title: 'Quantum Computing Integration',
      description: 'Pioneering integration with quantum computing architecture, allowing for complex problem-solving capabilities beyond traditional computing limits.',
      image: 'https://readdy.ai/api/search-image?query=A 3D rendered quantum computing visualization with particles in motion, centered on a dark background with tech patterns. The image should emphasize quantum technology, using blue neon accents. Clean, modern design with a single main element&width=300&height=300&orientation=squarish&flag=b73b39aef57a1c0656cbff8652edd62a'
    },
    {
      id: 3,
      title: 'Adaptive Learning',
      description: 'Self-improving algorithms that continuously evolve through experience, creating AI systems that grow more intelligent and efficient over time.',
      image: 'https://readdy.ai/api/search-image?query=A 3D visualization of a learning curve or adaptive algorithm, centered on a dark background with tech patterns. The image should emphasize growth and adaptation, using blue neon accents. Clean, modern design with a single main element&width=300&height=300&orientation=squarish&flag=fc5839aad8fe9d6d0c446093eece08c3'
    },
    {
      id: 4,
      title: 'Natural Language Processing',
      description: 'Advanced language understanding and generation capabilities, enabling nuanced human-AI interactions that feel natural and intuitive.',
      image: 'https://readdy.ai/api/search-image?query=A 3D illustration of language processing or text analysis visualization, centered on a dark background with tech patterns. The image should emphasize communication, using blue neon accents. Clean, modern design with a single main element&width=300&height=300&orientation=squarish&flag=93eafd2778a68b346c4e807f9863bc52'
    }
  ];

  return (
    <section id="product" className="features">
      <div className="container">
        <h2 className="section-title">Technology Features</h2>
        <div className="features-grid">
          {features.map(feature => (
            <div className="feature-card" key={feature.id}>
              <div className="feature-image">
                <img src={feature.image} alt={feature.title} />
              </div>
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
