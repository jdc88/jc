/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        obitron: ["Orbitron", "sans-serif"],
      },
      animation: {
        twinkle: "twinkle 5s infinite",
        "shooting-star": "shooting-star 1s linear",
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "1" },
        },
        "shooting-star": {
          from: { transform: "translate(0, 0) scale(1)", opacity: "1" },
          to: { transform: "translate(-500px, 300px) scale(0.5)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
