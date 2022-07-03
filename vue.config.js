module.exports = {
    lintOnSave: false,
    devServer: {
        proxy: {
            '/ico': {
                target: '/',
                changeOrigin: true,
                pathRewrite: {
                    '^/ico': ''
                }
            }
        }
    }
}
