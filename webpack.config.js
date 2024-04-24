const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Set the mode to development to enable sourcemaps
  entry: './src/index.js', // Your application entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map', // This option controls if and how source maps are generated.
  devServer: {
    static: './dist', // Tell the server where to serve content from
    port: 3000, // Port to run the devserver
    open: true, // Open the browser after server had been started
    hot: true, // Enable webpack's Hot Module Replacement feature
    devMiddleware: {
      publicPath: '/', // Public URL of the output directory when referenced in a browser
      writeToDisk: true // Write files to disk in dev mode, useful for other middleware
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};