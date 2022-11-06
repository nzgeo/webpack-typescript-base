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
  entry: './src/ts/index.ts',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
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
    extensions: ['.tsx', '.ts', '.js'],
  },
};
