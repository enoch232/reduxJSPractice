module.exports = {
  entry: "./app.js",
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
          presets: ["es2015", "react"]
        }
      }
    ]
  }
}
