const { grey } = require('color-name')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {

      colors:{
        primary: "#e11931",
        secondary:"#5bbd80",
        lightGrey: "#f8f9fa",
        gray: "#4a4b4f"
      },
      fontSize:{
        huge: 'clamp(2rem, 6vw, 3rem)',
      },

      fontFamily:{
        roboto: ['Roboto', 'san-serif']
      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
       '2xl': '1496px',
      },
    }
  },
  plugins: [],
}
