/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        script: ["Great Vibes", "cursive"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};

