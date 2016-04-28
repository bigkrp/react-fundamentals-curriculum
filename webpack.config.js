var webpack = require('webpack');
var merge = require('webpack-merge');
var NpmInstallPlugin = require('npm-install-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

var TARGET = process.env.npm_lifecycle_event;

common = {
    cache: true,
    debug: true,
    context: __dirname + '/app',
    entry: {
        main: './index.js'
    },
    // entry: [
    //     './app/index.js'
    // ],
    output: {
        path: `${__dirname}/dist`,
        // publicPath: '/',
        filename: '[name].js',
        chunkFilename: "[id].js",
        sourceMapFilename: '[file].map'
    },
    resolve: {
        extensions: ['', '.js', '.less']
    },
    // devtool: 'eval-source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            include: `${__dirname}/app`/*__dirname + '/app'*/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!less-loader?sourceMap")
/*['style', 'css', 'less']*/
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
        
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new ExtractTextPlugin("[name].css"),
        // new NpmInstallPlugin({
        //     save: true // --save
        // }),
        // HTMLWebpackPluginConfig
    ],

    // devServer: {
    //     // host: 'localhost', // default
    //     port: 8090,
    //     contentBase: `${__dirname}/dist`,
    //     hot: true,
    //     // watchOptions: {
    //     //     aggregateTimeout: 300,
    //     //     poll: 1000
    //     // },
    // }
};

if (TARGET === 'dev' || !TARGET) {
    module.exports = merge(common, {
        devtool: 'eval-source-map',
        devServer: {
            port: 8090,
            historyApiFallback: true,
            hot: false,
            contentBase: `${__dirname}/dist`,
        },
        watch: true,
        // output: {
        //   publicPath: 'http://localhost:8090/dist'
        // },
        plugins: [
          new NpmInstallPlugin({
            save: true // --save
          })
        ]
    });
}
if (TARGET === 'build') {
  module.exports = merge(common, {
    devtool: 'source-map',
    output: {
      path: `${__dirname}/dist`
    },
    plugins: [
        HTMLWebpackPluginConfig
    ]
  });
}