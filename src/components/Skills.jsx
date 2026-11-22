import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const skillCategories = [
    {
      id: 'languages-frontend',
      title: 'Languages & Frontend',
      skills: [
        ...portfolioData.skills.programming,
        ...portfolioData.skills.frontend
      ]
    },
    {
      id: 'backend-ai',
      title: 'Backend & AI / ML',
      skills: [
        ...portfolioData.skills.backend,
        ...portfolioData.skills.aiml
      ]
    },
    {
      id: 'databases-tools',
      title: 'Databases & Cloud / Tools',
      skills: [
        ...portfolioData.skills.databases,
        ...portfolioData.skills.toolsAndCloud
      ]
    }
  ];

  return (
    <section id="skills">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Technical Skills</h1>

      <div className="skills-grid">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="skill-category-card">
            <h2 className="experience-sub-title">
              {cat.title}
            </h2>

            <div className="article-container">
              {cat.skills.map((skill, sIdx) => (
                <article key={sIdx}>
                  <img 
                    src="./assets/checkmark.png" 
                    alt="Skill checkmark" 
                    className="icon" 
                  />
                  <div>
                    <h3>{skill.name}</h3>
                    <p>{skill.level}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
