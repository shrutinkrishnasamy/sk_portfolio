import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#cert">Certifications</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <p>Copyright &#169; {currentYear} {portfolioData.name}. All Rights Reserved.</p>
      <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: 'rgb(160, 160, 160)' }}>
        Crafted with React + Vite | Optimized for Mobile & Desktop
      </p>
    </footer>
  );
}
