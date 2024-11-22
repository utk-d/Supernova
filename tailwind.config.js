/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        "im43" : "1640px",
        "i21" : "1400px",
        "i21+" : "1551px",
        "im21" : "1220px",
        "im1" : "1180px",
      },
      fontFamily: {
        montserrat: ['Montserrat Alternates', 'sans-serif'], // Use Montserrat Alternates as default sans font
        tomorrow: ['Tomorrow', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

