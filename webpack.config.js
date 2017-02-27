const { CheckerPlugin } = require('awesome-typescript-loader');
const webpack = require('webpack');
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
    entry: {
        'polyfills': './src/polyfills',
        'main': './src/main'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: 'awesome-typescript-loader' }
            // { test: /\.json$/, loader: 'json-loader' },
            // { test: /\.html/, loader: 'html-loader?minimize=false' },
            // { test: /\.styl$/, loader: 'css-loader!stylus-loader' },
            // { test: /\.css$/, loader: 'style-loader!css-loader' }
        ]
    },
    plugins: [
        // Fixes Angular 2 error
        new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/, __dirname),

        new CopyWebpackPlugin([{ from: './src/index.html' }], {}),

        new CheckerPlugin()
    ]
};

module.exports = config;
