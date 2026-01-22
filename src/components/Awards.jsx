import React from 'react';
import '../styles/Awards.css';

function Awards() {
  const awards = [
    {
      year: 'September 2025',
      title: 'Rising Developer Star Award',
      issuer: 'Elito Innovations Pvt. Ltd',
      desc: 'Recognized for outstanding performance, innovation, and growth potential in software development'
    }
  ];

  return (
    <section id="awards" className="awards-section">
      <div className="awards-container">
        <h2 className="section-title">Awards</h2>

        <div className="awards-grid">
          <img src="/assets/Award.png" alt="AwardImage" />
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
