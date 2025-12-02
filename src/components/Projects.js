import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with payment integration, user authentication, and admin dashboard',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates, team collaboration, and project tracking',
      technologies: ['React', 'Firebase', 'CSS'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather application with detailed forecasts, interactive maps, and location-based alerts',
      technologies: ['React', 'API Integration', 'Chart.js'],
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'A comprehensive analytics dashboard for social media insights with data visualization and reporting',
      technologies: ['React', 'D3.js', 'Express', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      title: 'Portfolio CMS',
      description: 'A headless CMS for portfolio websites with drag-and-drop builder and custom theme support',
      technologies: ['React', 'Supabase', 'TypeScript'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'A mobile-first fitness tracking application with workout plans, progress tracking, and nutrition guides',
      technologies: ['React Native', 'Redux', 'Node.js'],
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Here are some of my recent projects that showcase my skills and expertise</p>
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
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="link">Code</a>
                  <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="link">Demo</a>
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
