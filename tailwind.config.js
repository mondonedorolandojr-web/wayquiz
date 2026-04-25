/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-dark': '#141a2a',
        'navy-light': '#2f364a',
        'teal-primary': '#63b7b6',
        'teal-light': '#6edbd5',
        'yellow-accent': '#f2e9b8',
        'blue-light': '#d8e3ec',
        'button-dark': '#1b2236',
        'text-gray': '#9aa5a7',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
}