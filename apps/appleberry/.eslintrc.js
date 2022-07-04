module.exports = {
  ...require("config/eslint-next.js"),
  settings: {
    next: {
      rootDir: "./",
    },
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
};
