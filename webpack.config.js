module.exports = {
  devtool: 'inline-source-map',
  entry: './client/src/index.jsx',
  output: {
    path: __dirname + '/public/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './public/dist',
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