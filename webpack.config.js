const path = require("path");
const HWP = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: path.join(__dirname, "index.js"),
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "/dist"),
    chunkFilename: "[name].bundle.js",
    publicPath: ""
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  performance: {
    maxAssetSize: 1050000,
    maxEntrypointSize: 2740000,
    hints: "error"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /(\.s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      },

      {
        test: /(\.(jpg|png))$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000,
              name: "images/[hash]-[name].[ext]",
              esModule: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HWP({ template: "public/index.html" }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ]
};
