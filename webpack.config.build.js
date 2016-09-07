var webpack = require('webpack');

var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var dashboard = new Dashboard();

var deps = require('./package.json').dependencies;

const outputFileName = 'wscn-react-vendor.min.js';
module.exports = {
    bail: true,
    devtool: 'source-map',
    entry: {
        vendor:Object.keys(deps)
    },
    output: {
        path: __dirname + "/dist",
        filename: outputFileName,
        chunkFilename: "static/js/[name].js",
        publicPath: "/",
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['', '.js', '.json'],
        alias: {

        }
    },
    module: {
        loaders: [
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true
            },
            output: {comments: false}
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.AggressiveMergingPlugin,
        new DashboardPlugin(dashboard.setData),
    ]
};
