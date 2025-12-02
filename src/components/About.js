import React from 'react';
import '../styles/About.css';

function About() {
  const features = [
    {
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code that stands the test of time'
    },
    {
      title: 'Design Focus',
      description: 'Creating beautiful, intuitive interfaces that users love to interact with'
    },
    {
      title: 'Fast Delivery',
      description: 'Delivering high-quality projects on time without compromising on quality'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with over 5 years of experience building
              web applications that make a difference. I specialize in React, Node.js, and
              modern web technologies.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing my knowledge through technical writing and mentoring.
            </p>
          </div>
          <div className="about-image">
            <div className="placeholder-image"></div>
          </div>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon"></div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
