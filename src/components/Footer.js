import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>John Doe</h3>
          <p>Full Stack Developer</p>
        </div>
        <div className="footer-socials">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:hello@example.com">Email</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Made with <span>❤️</span></p>
        <p>© 2025 All rights reserved. Built with React & CSS</p>
      </div>
    </footer>
  );
}

export default Footer;
