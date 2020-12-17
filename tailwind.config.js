const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./pages/*.js",
    "./pages/**/*.js",
    "./components/*.js",
    "./components/**/*.js",
  ],
  theme: {
    theme: {
      screens: {
        xs: "450px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    extend: {
      colors: {
        "grey-chez": {
          300: "#CBCFCD",
          400: "#9BA19A",
          500: "#8D8B8C",
        },
        brown: {
          500: "#7E7464",
        },
        dark: {
          500: "#23261E",
          450: "hsla(83,12%,13%,0.4)",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
