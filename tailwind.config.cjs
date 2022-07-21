/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,jsx,tsx,js}'],
  theme: {
    extend: {
      colors: {
        accent: '#8fff6d',
        'accent-bg-color': '#0b151b',
        'bg-color': '#0f191f',
        'border-color': '#203f57',
      },
    },
  },
  plugins: [],
};
