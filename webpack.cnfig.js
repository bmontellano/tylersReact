module.exports = {
    entry: [
        './app/index.js'
    ],
    module: {
        rules: [
            { test: /\.coffee$/, use: "coffee-loader"}
        ]
    },
    output: {
        path: path.resolveo(__dirname, 'dist'),
        filename: 'i_bundle.js'
    }
};