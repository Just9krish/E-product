/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or media or class
  theme: {
    extend: {
      fontFamily: {
        kumb: ["Kumbh Sans", "sans-serif"],
      },
    },
    screens: {
      extraSmall: "280px",
      mobile: "375px",
      desktop: "1440px",
    },
  },
  plugins: [],
};
