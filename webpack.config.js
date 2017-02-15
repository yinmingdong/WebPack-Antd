module.exports = {
    entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    module: {//在配置文件里添加JSON loader
        loaders: [
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',//在webpack的module部分的loaders里进行配置即可
                // query: {
                //     presets: ['es2015','react']  ====>>>>>.babelrc 配置文件
                // }
            },
            {
                test: /\.(less|css)$/,
                loader: 'style-loader!css-loader'//添加对样式表的处理 感叹号的作用在于使同一文件能够使用不同类型的loader
            }
        ]
    }
}