"use strict";

module.exports = {
  mode: "development",
  entry: "./client/index.js",
  output: {
    path: __dirname,
    filename: "./public/bundle.js",
  },
  devtool: "source-map",
  resolve: {
    extensions: [ ".js", ".jsx"],
  },
  devServer: {
    publicPath: "/",
    contentBase: "./public",
    hot: true,
    inline: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
