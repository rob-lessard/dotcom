const webpack = require("webpack");
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        historyApiFallback: true,
        static: './dist',
    },
    plugins: [
        new BundleAnalyzerPlugin()
    ]
});
