const { CheckerPlugin } = require('awesome-typescript-loader');
const webpack = require('webpack');
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
    entry: {
        'polyfills': './src/polyfills',
        'vendor': './src/vendor',
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
            {
                test: /\.ts$/,
                use: [
                    { loader: 'awesome-typescript-loader' },
                    { loader: 'angular2-template-loader' }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    { loader: 'to-string-loader' },
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    { loader: 'postcss-loader',
                        options: {
                            plugins: function () { return [ require('autoprefixer') ]; }
                        }
                    },
                    { loader: 'less-loader' }
                ]
            },
            { test: /\.html$/, use: 'raw-loader', exclude: [ './src/index.html' ] }
        ]
    },
    plugins: [
        // Fixes Angular 2 error
        new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/, __dirname),

        new webpack.optimize.CommonsChunkPlugin({ name: ['app', 'vendor', 'polyfills'] }),

        new CopyWebpackPlugin([{ from: './src/index.html' }], {}),

        new CheckerPlugin()
    ]
};

module.exports = config;
