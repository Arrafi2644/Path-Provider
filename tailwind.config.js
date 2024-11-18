/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['"Roboto", sans-serif'],
      },
      colors: {
        primary: '#F7F8FA',
        secondary: '#2C2C2C',
        third: '#008080'
      }
    },
  },
  plugins: [require('daisyui'),],
}