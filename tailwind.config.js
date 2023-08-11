/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#11009E",
        secondary: "#4942E4",
        tertiary: "#8696FE",
        accent: "#C4B0FF",
        white: "#fff",
        dark: "#110E29",
      },
      fontFamily: {
        sans: ["Roboto"],
        serif: ["Roboto Slab"],
      },
    },
  },
  plugins: [],
};
