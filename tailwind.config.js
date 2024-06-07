/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",

  ],
  theme: {
    container: {
      padding:'2rem',
      center: true
    },
    extend:{
      fontFamily:{
        poppins: ["Poppins", "sans-serif"],
      },
      colors:{
        primary: "#6b21a8",
        secondary:"#9333ea"
      }
    },
    
  },
  plugins: [require("tailwindcss-animate")],
}

