const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  devServer: {
    client: {
      overlay: false,
    },
    static: ['./', 'node_modules'],
  },
  devtool: 'inline-source-map',
  entry: './src/js/index.js',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  output: {
    clean: true,
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    runtimeChunk: 'single',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
      filename: './index.html', // relative to root of the application
    }),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    alias: {
      '~': path.resolve('./node_modules'),
    },
  },
};
