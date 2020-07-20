const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/frontend",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public/dist"),
  },
  resolve: {
    // 파일 확장자 처리
    extensions: [".ts", ".tsx", ".js"],
  },
  // todo: watch 옵션 동작 안함
  watch: true,
  watchOptions: {
    ignored: [/node_modules/, /(?!src\/frontend\/.*)/, "src/index.tsx"],
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /.s?css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
