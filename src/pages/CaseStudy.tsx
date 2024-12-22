import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import CaseStudyHeader from '../components/CaseStudy/CaseStudyHeader';
import CaseStudySection from '../components/CaseStudy/CaseStudySection';
import TechnologyBadge from '../components/CaseStudy/TechnologyBadge';

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const caseStudy = id ? caseStudies[id] : null;

  if (!caseStudy) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-white">
      <CaseStudyHeader title={caseStudy.title} />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <CaseStudySection title="Project Overview">
            <p className="text-gray-600 leading-relaxed">
              {caseStudy.overview}
            </p>
          </CaseStudySection>

          <CaseStudySection title="Our Approach">
            <p className="text-gray-600 leading-relaxed">
              {caseStudy.approach}
            </p>
          </CaseStudySection>

          <CaseStudySection title="Key Results">
            <p className="text-gray-600 leading-relaxed mb-4">
              {caseStudy.results.text}
            </p>
            <ul className="space-y-2">
              {caseStudy.results.stats.map((stat, index) => (
                <li 
                  key={index}
                  className="flex items-center space-x-2 text-gray-700"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span>{stat}</span>
                </li>
              ))}
            </ul>
          </CaseStudySection>

          <CaseStudySection title="Technologies Used">
            <div className="flex flex-wrap gap-2">
              {caseStudy.technologies.map((tech, index) => (
                <TechnologyBadge key={index} name={tech} />
              ))}
            </div>
          </CaseStudySection>

          <div className="mt-16 p-8 bg-blue-50 rounded-xl text-center">
            <p className="text-lg text-gray-900 mb-6">{caseStudy.cta}</p>
            <a
              href="mailto:contact@monetizepro.com"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}