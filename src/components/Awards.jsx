import React from 'react';
import '../styles/Awards.css';

function Awards() {
  const awards = [
    {
      year: '2025',
      title: 'Outstanding Project Award',
      issuer: 'XYZ Hackathon',
      desc: 'Winner for Best Fullstack Project — implemented full CI/CD and demoed live.'
    },
    {
      year: '2024',
      title: "Dean's List",
      issuer: 'ABC University',
      desc: 'Recognized for academic excellence and top 5% of the cohort.'
    }
  ];

  return (
    <section id="awards" className="awards-section">
      <div className="awards-container">
        <h2 className="section-title">Awards</h2>

        <div className="awards-grid">
          {awards.map((a, idx) => (
            <article key={idx} className="award-card">
              <div className="award-year">{a.year}</div>
              <div className="award-body">
                <h3 className="award-title">{a.title}</h3>
                <p className="award-issuer">{a.issuer}</p>
                <p className="award-desc">{a.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Awards;
