const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: 'public/'
    },
    devServer: {
        contentBase: './src',
        watchContentBase: true,
        hotOnly: true
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env', 'react']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'sass-loader' // compiles Sass to CSS
                }]
            },
            {
                test: /\.(jpe?g|png|gif|mp3)$/i,
                include: path.resolve(__dirname, 'src'),
                loaders: ['file-loader']
            }, {
                test: /\.ico$/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ]
            }, {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1000,
                            mimetype: 'application/font-woff'
                        }
                    }

                ]
            }, {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'file-loader'
            }]
    }
};
