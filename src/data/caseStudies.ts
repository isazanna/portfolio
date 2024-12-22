import { CaseStudy } from '../types/caseStudy';

export const caseStudies: Record<string, CaseStudy> = {
  'saas-platform-enhancement': {
    id: 'saas-platform-enhancement',
    title: 'SaaS Platform Enhancement',
    overview: 'The goal of this project was to enhance the functionality and performance of an existing Software-as-a-Service (SaaS) platform. The client was struggling with user engagement and wanted to find better ways to increase conversions and optimize their revenue generation methods.',
    approach: 'We implemented a series of user interface improvements, performance optimizations, and advanced monetization strategies that included targeted ad placements, subscription models, and feature enhancements. By focusing on the user journey, we were able to create a seamless experience that kept users engaged and coming back.',
    results: {
      text: 'Through our strategic improvements and optimizations, we achieved significant measurable results:',
      stats: [
        'Increase in user engagement by 40%',
        'Reduction in page load times by 30%',
        'Revenue growth of 25% through optimized subscription strategies'
      ]
    },
    technologies: ['React', 'Node.js', 'Google Analytics', 'Stripe Payments', 'AWS'],
    cta: 'Want to discuss how we can improve your SaaS platform\'s performance? Contact us today!'
  },
  'content-platform-monetization': {
    id: 'content-platform-monetization',
    title: 'Content Platform Monetization',
    overview: 'Our client, a popular content platform, was looking to monetize their site more effectively. With growing traffic but low revenue, they needed a comprehensive strategy to unlock their platform\'s full potential.',
    approach: 'We developed a multi-channel monetization strategy that included the integration of advertising networks, sponsored content, and premium membership subscriptions. Additionally, we improved their user engagement metrics by providing personalized content recommendations and enhancing their content discovery features.',
    results: {
      text: 'Our comprehensive approach led to remarkable improvements across key metrics:',
      stats: [
        'Increase in ad revenue by 50%',
        'Growth in premium subscriptions by 35%',
        'Higher user engagement through targeted content recommendations'
      ]
    },
    technologies: ['WordPress', 'Google AdSense', 'Amazon Affiliate Program', 'Mailchimp'],
    cta: 'Interested in improving your content platform\'s monetization strategy? Let\'s talk!'
  },
  'ecommerce-revenue-optimization': {
    id: 'ecommerce-revenue-optimization',
    title: 'E-commerce Revenue Optimization',
    overview: 'This e-commerce site was facing stagnating sales despite a strong product offering. The business needed assistance with optimizing their sales funnel and improving their customer retention strategies.',
    approach: 'We conducted an in-depth sales funnel audit and implemented strategies to increase conversions at every stage of the customer journey. This included improving the checkout process, adding upsell and cross-sell features, and integrating email marketing campaigns that targeted abandoned cart users.',
    results: {
      text: 'Our optimization efforts yielded impressive results across all key performance indicators:',
      stats: [
        'Sales increased by 40% within the first quarter',
        'Conversion rate improved by 20%',
        'Customer retention rate increased by 15%'
      ]
    },
    technologies: ['Shopify', 'Google Analytics', 'Klaviyo', 'Stripe Payments'],
    cta: 'Ready to optimize your e-commerce site and boost your revenue? Get in touch!'
  }
};