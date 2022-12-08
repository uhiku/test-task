/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    colors: {
      /**
       * Light scheme
       */
      "primary-bg-light": "rgba(185,221,253, 1)",
      "secondary-bg-light": "rgba(255,255,255, 0.4)",

      "primary-btn-light": {
        DEFAULT: "rgba(255,255,255, 1)",
        100: "rgba(209,209,209, 0.8)",
      },
      "secondary-btn-light": {
        DEFAULT: "rgba(106,167,255, 1)",
        100: "rgba(106,167,255, 0.8)",
      },

      /**
       * Dark scheme
       */
      "primary-bg-dark": "rgba(125,159,188, 1)",
      "secondary-bg-dark": "rgba(255,255,255, 0.2)",

      "primary-btn-dark": {
        DEFAULT: "rgba(195,195,195, 1)",
        100: "rgba(195,195,195, 0.6)",
      },
      "secondary-btn-dark": {
        DEFAULT: "rgba(23,99,180, 1)",
        100: "rgba(23,99,180, 0.8)",
      },

      /**
       * Common
       */
      white: "#ffffff",
      black: "#000000",
    },
    fontFamily: {
      sans: ["Barlow", "Arial", "sans-serif"],
    },
  },
  variants: {},
  plugins: [],
};
