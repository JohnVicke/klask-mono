module.exports = {
  ...require("config/eslint-next.js"),
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
};
