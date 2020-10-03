const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const config = {
  mode: 'production',
  entry: {
    'index': './src/index.ts',
  },
  output: {
    filename: 'date-formatter.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'smDate'
  },
  resolve: {
    extensions: ['.ts', '.d.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};

module.exports = [config];
