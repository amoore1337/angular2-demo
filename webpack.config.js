const { CheckerPlugin } = require('awesome-typescript-loader');
const webpack = require('webpack');
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

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
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    { loader: 'ng-router-loader' },
                    { loader: 'awesome-typescript-loader' },
                    { loader: 'angular2-template-loader' }
                ]
            },
            {
                test: /\.less$/,
                exclude: [ path.resolve(__dirname, './src/styles') ],
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
            {
                test: /\.less$/,
                include: [ path.resolve(__dirname, './src/styles') ],
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader'},
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

        new CopyWebpackPlugin([{ from: './src/assets', to: 'assets' }]),

        new CheckerPlugin(),

        new HtmlWebpackPlugin({ template: 'src/index.html', chunksSortMode: 'dependency', inject: 'head' }),

        new ScriptExtHtmlWebpackPlugin({ defaultAttribute: 'defer' })
    ]
};

module.exports = config;
