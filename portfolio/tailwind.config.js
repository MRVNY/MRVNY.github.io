/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    cursor: {
      pixel: 'url(assets/cursor.png), default',
      hand: 'url(assets/pointer.png), pointer',
    },
    extend: {      
      //fonts
      fontFamily: {
        'times': ['Times New Roman', 'serif'],
        'pixel':  ["VT323", 'monospace'],
        'avenir': ['Avenir', 'sans-serif'],
      },
        
      overflow: {
        'hidden': 'hidden',
      },
      
    },
  },
  plugins: [],
}