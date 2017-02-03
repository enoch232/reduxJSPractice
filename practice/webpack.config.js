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
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015"]
        }
      }
    ]
  }
}
