/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        'slide-up': 'slide-up 1s ease-out',
        'bounce-in': 'bounce-in 1s cubic-bezier(0.36, 0, 0.66, 1)',
      },
    },
  },
  plugins: [],
};