import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'IssuerX',
      description:
        'Worked on developing responsive user interfaces and integrating APIs to ensure smooth data flow. Focused on improving usability, performance, and cross-browser compatibility.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'AcquireX',
      description:
        'Created dynamic UI components and interactive features using JavaScript and jQuery. Optimized front-end performance and contributed to bug fixing and UI enhancements.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'UPI Payment Module',
      description:
        'Developed a secure and user-friendly UPI payment interface with proper form validations, error handling, and smooth transaction flow to enhance user experience.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: 'Admin Panel Dashboard',
      description:
        'Currently building a scalable admin dashboard for managing users, transactions, and reports. Focused on reusable components, responsiveness, and easy navigation.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      title: 'Responsive Web Applications',
      description:
        'Developed multiple responsive websites optimized for both mobile and desktop platforms, ensuring fast load times, smooth performance, and consistent UI.',
      technologies: ['HTML5', 'CSS3', 'Responsive Design'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
  {
  id: 6,
  title: 'Rambalaji Agency Website',
  description:
    'Designed and developed a responsive business website for Rambalaji Agency. Focused on clean UI, mobile responsiveness, and performance optimization to provide a professional online presence.',
  technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
  image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
  demo: 'https://rambalajiagency.netlify.app/'
}

  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A selection of projects that reflect my experience in frontend development and real-world applications
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    Code
                  </a>

                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
