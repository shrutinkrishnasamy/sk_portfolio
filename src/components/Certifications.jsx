import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Full Stack', 'Networking', 'IoT & AI', 'Skills'];

  const filteredCerts = portfolioData.certifications.filter(cert => {
    if (filter === 'All') return true;
    if (filter === 'Full Stack') return cert.category === 'Full Stack' || cert.category === 'Software Engineering';
    if (filter === 'Networking') return cert.category === 'Networking';
    if (filter === 'IoT & AI') return cert.category === 'IoT' || cert.category === 'Industry 4.0';
    if (filter === 'Skills') return cert.category === 'Problem Solving' || cert.category === 'Professional Skills' || cert.category === 'Communication';
    return true;
  });

  return (
    <section id="cert">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Certifications & Honors</h1>

      {/* Filter Chips for Mobile / Desktop Browsing */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setFilter(cat)}
            style={{
              padding: '0.4rem 1rem',
              borderRadius: '2rem',
              border: '1px solid rgb(180, 180, 180)',
              background: filter === cat ? 'rgb(53, 53, 53)' : '#ffffff',
              color: filter === cat ? '#ffffff' : 'rgb(53, 53, 53)',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontWeight: '500',
              transition: 'all 200ms ease'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="certifications-grid">
        {filteredCerts.map((cert, idx) => (
          <div key={idx} className="cert-card">
            <div>
              <div className="cert-card-top">
                <img 
                  src="./assets/checkmark.png" 
                  alt="Certification verified" 
                  className="cert-icon" 
                />
                <div className="cert-info">
                  <h3>{cert.title}</h3>
                  <div className="cert-issuer">by {cert.issuer}</div>
                </div>
              </div>

              {cert.desc && (
                <p className="cert-desc">{cert.desc}</p>
              )}
            </div>

            <div className="cert-card-bottom">
              <span className="cert-date">📅 {cert.date}</span>
              {cert.link ? (
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cert-link-btn"
                >
                  Verify →
                </a>
              ) : (
                <span style={{ fontSize: '0.8rem', color: '#15803d', fontWeight: '600' }}>✓ Verified</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
