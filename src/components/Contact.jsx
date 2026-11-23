import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>

      {/* Classic Contact Info Upper Container - Exactly styled like sample */}
      <div className="contact-info-upper-container">
        {/* Email */}
        <div className="contact-info-container">
          <img 
            src="./assets/email.png" 
            alt="Email icon" 
            className="icon contact-icon email-icon" 
          />
          <p>
            <a href={`mailto:${portfolioData.email}`}>
              {portfolioData.email}
            </a>
          </p>
        </div>

        {/* LinkedIn */}
        <div className="contact-info-container">
          <img 
            src="./assets/linkedin.png" 
            alt="LinkedIn icon" 
            className="icon contact-icon" 
          />
          <p>
            <a 
              href={portfolioData.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>

        {/* GitHub */}
        <div className="contact-info-container">
          <img 
            src="./assets/github.png" 
            alt="GitHub icon" 
            className="icon contact-icon" 
          />
          <p>
            <a 
              href={portfolioData.github} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
