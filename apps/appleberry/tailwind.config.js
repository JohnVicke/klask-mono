/** @type {import('tailwindcss').Config} */
module.exports = {
  ...require("ui/tailwind.config.base.js"),
  important: true,
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
  ],
  ...require("ui/daisyConfig.js"),
};
