/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Nirmala UI'],
        'body': ['Nirmala UI'],
      },
      boxShadow: {
        'card' : '-17px 11px 21px -1px rgba(87, 87, 87, 0.137)'
      }
    },
  },
  plugins: [],
}
