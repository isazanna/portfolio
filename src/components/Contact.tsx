import React from 'react';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Let's Talk About Your Project
          </h2>
          
          <p className="text-gray-600 text-lg mb-12">
            Ready to transform your website's monetization strategy? 
            We're here to help you maximize your revenue potential.
          </p>
          
          <a 
            href="mailto:monetize.pro.mail@gmail.com"
            className="inline-flex items-center space-x-3 text-blue-600 hover:text-blue-700 transition-colors text-xl"
          >
            <Mail className="w-6 h-6" />
            <span>monetize.pro.mail@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}
