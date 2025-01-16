/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#f42c37",
        secondary: "#f42c37",
        caroWhite: "#eeeeee"

      },
      container: {
        center:true,
        padding: {
          DEFAULT: "1rem",
          sm:"3rem",
        }
      }
    },
  },
  plugins: [
    // require('tailwind-scrollbar-hide'),
  ],
}