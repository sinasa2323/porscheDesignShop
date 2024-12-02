/** @type {import(‘tailwindcss’).Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    
    extend: {
      
      backgroundImage: {
        'topBg': "url('../img/car.jpg')",
        'topBg2': "url('../img/car2.jpg')",
        'sec3Bg': "url('../img/man.jpg')",
        'sec5Bg': "url('../img/bgsec5.jpg')",
      },
      boxShadow: {
        'myShadow': 'inset 0 -172px 140px rgba(0, 0, 0, 0.7)',
        'myShadow2': 'inset 0 56px 31px rgba(0, 0, 0, 0.9)',
      }
    },
  },
  plugins: [],
}