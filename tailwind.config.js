/** @type {import('tailwindcss').Config} */
module.exports = {
  content: 
  [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('../img/Main_dark.jpg')",
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'link': '#2ab7f9',
      }),
      textColor: {
        'link': '#2ab7f9',
      },
      borderColor: {
        'link': '#2ab7f9',
      },
      boxShadowColor: {
        'link': '#2ab7f9',
      }
    },
  },
  plugins: [],
}
