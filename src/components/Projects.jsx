import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Key Projects & Research</h1>

      <div className="projects-container">
        {portfolioData.projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <div>
              <div className="project-card-header">
                <span className="project-badge">{project.tag}</span>
                <span className="project-category">{project.category}</span>
              </div>

              <h2 className="project-title">{project.title}</h2>
              <h3 className="project-subtitle">{project.subtitle}</h3>

              <div className="project-tech-pills">
                {project.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className="tech-pill">{tech}</span>
                ))}
              </div>

              <ul className="project-points">
                {project.points.map((point, pIdx) => (
                  <li key={pIdx}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="project-btn-container">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-color-2"
                style={{ textAlign: 'center' }}
              >
                <img src="./assets/github.png" alt="GitHub icon" style={{ width: '1rem', height: '1rem' }} />
                GitHub Repo
              </a>
              <a 
                href={portfolioData.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-color-1"
                style={{ textAlign: 'center' }}
              >
                Discuss Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
