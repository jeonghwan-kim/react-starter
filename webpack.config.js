const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/frontend/index.tsx",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/",
  },
  resolve: {
    // 파일 확장자 처리
    extensions: [".ts", ".tsx", ".js"],
  },
  devServer: {
    contentBase: "./dist",
    // historyApiFallback: {
    //   disableDotRule: true,
    // },
    overlay: true,
    stats: "errors-only",
    publicPath: "/",
    open: true,
    hot: true,
    before: (app) => {
      app.get("/api/profile", (req, res) => {
        setTimeout(() => {
          res.json({ id: 1, name: "user1" });
        }, 200);
      });
    },
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
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
