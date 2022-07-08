/** @type {import('tailwindcss').Config} */
module.exports = {
  ...require("ui/tailwind.config.base.js"),
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["synthwave"],
  },
};
