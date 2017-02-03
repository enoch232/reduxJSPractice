module.exports = {
  entry: "./index.js",
  output: {
    path: "./src/js/",
    filename: "index.js"
  },
  module: {
    loaders: [
      {
        test: "/.js/",
        loader: "babel",
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }

}
