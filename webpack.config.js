const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MinifyPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: 'app.js',
        path:path.resolve(__dirname, 'dist')
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader', 
                options: {
                    presets: ["@babel/preset-env"]
                    }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                        name: '[name].[ext]',
                        outputPath: 'images/'
                        }
                    }
                    ]
                },
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, './src/index.html'),
        filename: 'index.html',
        port: 3000
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new CleanWebpackPlugin(),
        new ESLintPlugin({
            extensions: ['**/*.js', '**/*.jsx'],
            fix: true,
            outputReport: true
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new ImageMinimizerPlugin({
                minimizerOptions: {
                    plugins: [
                        ['jpegtran', { progressive: true }],
                        ['optipng', { optimizationLevel: 5 }]
                    ]
                }
            }),
            new MinifyPlugin()
        ]
    }
}