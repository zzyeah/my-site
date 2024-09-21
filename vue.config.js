// vue-cli的配置文件
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:4015",
      },
      static: {
        target: "http://localhost:4015",
      },
    },
  },
  configureWebpack: require("./webpack.config"),
};
