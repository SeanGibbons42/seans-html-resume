const path = require('path');
//import hwp since its a webpack plugin
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //where to start building the dependency tree
  entry: "./src/app.js",

  //where to put the bundle
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist')
  },

  //module is where our loaders go:
  module: {
    rules: [
      {
        test: /\.css/,
        use: [{loader: "style-loader"}, {loader: "css-loader"}]
      }
    ]
  },

  // plugin configuration
  plugins: [
    new htmlWebpackPlugin({
      title: "Webpack Output",
      template: 'dist/index.html'
    })
  ],

  // setup for the auto-refresh server
  devServer: {
    contentBase: './dist',
    open: true,
  }
}
