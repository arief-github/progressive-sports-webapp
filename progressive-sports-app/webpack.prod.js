const {merge} = require('webpack-merge');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const {InjectManifest} = require('workbox-webpack-plugin');

const path = require('path');
const common = require('./webpack.common');
//optimization
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = merge(common, {

  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              generatorOpts: { compact: false },
            },
          },
        ],
      }
    ],
  },
  plugins: [

    new MiniCssExtractPlugin({filename: 'assets/css/[hash].css'}),
    // new BundleAnalyzerPlugin(),
    new InjectManifest({
      swSrc: path.resolve(__dirname, 'src/scripts/sw.js'),
      swDest: path.resolve(__dirname, 'dist/sw.js'),
    }),

  ],

  optimization: {
    minimizer: [

      new ImageMinimizerPlugin({
        minimizer: {

          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ["optipng", { optimizationLevel: 5 }]
            ],
          },
        },
      }),
    ],

  },
});