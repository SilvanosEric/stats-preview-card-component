/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        "main-bg": "hsl(233, 47%, 7%)",
        "card-bg": "hsl(244, 38%, 16%)",
        accent: "hsl(277, 64%, 61%)",
        "n-white": "hsl(0, 0%, 100%)",
        "main-p": "hsla(0, 0%, 100%, 0.75)",
        "stats-heading": "hsla(0, 0%, 100%, 0.6)",
      },
      fontSize: {
        body: "15px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lexend: ["Lexend Deca", "sans-serif"],
      },
    },
  },
  plugins: [],
};
