// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; 

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-800 text-white">
      <div className="text-2xl font-bold">
        <Link to="/">Portfolio</Link>
      </div>

      <div className="space-x-6">
        <Link to="/" className="hover:text-yellow-400 transition-colors duration-300">Home</Link>
        <Link to="/about" className="hover:text-yellow-400 transition-colors duration-300">Jinhyeok</Link>
        <Link to="/project" className="hover:text-yellow-400 transition-colors duration-300">Project</Link>
        <Link to="/contact" className="hover:text-yellow-400 transition-colors duration-300">Contact</Link>
      </div>
    </nav>
  );


}
