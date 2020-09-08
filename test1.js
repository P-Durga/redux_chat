
const path = require('path');
const webpack = require('webpack');

// const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebPackPlugin = require( 'html-webpack-plugin' );

/* const extractPlugin = new ExtractTextPlugin({
   filename: './style.css'
});
 */
//const config = require('./src/config-dev.json');

module.exports = {
   context: __dirname,
   entry: './src/index.js',
   output: {
      path: path.resolve( __dirname, 'dist' ),
      filename: 'bundle.js',
      publicPath: '/',
   },
   devServer: {
      historyApiFallback: true
   },
   module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['@babel/react', '@babel/es2015'],
            plugins: ['@babel/proposal-class-properties']
          }
         },
         { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
         },        
         {
            test: /\.(png|j?g|svg|gif)?$/,
            use: 'file-loader'
         },
         {
            test: /\.html$/,
            use: [
                {
                    loader: "html-loader"
                }
            ]
        }
]
   },
   plugins: [
      new HtmlWebPackPlugin({
         template: path.resolve( __dirname, './public/index.html' ),
         filename: 'index.html'
      })
      /* ,
      extractPlugin,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            config: JSON.stringify(config)
        }) */
   ]
};


/*    [ "@babel/env", {
     "modules": false,
     "targets": {
    "browsers": [
      "last 2 Chrome versions",
      "last 2 Firefox versions",
      "last 2 Safari versions",
      "last 2 iOS versions",
      "last 1 Android version",
      "last 1 ChromeAndroid version",
      "ie 11"
    ]
     }
   } ],
   "@babel/react"
    ],
 */  