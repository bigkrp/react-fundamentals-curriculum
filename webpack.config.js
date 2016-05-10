var webpack           = require('webpack');
var merge             = require('webpack-merge');
var NpmInstallPlugin  = require('npm-install-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject  : 'body'
});

var TARGET = process.env.npm_lifecycle_event;

var common = {
  cache  : true,
  debug  : true,
  context: __dirname + '/app',
  entry  : {
    main: './index.js'
  },
  // entry: [
  //     './app/index.js'
  // ],
  output: {
    path: `${__dirname}/dist`,
    // publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].js',
    sourceMapFilename: '[file].map'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.less']
  },
  // devtool: 'eval-source-map',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: `${__dirname}/app`,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!less-loader?sourceMap')
    }, {
      test: /\.woff$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]'
    }, {
      test: /\.woff2$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]'
    }, {
      test: /\.(eot|ttf|svg|gif|png)$/,
      loader: 'file-loader'
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new ExtractTextPlugin('[name].css')
  ]
};

if (TARGET === 'dev' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      port: 8090,
      historyApiFallback: true,
      hot: false,
      contentBase: `${__dirname}/dist`
    },
    watch: true,
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
