/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './HeroSection.jsx'
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1f1f1f',
        cream: '#f7f3eb',
        gold: '#d7b56d',
        'brand-green': '#8CC63F', // Light green from logo
        'brand-dark-green': '#006837', // Dark green from logo
      },
      borderRadius: {
        '3xl': '32px'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        zentry: ['Oswald', 'sans-serif'],
      }
    }
  },
  plugins: []
};
