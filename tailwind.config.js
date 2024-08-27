/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'red': '#ed0750',
      'white': '#ffffff',
      'gold': '#ff9933',
      'black': '#211c45',
      'purple': '#6050dc'
    },
    fontFamily: {
      rem: ['REM', 'sans-serif']
    },
    plugins: [],
  }
}

