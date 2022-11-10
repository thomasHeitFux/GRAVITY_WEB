/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'headerbg': "url('./src/assets/portada-web-con-filtro.jpg')",
      },
      colors: {
        "azul": "#0D2633",
        "naranja": "#f5b45f"
      },
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

// import headerbg from "./src/assets/portada-web-con-filtro"
