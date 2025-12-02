import React from 'react';
import '../styles/Skills.css';

function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', proficiency: 95 },
        { name: 'TypeScript', proficiency: 90 },
        { name: 'JavaScript', proficiency: 95 },
        { name: 'HTML/CSS', proficiency: 98 },
        { name: 'CSS Variables', proficiency: 92 },
        { name: 'Next.js', proficiency: 88 }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', proficiency: 90 },
        { name: 'Express', proficiency: 88 },
        { name: 'PostgreSQL', proficiency: 85 },
        { name: 'MongoDB', proficiency: 82 },
        { name: 'REST APIs', proficiency: 93 },
        { name: 'GraphQL', proficiency: 78 }
      ]
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', proficiency: 92 },
        { name: 'Docker', proficiency: 80 },
        { name: 'AWS', proficiency: 75 },
        { name: 'Figma', proficiency: 85 },
        { name: 'Testing', proficiency: 88 },
        { name: 'CI/CD', proficiency: 82 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">Technologies and tools I use to bring ideas to life</p>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.proficiency}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
