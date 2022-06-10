module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      dark: "#111827",
      "gray-dark": "#1f2937",
      gray: "#374151",
      "gray-light": "#6b7280",
      white: "#ffffff",
      "my-theme": "#b78a28",
      "my-theme-dark": "#078860",
      gold: "#ecc94b",
      blue: "#0074cc",
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/line-clamp")],
};
