import React from 'react';
import { ArrowRight } from 'lucide-react';
import Logo from './Logo';

export default function Hero() {
return (
<div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-white">
<div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
<div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen">
<div className="mb-8 animate-fade-in">
<Logo
iconClassName="w-10 h-10 text-blue-600"
textClassName="text-4xl md:text-6xl font-bold text-gray-900"
/>
</div>

<h2 className="text-xl md:text-3xl text-gray-700 text-center max-w-3xl mb-8 animate-slide-up">
Unlock Your Website's Earning Potential with Next-Gen Solutions
</h2>

<button className="group flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 animate-bounce-in">
<span className="text-lg font-semibold">Get Started</span>
<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
</button>
</div>
</div>
);
}