/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'Nunito': ["Nunito Sans", 'sans-serif'],
      },
      backgroundColor: {
        'systemGray': '#8E8E93',
        'systemGray2': '#636366',
        'systemGray3': '#48484A',
        'systemGray4': '#3A3A3C',
        'systemGray6': '#1C1C1E',
      },
      textColor: {
        'systemGray': '#8E8E93',
        'systemGray2': '#636366',
        'systemGray3': '#48484A',
        'systemGray4': '#3A3A3C',
        'systemGray6': '#1C1C1E',
      },
    },
  },
  plugins: [],
}

