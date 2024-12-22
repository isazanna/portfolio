import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export default function ProjectCard({ id, title, description, image, category }: ProjectCardProps) {
  return (
    <Link 
      to={`/case-study/${id}`}
      className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
      </div>
      <div className="p-6 relative">
        <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full transition-all duration-300 group-hover:bg-blue-100 group-hover:text-blue-700">
          {category}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mt-3 mb-3 transition-colors duration-300 group-hover:text-blue-600">
          {title}
        </h3>
        <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
          {description}
        </p>
      </div>
    </Link>
  );
}