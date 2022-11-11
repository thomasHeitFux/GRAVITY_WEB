/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'headerbg': "url('https://res.cloudinary.com/ddkurzft6/image/upload/v1668180959/gravity/assets/portada-web-con-filtro_pzxccm.jpg')",
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
