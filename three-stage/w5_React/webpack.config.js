// /*
//     webpack配置文件
//         是一个commonJS规范的模块文件
//         入口：entry
//         测试服务器：devServer
//         加载器：loader
//         插件：plugin


// */
// 原因不明，就是不行
// // const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin')

// module.exports = {
//     // 入口 main.js
//     entry:'./src/main.js',

//     // 测试服务器配置
//     devServer:{
//         // 以 src 为根目录
//         contentBase:'./src',
//         // 自动打开浏览器
//         // open:true
//      },

//     // 加载器
//     module:{
//         rules:[
//             {
//                 // 正则匹配
//                 test:/\.jsx?$/,      // 以js结尾的文件 ;   /\.jsx?$/-----以js或者jsx结尾的文件
//                 use:{
//                     // 加载器类型
//                     loader:'babel-loader',
//                     options:{
//                         presets:['@babel/preset-react']
//                     }
//                 }
//             }
//         ]
//     },

//     // 插件
//     plugins:[
//         // 以某个文件作为模板生成html文件
//         new HtmlWebpackPlugin({
// 			template:'./src/template.html',
// 			hash:true,
// 			title:'首页'
//         }),
//     ]
// }


/**
    webpack配置文件
        > 是一个commonjs规范的莫文件
        * 入口: entry
        * 测试服务器：devServer
        * 加载器: loader
        * 插件：plugin
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

 module.exports = {
    //  mode:'development'
     entry:'./src/main.js',
     devServer:{
        contentBase:'./src',
     },

     resolve:{
        extensions:['.js','.jsx']
     },

    //  加载器
    module:{
        rules:[
            {
                //匹配
                test:/\.jsx?$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react']
                    }
                }
            },
            // 解析css样式
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },

    // 插件
    plugins:[
        // 以某个文件作为模板生成html文件
        new HtmlWebpackPlugin({
			template:'./src/template.html',
			hash:true,
			title:'首页'
        }),
    ]
 }