module.exports = {
  devtool: 'source-map',
  entry: './src/client/index.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },

  devServer: {
    port: 3000,
    contentBase: './build',
    inline: true,
    proxy: {
     '/api': {
       target: 'http://localhost:1337',
       secure: false
     }
   }
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  }
};
