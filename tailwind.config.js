/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // screens: {
    //   tablet : "690px",
    //   mobile : "375px",
    // },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat Alternates', 'sans-serif'], // Use Montserrat Alternates as default sans font
        tomorrow: ['Tomorrow', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

