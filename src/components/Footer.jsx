import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#">
              <h2>Gen<span className="alpha">α</span>AI</h2>
            </a>
            <p>Pioneering the future of artificial intelligence, creating a smarter world for tomorrow.</p>
          </div>

          <div className="footer-links">
            <div className="footer-links-column">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#">Product Introduction</a></li>
                <li><a href="#">Technical Support</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">News</a></li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h4>Support</h4>
              <ul>
                <li><a href="#">After-sales Service</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">User Guide</a></li>
                <li><a href="#">Download Center</a></li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 GenαAI Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
