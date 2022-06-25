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
<<<<<<< HEAD
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 70000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
=======

>>>>>>> ea7d8fe6c3841aedb86e1fa435aa8d56fbe44e82
  },
});