module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.jsx',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      // use: ['babel-loader']
      loader: 'babel-loader',
      options: {'presets': ["@babel/preset-env", "@babel/preset-react"] }
    }]
  },
};