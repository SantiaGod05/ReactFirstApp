// @type {import('tailwindcss').Config} 
module.exports = {
  content: [
    './src/*.{html,js}',
    './src/components/*.{html,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"]
  }
}
