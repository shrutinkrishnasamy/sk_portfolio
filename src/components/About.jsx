import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      
      <div className="section-container">
        <div className="about-pic-container">
          <img 
            src="./assets/profile-pic.jpg" 
            alt="Shrutin K About Portrait" 
          />
        </div>

        <div className="about-details-container">
          <div className="about-containers">
            {/* Academic Standing */}
            <div className="details-container">
              <img 
                src="./assets/education.png" 
                alt="Education icon" 
                className="icon" 
              />
              <h3>Education</h3>
              <p>
                <strong>B.Tech Information Technology</strong><br />
                Karpagam College of Eng.<br />
                <span style={{ color: '#15803d', fontWeight: '600' }}>CGPA: 7.73 / 10.0</span>
              </p>
            </div>

            {/* Core Specialization */}
            <div className="details-container">
              <img 
                src="./assets/experience.png" 
                alt="Specialization icon" 
                className="icon" 
              />
              <h3>Specialization</h3>
              <p>
                <strong>Full-Stack & AI/ML</strong><br />
                Java, Spring Boot, React<br />
                NLP & Multilingual Systems
              </p>
            </div>
          </div>

          <div className="text-container">
            <p>
              {portfolioData.aboutSummary}
            </p>
            <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span className="hero-chip">📍 Dindigul & Coimbatore, TN</span>
              <span className="hero-chip">💼 Open for Internships & Full-Time Roles</span>
              <span className="hero-chip">🚀 150+ DSA Problems Solved</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
