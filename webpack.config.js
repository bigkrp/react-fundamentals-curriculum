const webpack = require('webpack'),
    NpmInstallPlugin = require('npm-install-webpack-plugin');


module.exports = {
    context: __dirname + '/app',
    entry: {
        main: './index.js'
    },
    // entry: [
    //     './app/index.js'
    // ],
    output: {
        path: /*__dirname + '/dist'*/`${__dirname}/dist`,
        // publicPath: '/',
        filename: 'index_bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.less']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            include: `${__dirname}/app`/*__dirname + '/app'*/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loaders: ['style', 'css']
        },/* {
            test: /\.scss$/,
            loaders: ['style', 'css', 'postcss', 'sass']
        },*/ {
            test: /\.less$/,
            loaders: ['style', 'css', 'less']
        }, {
            test: /\.woff$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]"
        }, {
            test: /\.woff2$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]"
        }, {
            test: /\.(eot|ttf|svg|gif|png)$/,
            loader: "file-loader"
        }],
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            }),
            new NpmInstallPlugin({
                save: true // --save
            })
        ]
    },


    devServer: {
        // host: 'localhost', // default
        port: 8090, // default
        contentBase: `${__dirname}/dist`/*__dirname + '/dist'*/,
        // hot: true,
        // watchOptions: {
        //     aggregateTimeout: 300,
        //     poll: 1000
        // },
    }
};