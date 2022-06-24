const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'src/scripts/index.js'),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].bundle.js",
      assetModuleFilename: 'assets/[name].[ext]',
      clean:true,
  },
    module: {
      rules: [
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
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
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src/templates/index.html"),
        favicon: path.resolve(__dirname, 'src/public/icons/favicon.ico'),
        filename: "index.html",
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      options: {
        limit: 10 * 1024,
        noquotes: true
      }
    }),
    new CompressionPlugin({
      test: /\.(js|css|html|svg)$/,
      filename: "[path][base].gz",
      algorithm: "gzip",
      compressionOptions: { level: 9, chunkSize: 32 * 1024 },
      minRatio: 0.8,
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: true,
    }),
],


};