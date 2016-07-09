config = {
  entry: "./gameTickLoop.js",
  output: {
    filename: "main.js",
    path: "./",
    library: "loop",
    libraryTarget: "commonjs2"
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel",
        query:{
          presets: ['es2015', "stage-2"],
        }
      }
    ]
  }
}
module.exports = config;