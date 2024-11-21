/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        "im" : "1680px",
      },
      fontFamily: {
        montserrat: ['Montserrat Alternates', 'sans-serif'], // Use Montserrat Alternates as default sans font
        tomorrow: ['Tomorrow', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

