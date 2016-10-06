module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/,
              exclude: /node_modules/,
              loader: "babel",
              query: { presets:['react', 'es2015'] }
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        proxy: {
            '/login*': {
                target: 'http://localhost:9000/',
                secure: false,
            },
            '/logout*': {
                target: 'http://localhost:9000/',
                secure: false,
            },
            '/api/*': {
                target: 'http://localhost:9000/',
                secure: false,
            }
        }
    }
};
