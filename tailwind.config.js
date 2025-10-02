/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lily-white': '#FFFFFF',
        'soft-cream': '#FFF8F0',
        'sage-stem': '#7CB342',
        'soft-mint': '#A5D6A7',
        'deep-forest': '#558B2F',
        'blush-petal': '#FFB6C1',
        'dew-blue': '#81D4FA',
        'soft-gold': '#FFD54F',
        'warm-amber': '#FFB74D',
        'gentle-coral': '#FF8A80',
        'yellow-flag': '#FFF176',
      },
    },
  },
  plugins: [],
}
