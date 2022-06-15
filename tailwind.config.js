module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "rotar-slow": "rotar 45s linear infinite",
        "rotar-fast": "rotar 15s linear infinite",
      },
      keyframes: {
        rotar: {
          from: {
            transform: "rotateY(0deg)",
          },
          to: { transform: "rotateY(360deg)" },
        },
      },
    },
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
    transform: {
      // defaults to this value
      none: "none",
    },
    transformOrigin: {
      // defaults to these values
      t: "top",
      tr: "top right",
      r: "right",
      br: "bottom right",
      b: "bottom",
      bl: "bottom left",
      l: "left",
      tl: "top left",
    },
    translate: {
      // defaults to {}
      none: "0",
      "1/2": "50%",
      full: "100%",
      "right-up": ["100%", "-100%"],
      "3d": ["40px", "-60px", "-130px"],
    },
    scale: {
      // defaults to {}
      90: "0.9",
      100: "1",
      110: "1.1",
      "-100": "-1",
      "stretched-x": ["2", "0.5"],
      "stretched-y": ["0.5", "2"],
      "3d": ["0.5", "1", "2"],
    },
    rotate: {
      // defaults to {}
      "-20": "-20deg",
      90: "90deg",
      180: "180deg",
      270: "270deg",
      "3d": ["0", "1", "0.5", "45deg"],
    },
    skew: {
      // defaults to {}
      "-5": "-5deg",
      5: "5deg",
    },
    perspective: {
      // defaults to {}
      none: "none",
      250: "250px",
      500: "500px",
      750: "750px",
      1000: "1000px",
      2000: "2000px",
    },
    perspectiveOrigin: {
      // defaults to these values
      t: "top",
      tr: "top right",
      r: "right",
      br: "bottom right",
      b: "bottom",
      bl: "bottom left",
      l: "left",
      tl: "top left",
    },
  },
  darkMode: "class",
  variants: {
    // all the following default to ['responsive']
    transform: ["responsive"],
    transformOrigin: ["responsive"],
    translate: ["responsive"],
    scale: ["responsive"],
    rotate: ["responsive"],
    skew: ["responsive"],
    perspective: ["responsive"],
    perspectiveOrigin: ["responsive"],
    transformStyle: ["responsive"],
    backfaceVisibility: ["responsive"],
    transformBox: ["responsive"],
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwindcss-transforms")({
      "3d": true, // defaults to false
    }),
  ],
};
