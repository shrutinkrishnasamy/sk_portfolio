import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  return (
    <>
      {/* Desktop Navigation */}
      <nav id="desktop-nav">
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <b>{portfolioData.name}</b>
          <span className="logo-badge">IT</span>
        </div>
        <div>
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

      {/* Mobile Hamburger Navigation */}
      <nav id="hamburger-nav">
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <b>{portfolioData.name}</b>
        </div>
        <div className="hamburger-menu">
          <div 
            className={`hamburger-icon ${menuOpen ? 'open' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
            role="button"
            tabIndex={0}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu & Backdrop */}
      {menuOpen && (
        <div className="menu-backdrop" onClick={closeMenu}></div>
      )}
      <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{ fontWeight: '700', fontSize: '1.2rem' }}>{portfolioData.name}</div>
          <button 
            onClick={closeMenu} 
            style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', padding: '0.25rem' }}
          >
            ✕
          </button>
        </div>
        <a href="#about" onClick={closeMenu}>👤 About</a>
        <a href="#education" onClick={closeMenu}>🎓 Education</a>
        <a href="#skills" onClick={closeMenu}>⚡ Skills</a>
        <a href="#projects" onClick={closeMenu}>💻 Projects</a>
        <a href="#cert" onClick={closeMenu}>🏆 Certifications</a>
        <a href="#contact" onClick={closeMenu}>📬 Contact</a>
        <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
          <a 
            href={portfolioData.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-color-1" 
            style={{ width: '100%', textDecoration: 'none' }}
            onClick={closeMenu}
          >
            📄 Download Resume
          </a>
        </div>
      </div>
    </>
  );
}
