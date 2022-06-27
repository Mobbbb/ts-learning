'use strict'

const name = 'TS - Learning'
const shortName = 'TS'
const outputDir = 'dist'
const proxyConfig = {
    '/resource': {
        target: `https:${process.env.VUE_APP_HOST}`,
        changOrigin: true,
        secure: false, // 关闭ssl证书验证
    },
}

const path = require('path')
const resourceConfig = require('./src/config/resource.js')
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer')

const BundleAnalyzer = WebpackBundleAnalyzer.BundleAnalyzerPlugin

function resolve(dir) {
    return path.join(__dirname, dir)
}

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
    /**
     * You will need to set publicPath if you plan to deploy your site under a sub path,
     * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
     * then publicPath should be set to "/bar/".
     * In most cases please use '/' !!!
     * Detail: https://cli.vuejs.org/config/#publicpath
     */
    publicPath: '/',
    outputDir,
    assetsDir: 'static',
    // filenameHashing: false, 文件不带hash
    productionSourceMap: false,

    devServer: {
        proxy: proxyConfig,
    },

    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src'),
                'babel': resolve('babel.config.js'),
            }
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                    },
                },
            ]
        },
    },
    chainWebpack: (config) => {
        if (process.env.NODE_ENV === 'analyz') {
            config.plugin('webpack-bundle-analyzer').use(BundleAnalyzer)
        }
        if (process.env.NODE_ENV === 'production') {
            // 生产环境下注入在html模板注入cdn
            config.plugin('html').tap(args => {
                args[0].title = name
                args[0].shortName = shortName
                args[0].resourceConfig = resourceConfig
                return args
            })
        }
    },
    runtimeCompiler: process.env.NODE_ENV === 'development' ? true : false,
}
