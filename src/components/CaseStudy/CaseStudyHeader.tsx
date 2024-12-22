import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CaseStudyHeaderProps {
  title: string;
}

export default function CaseStudyHeader({ title }: CaseStudyHeaderProps) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          {title}
        </h1>
      </div>
    </div>
  );
}