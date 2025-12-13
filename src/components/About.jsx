import React from 'react';
import '../styles/About.css';
import { FaCode, FaPaintBrush, FaRocket } from 'react-icons/fa';


function About() {
  const features = [
    {
      title: 'Clean & Scalable Code',
      description:
        'Writing clean, maintainable, and scalable code by following best practices and coding standards'
    },
    {
      title: 'User-Centric Development',
      description:
        'Building responsive, intuitive interfaces with a strong focus on performance and usability'
    },
    {
      title: 'Reliable Delivery',
      description:
        'Delivering quality features on time while ensuring cross-browser compatibility and stability'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              I am a Junior Software Developer based in Chennai with hands-on experience in
              building responsive and high-performance web applications using HTML, CSS,
              JavaScript, jQuery, and React.js.
            </p>

            <p>
              Currently working at Elito Innovations, I have contributed to UPI payment
              integrations, admin panel development, and workflow optimization. I enjoy
              collaborating with teams to solve problems, improve usability, and deliver
              reliable, scalable solutions.
            </p>
          </div>

          <div className="about-image">
            <div className="placeholder-image"></div>
          </div>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {index === 0 && <FaCode />}
                {index === 1 && <FaPaintBrush />}
                {index === 2 && <FaRocket />}
              </div>
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
