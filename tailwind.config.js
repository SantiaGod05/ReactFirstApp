// @type {import('tailwindcss').Config} 
module.exports = {
  content: [
    './src/*.{html,js}',
    './src/components/*.{html,js}',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"]
  }
}
