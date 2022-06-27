const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
const CopyWebpackPlugin =require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'src/scripts/index.js'),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].bundle.js",
  },
    module: {
      rules: [
        {
          test: /\.(jpe?g|png|gif|svg|webp)$/i,
          type: "asset",
        },
        {
          test: /\.css$/i,
          exclude: '/node_modules/',
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
              test: /\.(png|svg|jpg|jpeg|gif|webp)$/,
              use: [
                'file-loader',
              ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/templates/index.html"),
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
        // new CompressionPlugin({
        // test: /\.(js|css|html|svg)$/,
        // filename: "[path][base].gz",
        // algorithm: "gzip",
        // compressionOptions: { level: 9, chunkSize: 32 * 1024 },
        // minRatio: 0.8,
        // threshold: 10240,
        // minRatio: 0.8,
        // deleteOriginalAssets: true,
        // }),
    ],
};