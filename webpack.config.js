var webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';

const productionPlugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
    }),
    // isProduction ? new webpack.optimize.UglifyJsPlugin({
    //     compress: {
    //         unused: false
    //     }
    // }) : null,
];

module.exports = {
    entry: './assets/javascripts/index.js',
    devtool: isProduction ? false : 'source-map',
    output: {
        library: 'MyApp',
        path: __dirname + '/tmp/dist',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: isProduction ? productionPlugins : []
};
