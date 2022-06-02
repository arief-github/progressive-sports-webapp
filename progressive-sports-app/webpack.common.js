const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    entry: path.resolve(__dirname, 'src/scripts/index.js'),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
    },
    module: {
        rules: [{
                test: /\.css$/i,
                use: [
                  {
                    loader: 'style-loader',
                  },
                  {
                    loader: 'css-loader',
                  },
                  {
                    loader: 'postcss-loader',
                  }
                ],
            },
            {
              test: /\.(png|svg|jpg|jpeg|gif)$/,
              use: {
                loader: 'file-loader',
                options: {
                  outputPath: './assets/img',
                  quality: 50,
                  progressive: true,
                },
              },
            },
            {
              test: /\.html$/i,
              loader: 'html-loader',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/templates/index.html"),
            favicon: path.resolve(__dirname, 'src/public/icons/favicon.ico'),
            filename: "index.html",
        }),
        new CopyWebpackPlugin({
          patterns: [
            {
              from: path.resolve(__dirname, 'src/public/'),
              to: path.resolve(__dirname, 'dist/')
            },
          ],
        }),
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
        }),
    ],
};