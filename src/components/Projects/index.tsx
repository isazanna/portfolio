import React from 'react';
import ProjectsGrid from './ProjectsGrid';

export default function Projects() {
  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Featured Projects
        </h2>
        <ProjectsGrid />
      </div>
    </section>
  );
}