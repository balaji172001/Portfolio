import React from 'react';
import '../styles/Skills.css';


function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML5', proficiency: 95 },
        { name: 'CSS3', proficiency: 92 },
        { name: 'JavaScript', proficiency: 90 },
        { name: 'jQuery', proficiency: 88 },
        { name: 'React.js', proficiency: 85 },
        { name: 'Bootstrap', proficiency: 87 }
      ]
    },
    {
      category: 'Web Development',
      skills: [
        { name: 'Responsive Web Design', proficiency: 92 },
        { name: 'Cross-Browser Compatibility', proficiency: 90 },
        { name: 'UI Development', proficiency: 88 },
        { name: 'Admin Panel Development', proficiency: 85 },
        { name: 'UPI Payment Integration', proficiency: 80 }
      ]
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', proficiency: 85 },
        { name: 'VS Code', proficiency: 90 },
        { name: 'Chrome DevTools', proficiency: 88 },
        { name: 'Performance Optimization', proficiency: 82 },
        { name: 'Debugging & Bug Fixing', proficiency: 87 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">
          Technologies and tools I use to build responsive and high-performance web applications
        </p>

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
