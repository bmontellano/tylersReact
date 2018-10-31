module.exports = {
    entry: [
        './app/index.js'
    ],
    module: {
        rules: [
            { test: /\.coffee$/, use: "coffee-loader"}
        ]
    }
};