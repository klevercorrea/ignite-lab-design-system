/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xs: 14,
        sm: 16,
        md: 18,
        lg: 20,
        xl: 24,
        "2xl": 32,
      },
      colors: {
        transparent: "transparent",

        black: "#000000",
        white: "#FFFFFF",

        gray: {
          900: "#121214",
          800: "#202024",
          700: "#7c7c8a",
          600: "#e1e1e6",
          500: "#c4c4cc",
        },

        cyan: {
          500: "#81d8f7",
          400: "#9be1fb",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
