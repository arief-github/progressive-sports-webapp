const {merge} = require('webpack-merge');
const HtmlWebpackInjectPreload = require('@principalstudio/html-webpack-inject-preload');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const {InjectManifest} = require('workbox-webpack-plugin');
const path = require('path');
const common = require('./webpack.common');

//analyzer
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

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
              exclude: '/node_modules/',
            },
          },
        ],
      },
        {
          test: /\.(png|jpg|jpeg)$/i,
          exclude: '/node_modules/',
          use: {
            loader: 'responsive-loader',
            options: {
              name: '[name].[ext]',
              adapter: require('responsive-loader/sharp'),
              outputPath: './assets/image',
              quality: 40,
              progressive: true,
            },
          },
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
          exclude: '/node_modules',
        },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new HtmlWebpackInjectPreload({
      files: [
        {
          match: /.*\.css$/,
          exclude: '/node_modules',
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
      publicPath: '../../',
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
      swSrc: './src/scripts/sw.js',
      swDest: 'sw.js',
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