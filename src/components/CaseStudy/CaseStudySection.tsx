import React from 'react';

interface CaseStudySectionProps {
  title: string;
  children: React.ReactNode;
}

export default function CaseStudySection({ title, children }: CaseStudySectionProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
      {children}
    </div>
  );
}