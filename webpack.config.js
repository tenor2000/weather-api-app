const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: "development",
    devServer: {
        static: './dist',
        hot: true,
        port: 9000,
    },
    entry: {
        app: './src/index.js',
    },
    module: {
        rules: [
            {
            test: /\.css$/, // Match CSS files
            use: ['style-loader', 'css-loader']
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: "API Weather"
        }),
        new webpack.DefinePlugin({
            'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
        }),
    ],
};