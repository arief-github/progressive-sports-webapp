module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {},
    creens: {
      'mobile': '410px', 
      // => @media (min-width: 410px) { ... }

      'tablet': '640px', 
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [
     require('tailwindcss-skip-link')(),
  ],
  darkMode: 'class',
}
