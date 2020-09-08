const path = require('path');
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );

module.exports = {
    entry: { main: './src/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
               test: /\.css$/,
               exclude: /node_modules/,
               loaders: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins: [
      new HtmlWebPackPlugin({
         template: path.resolve( __dirname, './public/index.html' ),
         filename: 'index.html'
      })
    ]
};
