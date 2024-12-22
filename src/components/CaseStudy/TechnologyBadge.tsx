import React from 'react';

interface TechnologyBadgeProps {
  name: string;
}

export default function TechnologyBadge({ name }: TechnologyBadgeProps) {
  return (
    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full">
      {name}
    </span>
  );
}