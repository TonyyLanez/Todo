let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");

let conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules : [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract ({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
                /*
                use: [
                    'style-loader',
                    'css-loader'
                ]*/ 
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css"),
    ]
};

module.exports = conf;
