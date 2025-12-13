import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">

        <h1 className="hero-title">
          Hi, I'm <span>Balaji G</span>
        </h1>

        <p className="hero-subtitle">
          Junior Software Developer
        </p>

        <p className="hero-description">
          Dynamic Junior Software Developer with experience in building responsive,
          high-performance web applications using HTML, CSS, JavaScript, jQuery, and React.js.
          Specialized in UPI payment integration, admin panels, and performance optimization.
        </p>

        <div className="hero-buttons">
          <a
            href="mailto:balaji32001@gmail.com"
            className="btn btn-primary"
          >
            Get in Touch
          </a>

          <a
            href="https://www.linkedin.com/in/gbalaji-250795215"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            View LinkedIn
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://www.linkedin.com/in/gbalaji-250795215"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="mailto:balaji32001@gmail.com"
          >
            Email
          </a>

          <a href="tel:+916383783573">
            +91 63837 83573
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;
