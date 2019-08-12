var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "production",

  entry: "./src/assets/index.js",
  output: {
    path: `${__dirname}/dist`,
    filename: "main.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template:  './src/views/index.ejs'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env"
              ]
            }
          }
        ]
      }
    ]
  }
};
