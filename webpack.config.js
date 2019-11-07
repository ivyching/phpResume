const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const styleLoader = {
    loader: 'style-loader',
    options: {
        sourceMap: true
    }
}
const cssLoader = {
    loader: 'css-loader',
    options: {
        sourceMap: true
    }
}
const resolveUrlLoader = {
    loader: 'resolve-url-loader',
    options: {
        sourceMap: true
    }
}
const sassUrlLoader = {
    loader: 'sass-loader',
    options: {
        sourceMap: true
    }
}


const mainConfig = {
    mode: 'production',
    entry: {
        base : './assets/js/base.js',
        RunSparkline: './assets/js/default/RunSparkline.js',
        RunVectormap: './assets/js/default/RunVectormap.js',
        CalculateProcess: './assets/js/CalculateProcess.js',
        CollectionProcess: './assets/js/CollectionProcess.js',
        ProductInquireProcess: './assets/js/ProductInquireProcess.js',
        SupplierAutoComplete: './assets/js/SupplierAutoComplete.js',
        WsLogMessageApp: './assets/js/WsLogMessageApp.js',
        SlideHandler: './assets/js/SlideHandler.js',
        EnterKeyDownHandler: './assets/js/EnterKeyDownHandler.js',
        TabKeyDownHandler: './assets/js/TabKeyDownHandler.js',
        DownloadFormHandler: './assets/js/DownloadFormHandler.js',
        WaUserDictionary: './assets/js/WaUserDictionary.js',
        UploadFile:'./assets/js/UploadFile.js',
        UploadSingle:'./assets/js/UploadSingle.js',
        UploadMultiple:'./assets/js/UploadMultiple.js',
        UserIDHistory:'./assets/js/UserIDHistory.js',
        UserIDFinancialAid:'./assets/js/UserIDFinancialAid.js',
        UserIDDeathFinancialAid:'./assets/js/UserIDDeathFinancialAid.js',
        OTUploadSingle:'./assets/js/OTUploadSingle.js',
        OTUploadMultiple:'./assets/js/OTUploadMultiple.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public','build')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env'],
                        cacheDirectory: true
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    styleLoader,
                    cssLoader,
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    styleLoader,
                    cssLoader,
                    resolveUrlLoader,
                    sassUrlLoader,
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|ico|jpeg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]-[hash:6].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]-[hash:6].[ext]'
                        }
                    }
                ]
            }
        ],
    },

    plugins: [
        new CopyWebpackPlugin([
            {from: "./assets/static", to: "static"}
        ]),

    ],
    devtool: "inline-source-map",
    devServer: {
        contentBase: './public',
    }
};

module.exports = mainConfig ;