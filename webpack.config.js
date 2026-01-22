const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/js/main.js",
  output: {
    filename: "js/[name].[contenthash].js", // Hash zapobiega problemom z cache (Efficient cache lifetimes)
    path: path.resolve(__dirname, "dist"),
    clean: true, // Czyści folder dist przed każdym buildem
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // style-loader
          "css-loader",
          "sass-loader"
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", 
    }),
    new MiniCssExtractPlugin({
      filename: "css/style.[contenthash].css",
    }),
  ],
  devServer: {
    static: "./dist",
    open: true,
  },
};