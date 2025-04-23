import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Future Intelligence, Available Now';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1>{text}</h1>
          <p>
            GenαAI is pioneering the next generation of artificial intelligence,
            combining cutting-edge neural networks with precision engineering
            to bring you unprecedented intelligent solutions for the future.
          </p>
          <div className="hero-buttons">
            <Link to="product" smooth={true} duration={500} offset={-70} className="btn">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
