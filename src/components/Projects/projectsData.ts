export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 'saas-platform-enhancement',
    title: 'SaaS Platform Enhancement',
    description: 'A project focused on enhancing a Software as a Service (SaaS) platform\'s performance, user experience, and monetization strategies.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    category: 'SaaS'
  },
  {
    id: 'content-platform-monetization',
    title: 'Content Platform Monetization',
    description: 'A case study where we implemented monetization strategies for a content-based platform, significantly increasing ad revenue and user engagement.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    category: 'Content'
  },
  {
    id: 'ecommerce-revenue-optimization',
    title: 'E-commerce Revenue Optimization',
    description: 'A project aimed at optimizing revenue streams for an e-commerce site by improving sales funnel strategies and integrating revenue-generating features.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
    category: 'E-commerce'
  }
];