/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["../**/*.{html,js}"],

  theme: {
    extend: {
      colors: {
        "brand-color-purple": "#8958ff",
        "brand-color-paper": "#ffe3bd",
        "dark-10": "#000014",
        "light-10": "#ffffff",
      },
    },
    fontFamily: {
      body: ["Jolly Lodger, system-ui"],
      inter: ["Inter, sans-serif"],
    },
  },
  plugins: [],
};
