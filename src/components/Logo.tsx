import React from 'react';
import { DollarSign } from 'lucide-react';

interface LogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

export default function Logo({ 
  className = "flex items-center space-x-2", 
  iconClassName = "w-8 h-8 text-blue-600",
  textClassName = "text-2xl font-bold text-gray-900"
}: LogoProps) {
  return (
    <div className={className}>
      <DollarSign className={iconClassName} />
      <span className={textClassName}>MonetizePro</span>
    </div>
  );
}