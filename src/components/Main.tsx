import React from 'react';
import HomeCard from './HomeCard';
import ProjectsCard from './ProjectsCard';
import AboutCard from './AboutCard';

function Main({ page }) {
  return (
    <div>
      {
        (page === 'home' && <HomeCard page="home" />) ||
        (page === 'about' && <AboutCard page="about" />) ||
        (page === 'projects' && <ProjectsCard page="projects" />)
      }
    </div>
  );
}

export default Main;

