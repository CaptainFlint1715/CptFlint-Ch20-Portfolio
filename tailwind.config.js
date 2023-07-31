/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'red': '#45172d',
      'white': '#ffffff',
      'gold': '#ff9933',
      'black': '#000000',
      'purple': '#6050dc'
    },
    fontFamily: {
      rem: ['REM', 'sans-serif']
    },
    plugins: [],
  }
}
