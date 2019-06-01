const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [path.resolve("./src"), path.resolve("./node_modules")]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html"
    }),
    new CopyWebpackPlugin(
      [
        {
          from: "./css/*.css",
          to: "./"
        }
      ],
      { copyUnmodified: true }
    )
  ],
  devServer: {
    port: 8081,
    historyApiFallback: true,
    contentBase: "./",
    proxy: {
      "/login": {
        target: "http://localhost:9000/",
        secure: false
      },
      "/logout": {
        target: "http://localhost:9000/",
        secure: false
      },
      "/graphql": {
        target: "http://localhost:9000/",
        secure: false
      }
    }
  }
};
