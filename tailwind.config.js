/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    // darkMode: 'class',
    extend: {
      color : {
        // primary: 'rgb(var(--color-primary)' ,
        'primary': 'var(--color-primary)',
        'black-125': 'var(--black-125)',
        'purple' : 'var(--color-purple)',


      },
    },
  },
  plugins: [],
}