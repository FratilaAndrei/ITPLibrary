/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "carrousel-color": "#F3F1EE",
        "gray-color": "#595959",
        "footer-color": "#D5D4D0",
        "beige-color": "#B69454",
        "white-color": "#FFFFFF",
        "logo-color": "#272727",
        "normal-black-color": "#262626",
        "important-black-color": "#000000",
      },
      fontFamily: {
        lora: ["Lora"],
        roboto: ["Roboto"],
      },
      screens: {
        xs: "425px",
      },
    },
  },
  plugins: [],
};
