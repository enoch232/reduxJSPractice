module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: './src/js/'
  },
  module: {
    loaders: [
      {
        test: /.js/,
      	loader: 'babel-loader',
      	query: {
                presets: ['react', 'es2015']
      	}
      }
    ]
  }

}

