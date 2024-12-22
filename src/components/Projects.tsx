import React from 'react';

const projects = [
  {
    title: 'E-commerce Revenue Optimization',
    description: 'Increased conversion rates by 150% through strategic ad placement and UX improvements',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
    category: 'E-commerce'
  },
  {
    title: 'Content Platform Monetization',
    description: 'Developed a hybrid monetization strategy resulting in 200% revenue growth',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    category: 'Content'
  },
  {
    title: 'SaaS Platform Enhancement',
    description: 'Implemented premium features and tiered pricing, boosting MRR by 180%',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    category: 'SaaS'
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <span className="text-blue-600 text-sm font-semibold">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}