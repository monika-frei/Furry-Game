const path = require('path');

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif|jpeg|csv)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        esModule: false,
                        name: "[name].[ext]",
                        publicPath: "images",
                        outputPath: "images",
                    }
                }
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }


            }
        ]
    }


};