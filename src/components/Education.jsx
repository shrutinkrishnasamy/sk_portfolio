import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Education & Academic Journey</h1>

      <div className="education-timeline-container">
        {portfolioData.education.map((item, idx) => (
          <div key={idx} className="education-card">
            <div className="education-card-icon">
              <img 
                src="./assets/education.png" 
                alt="Education badge" 
                className="icon"
                style={{ width: '1.5rem', height: '1.5rem' }} 
              />
            </div>
            
            <div className="education-card-content">
              <div className="education-card-header">
                <div>
                  <h3 className="education-card-title">{item.institution}</h3>
                  <div className="education-degree">{item.degree}</div>
                </div>
                <span className="education-badge">{item.period}</span>
              </div>

              <div className="education-score">
                {item.score}
              </div>

              {item.highlights && item.highlights.length > 0 && (
                <ul className="education-points">
                  {item.highlights.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
