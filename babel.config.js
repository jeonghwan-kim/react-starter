module.exports = {
  presets: [
    ["@babel/preset-react"],
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: ["last 2 chrome versions"],
        },
      },
    ],
    ["@babel/preset-typescript"],
  ],
};
