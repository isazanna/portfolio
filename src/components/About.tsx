import React from 'react';
import { Target, TrendingUp, Users } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Strategic Approach',
    description: 'Data-driven monetization strategies tailored to your audience'
  },
  {
    icon: TrendingUp,
    title: 'Revenue Growth',
    description: 'Proven methods to maximize your website\'s earning potential'
  },
  {
    icon: Users,
    title: 'User Experience',
    description: 'Balance monetization with exceptional user experience'
  }
];

export default function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transforming Websites into Revenue Engines
          </h2>
          <p className="text-gray-600 text-lg">
            We specialize in creating sustainable monetization solutions that drive 
            revenue while maintaining user engagement and satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all duration-300 transform hover:-translate-y-1"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}