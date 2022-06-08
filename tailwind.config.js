module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#ffffff",
      dark: "#0a192f",
      blue: "#1a57db",
      pink: "#ff49db",
      yellow: "#c4bc31",
      orange: "#b78a28",
      "dark-orange": "#58400c",
      green: "#13ce66",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/line-clamp")],
};
