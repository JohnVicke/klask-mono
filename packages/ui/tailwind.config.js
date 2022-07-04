/** @type {import('tailwindcss').Config} */
module.exports = {
  ...require("./tailwind.config.base.js"),
  theme: {
    colors: {
      midnight: "#000",
    },
  },
  content: ["./**/*.{js,ts,jsx,tsx}"],
};
