import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from './projectsData';

export default function ProjectsGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}