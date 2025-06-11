import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

function Project() {
  const projects = [
    {
      title: 'Graduation Dashboard System',
      description: 'Admin dashboard for SIT Graduation using React + .NET Core.',
    },
    {
      title: 'FlavorFinder',
      description: 'Food search app with RESTful API & filtering using React Vite.',
    },
    {
      title: 'Astro Planner',
      description: 'Django + PostgreSQL based Astronomy event planner.',
    },
    {
      title: 'Unity Game Project',
      description: '2D platformer built with Unity and C#.',
    },
    {
      title: 'Android Weather App',
      description: 'Mobile app using Java, Retrofit, OpenWeather API.',
    },
    {
      title: 'Portfolio Website',
      description: 'This portfolio built with React, Tailwind CSS, framer-motion.',
    },
  ];

  return (
    <div className="bg-black min-h-screen py-16 px-6">
      <motion.h2
        className="text-4xl font-bold text-center text-yellow-400 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        💻 My Projects
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            viewport={{ once: true }}
          >
            <ProjectCard {...proj} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Project;
