import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Project() {
  const project = [
    { title: 'Project One', description: 'A web app built with React and Firebase.' },
    { title: 'Project Two', description: 'Portfolio site using Vite and Tailwind CSS.' },
    { title: 'Project Three', description: 'E-commerce frontend connected to .NET backend.' }
  ];

  return (
    <div className="p-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((proj, idx) => (
        <ProjectCard key={idx} {...proj} />
      ))}
    </div>
  );
}

export default Project;