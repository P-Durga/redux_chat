
// "main": "index.js", - package.json

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
        context: __dirname + '/src',
        entry: path.resolve(__dirname, 'src', 'index.jsx'),
               
   //   entry: "./src/index.jsx",
      output: {
          path:__dirname+ '/dist/',
          filename: "bundle.js",
          publicPath: '/'
      },
      devServer: {
          inline: false,
          contentBase: "./dist",
      },
      devServer: {
        contentBase:  path.resolve(__dirname, 'dist'),
        port: 9000
      },
      module: {
          rules: [
            {
              test: /\.css$/,
              use: [
                'style-loader',
                'css-loader',
              ],
            },
              {
                  test: /\.jsx?$/, 
                  loader: 'babel-loader',
              }
          ]
          
        },
    // add a custom index.html as the template
  plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') })]
};


/* module.exports = {
  // the output bundle won't be optimized for production but suitable for development
  mode: 'development',
  // the app entry point is /src/index.js
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
  	// the output of the webpack build will be in /dist directory
    path: path.resolve(__dirname, 'dist'),
    // the filename of the JS bundle will be bundle.js
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        // use the babel-loader for transpiling JavaScript to a suitable format
//          loader: 'babel-loader',
          loader: 'babel',
        // for any file with a suffix of js or jsx
  //         test: '/\.(js|jsx)$/', '/\.jsx?$/',
          test: '/\.jsx?$/',
  // ignore transpiling JavaScript from node_modules as it should be that state
           exclude: /node_modules/,
           query: {
                cacheDirectory: true,
                presets: ['react', 'es2015']
            },
        options: {
          // attach the presets to the loader (most projects use .babelrc file instead)
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      }
    ] */
