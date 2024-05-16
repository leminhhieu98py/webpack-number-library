const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/functions/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-number-library.js',
    globalObject: 'this',
    library: {
      name: 'webpackNumber',
      type: 'umd'
    }
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    }
  }
};
