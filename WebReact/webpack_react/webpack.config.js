module.exports = {
    entry: './entry.js', //入口
    output: { //输出      
        path: __dirname,
        filename: "./dest/bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: { compact: false, presets: ['es2015', 'react'] }
        }]
    }
};