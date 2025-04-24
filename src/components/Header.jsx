import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <a href="#">
            <span className="logo-text">Gen<span className="alpha">α</span>AI</span>
          </a>
        </div>

        <nav className="nav-menu">
          <ul>
            <li>
              <RouterLink to="/blog">Blog</RouterLink>
            </li>
            <li>
              <ScrollLink to="product" smooth={true} duration={500} offset={-70}>Products</ScrollLink>
            </li>
            <li>
              <ScrollLink to="tech" smooth={true} duration={500} offset={-70}>Technology</ScrollLink>
            </li>
            <li>
              <ScrollLink to="about" smooth={true} duration={500} offset={-70}>About Us</ScrollLink>
            </li>
            <li>
              <ScrollLink to="pricing" smooth={true} duration={500} offset={-70}>Pricing</ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>Contact</ScrollLink>
            </li>
          </ul>
        </nav>

        <div className="cta-button">
          <a href="#" className="btn">Pre-order Now</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
