module.exports = {
  presets: [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        modules: false,
      },
    ],
  ],
  env: {
    test: {
      presets: [["@babel/preset-env", { modules: "cjs" }]],
    },
  },
};
