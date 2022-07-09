/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {},
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        klask: {
          primary: "#8ebbff",
          secondary: "#EAB0E7",
          accent: "#1FB2A6",
          neutral: "#2F3855",
          "base-100": "#24293e",
          info: "#8A99EC",
          success: "#A7F2A0",
          warning: "#F3F1B7",
          error: "#F39C9C",
        },
      },
    ],
  },
};
