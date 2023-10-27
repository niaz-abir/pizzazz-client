/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "Charis SIL",
      },
      colors: {
        primary: {
          50: "#e6e6e6",
          100: "#d9d9d9",
          200: "#c2c2c2",
          300: "#a1a1a1",
          400: "#787878",
          500: "#5e5e5e",
          600: "#4d4d4d",
          700: "#404040",
          800: "#363636",
          900: "#2e2e2e",
          950: "#000000",
        },
        secondary: {
          50: "#ffe0e5",
          100: "#ffd1d7",
          200: "#ffb8c0",
          300: "#ff8f9e",
          400: "#ff5c72",
          500: "#f82a46",
          600: "#de172e",
          700: "#b51228",
          800: "#911221",
          900: "#7a1522",
          950: "#39050b",
        },
        ternary: {
          50: "#d6ffe7",
          100: "#bdffdd",
          200: "#99ffcc",
          300: "#5cffad",
          400: "#25f88f",
          500: "#04c866",
          600: "#00a34f",
          700: "#02793d",
          800: "#065b32",
          900: "#074628",
          950: "#001a0e",
        },
      },
      keyframes: {
        blob: {
          "0%, 100%": {
            transform: "translate(0) scale(1)",
          },
          "33.33%": {
            transform: "translate(5%, 5%) scale(1.1)",
          },
          "66.66%": {
            transform: "translate(-5%, -5%) scale(0.9)",
          },
        },
      },
      animation: {
        blob: "blob 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
