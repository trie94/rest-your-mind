const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const glob = require('glob');

// let files = glob.sync('./worlds/**/*');
// console.log("files in the worlds!: ", files);

module.exports = {
    entry: ['./index.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        chunkFilename: 'chunks/[id].[chunkhash].js',
        publicPath: '/'
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }
        },
        {
            test: /\.html$/,
            use: {
                loader: 'html-loader',
                options: { minimize: true }
            }
        },
        {
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        },
        {
            test: /\.(png|jpg|gif|pdf|ico)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            }
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist/*']),
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            favicon: 'favicon.ico'
        }),
        // new CopyWebpackPlugin([
        //     { from: 'worlds/**/*' }
        // ]),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],

    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: true
            })
        ]
    }
}