const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: '[hash].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[name][hash][ext][query]',
    clean: true,
  },
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devServer: {
    static: './dist',
    port: 3002,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Rs-Lang',
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new ESLintPlugin(),
  ],
  stats: {
    errorDetails: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
