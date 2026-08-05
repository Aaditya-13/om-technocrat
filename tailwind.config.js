/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-gray': '#F8F9FA',
        orange: {
          DEFAULT: '#FF6B00',
          hover: '#E55F00',
          light: 'rgba(255, 107, 0, 0.08)',
          glow: 'rgba(255, 107, 0, 0.25)',
        },
        charcoal: '#111111',
        'dark-gray': '#1a1a2e',
        'text-secondary': '#666666',
        border: '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
