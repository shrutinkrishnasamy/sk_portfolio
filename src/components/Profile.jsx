import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Profile({ showToast }) {
  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    if (showToast) showToast(`${label} copied to clipboard!`);
  };

  return (
    <section id="profile">
      <div className="section__pic-container">
        <div className="profile-img-wrapper">
          <img 
            src="./assets/profile-pic.jpg" 
            alt={`${portfolioData.name} profile portrait`} 
          />
        </div>
        <div className="online-status-badge">
          <span className="status-dot"></span>
          <span>Open to Work</span>
        </div>
      </div>

      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title" style={{ marginBottom: '0.25rem' }}>{portfolioData.name}</h1>
        <p className="hero-subtitle">{portfolioData.tagline}</p>
        
        {/* Quick badges for fast mobile reading */}
        <div className="hero-badges-row">
          <span className="hero-chip">🎯 LeetCode 150+ DSA</span>
          <span className="hero-chip">⚡ Spring Boot & React</span>
          <span className="hero-chip">🔬 NLP Research Author</span>
        </div>

        <p className="hero-bio">
          {portfolioData.subTagline}
        </p>

        <div className="btn-container">
          <a 
            className="btn btn-color-2"
            href={portfolioData.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
          <button 
            className="btn btn-color-1"
            onClick={() => {
              const contactSec = document.getElementById('contact');
              if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact Info
          </button>
        </div>

        <div id="socials-container">
          {/* LinkedIn */}
          <a 
            href={portfolioData.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon-btn"
            title="LinkedIn Profile"
          >
            <img src="./assets/linkedin.png" alt="LinkedIn icon" />
          </a>

          {/* GitHub */}
          <a 
            href={portfolioData.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon-btn"
            title="GitHub Profile"
          >
            <img src="./assets/github.png" alt="GitHub icon" />
          </a>

          {/* LeetCode */}
          <a 
            href={portfolioData.leetcode} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon-btn"
            title="LeetCode Profile (150+ Solved)"
          >
            <svg 
              viewBox="0 0 24 24" 
              width="20" 
              height="20" 
              fill="currentColor"
            >
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
            </svg>
          </a>

          {/* Email */}
          <a 
            href={`mailto:${portfolioData.email}`}
            className="social-icon-btn"
            title="Send Email"
          >
            <img src="./assets/email.png" alt="Email icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
