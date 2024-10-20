// vue-cli的配置文件
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: process.env.VUE_APP_Server,
        changeOrigin: true,
        
      },
      '/static': {
        target: process.env.VUE_APP_Server,
        changeOrigin: true
      },
      '/res': {
        target: process.env.VUE_APP_Server,
        changeOrigin: true
      }
    },
  },
  configureWebpack: require("./webpack.config"),
};
