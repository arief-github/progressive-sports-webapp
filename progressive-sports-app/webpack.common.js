const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require("webpack");
const HtmlWebpackInjectPreload = require('@principalstudio/html-webpack-inject-preload');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const {InjectManifest} = require('workbox-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
    stats: {
      warnings: false
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
        new HtmlWebpackInjectPreload({
          files: [
            {
              match: /.*\.css$/,
              attributes: {as: 'style', type: 'text/css'},
            },
          ],
        }),
        new WebpackPwaManifest({
          name: 'Progressive Sports',
          short_name: 'PSPORTS',
          description: 'Progressive web app sports',
          start_url: './index.html',
          background_color: '#FFFFFF',
          theme_color: '#252A34',
          display: 'standalone',
          orientation: 'any',
          publicPath: './',
          filename: 'manifest.json',
          ios: true,
          icons: [
            {
              src: path.resolve(__dirname, 'src/public/icons/icon.png'),
              size: 180,
              ios: true,
            },
            {
              src: path.resolve(__dirname, 'src/public/icons/icon.png'),
              sizes: [72, 96, 128, 192, 256, 384, 512],
              purpose: 'any',
            },
          ],
        }),
        new InjectManifest({
          swSrc: path.resolve(__dirname, 'src/scripts/sw.js'),
          swDest: path.resolve(__dirname, 'dist/sw.js'),
        }),
    ],
};