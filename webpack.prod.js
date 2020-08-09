const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "production",
    module: {
        rules: [
            // babel loader
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env"
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require ('@fullhuman/postcss-purgecss')({
                                    content: [
                                        './src/**/*.js',
                                        './src/index.html',
                                    ],
                                    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
                                })
                            ]
                        }
                    }
                ]
            }
        ]
    }
})