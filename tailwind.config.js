/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./css/*.css"],
  theme: {
    extend: {
      fontFamily: {
        "inter": ["Inter", "sans-serif"],
      },
      colors: {
        "white": "#FFFFFF",
        "green": "#c5f82a",
        "grey-700": "#333333",
        "grey-800": "#1f1f1f",
        "grey-900": "#141414",
      }
    },
  },
  plugins: [],
}

