/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ocean-inspired palette
        'prussian-blue': '#1C4E47',
        'midnight-green': '#024D60',
        'light-sea-green': '#2CACAD',
        'sky-blue': '#76E2E0',
        'water': '#D9F5F0',
        'dark-jungle': '#122B1D',
        'william-hooker': '#637E72',
        'pistachio': '#9CC97F',
        'light-gray': '#CDDEC8',
        'pewter-blue': '#90B7BF',
        
        // Flag colors (complementary to ocean theme)
        'flag-red': '#C84B31',      // Warm coral red
        'flag-amber': '#ECAB53',    // Golden amber
        'flag-green': '#2D6A4F',    // Deep sea green
      },
    },
  },
  plugins: [],
}
