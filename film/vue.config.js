const path = require("path");
const resolve = dir => path.join(__dirname, dir);
module.exports = {
  publicPath: "./",
  outputDir: "dist",
  indexPath: "index.html",
  pages: {
    index: {
      // page 的入口
      entry: "src/main.js",
      // 模板来源
      template: "public/index.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "Index Page",
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["chunk-vendors", "chunk-common", "index"]
    }
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    // subpage: "src/subpage/main.js"
  },
  lintOnSave: false,
  runtimeCompiler: false, // 是否使用包含运行时编译器的 Vue 构建版本
  transpileDependencies: [], // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件
  productionSourceMap: true, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  parallel: require("os").cpus().length > 1,
  // crossorigin: undefined,
  integrity: false,
  // configureWebpack: config => {
  //   if (process.env.NODE_ENV === "production") {
  //     // 为生产环境修改配置...
  //   } else {
  //     // 为开发环境修改配置...
  //   }
  // },
  chainWebpack: config => {
    // config.module
    //   .rule("vue")
    //   .use("vue-loader")
    //   .loader("vue-loader")
    //   .tap(options => {
    //     // 修改它的选项...
    //     return options;
    //   });
    config.resolve.alias
      .set("vue$", "vue/dist/vue.esm.js")
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"))
      .set("@components", resolve("src/components"))
      .set("@views", resolve("src/views"))
      .set("@router", resolve("src/router"));
  },
  css: {
    requireModuleExtension: true,
    extract: false,
    sourceMap: false,
  },
  devServer: {
    //开启本地代理
    proxy: {
      "/api": {
        target: "http://film-backend.com",
        // ws: true,
        changeOrigin: true //开启代理，在本地创建一个虚拟服务端
      }
    }
    // proxy: "http://photo-frontend:8081/api"
  }
};
