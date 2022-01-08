const path = require("path");

module.exports = {
  entry: ["core-js/stable", "regenerator-runtime/runtime", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "public/scripts"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    historyApiFallback: true,
    devMiddleware: {
      writeToDisk: true,
    },
    allowedHosts: "auto",
  },
  devtool: "source-map",
};
