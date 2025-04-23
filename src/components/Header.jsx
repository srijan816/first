import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
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
              <Link to="product" smooth={true} duration={500} offset={-70}>Products</Link>
            </li>
            <li>
              <Link to="tech" smooth={true} duration={500} offset={-70}>Technology</Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} offset={-70}>About Us</Link>
            </li>
            <li>
              <Link to="pricing" smooth={true} duration={500} offset={-70}>Pricing</Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} offset={-70}>Contact</Link>
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
