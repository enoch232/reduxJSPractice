module.exports = {
  entry: "./index.js",
  output: {
    path: "./src/js/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /.js/,
        loader: "babel-loader",
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }

}
