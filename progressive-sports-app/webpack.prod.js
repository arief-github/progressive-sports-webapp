const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');

const path = require('path');
const common = require('./webpack.common');

//analyzer
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

//optimization
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = merge(common, {

    mode: 'production',
    module: {
        rules: [{
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                }, ],
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

        new MiniCssExtractPlugin({ filename: 'assets/css/[hash].css' }),
        new BundleAnalyzerPlugin(),
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