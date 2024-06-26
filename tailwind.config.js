/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Karla", "sans-serif"],
      },
      backgroundImage: {
        imgMainSec: `url("./Main/main.svg")`,
      },
    },
  },
  plugins: [],
};
