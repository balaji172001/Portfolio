import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm John Doe</h1>
        <p className="hero-subtitle">Full Stack Developer & Creative Problem Solver</p>
        <p className="hero-description">
          Crafting elegant solutions to complex problems with modern web technologies
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Get in Touch</button>
          <button className="btn btn-secondary">View Work</button>
        </div>
        <div className="hero-socials">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:hello@example.com">Email</a>
        </div>
      </div>

    </section>
  );
}

export default Hero;
