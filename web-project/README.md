# 个人博客-Vue客户端

使用Vue + Vue-router + Vue-resource搭建的个人博客界面。


##开发

```shell
$ npm install
$ npm run dev
```

##打包

```shell
$ npm run build
```

##目录结构

```
·
├── README.md
├── dist                  // 项目Build目录
├── build                 // webpack配置目录
|   └── index.html        // 主页html配置
|   └── server.js         // 开发server配置文件
|   └── webpack.base.js   // webpack基础配置
|   └── webpack.dev.js    // webpack开发配置
|   └── webpack.prod.js   // webpack生产环境配置
├── src                   // 生产目录
|   ├── components        // 组件目录
|   ├── routes            // 路由配置
|   ├── static            // css和图片资源
|   ├── util              // 工具函数
|   ├── views             // 页面
|   └── App.vue           // Vue入口文件
|   └── main.js           // 入口文件
├── .babelrc              // babel配置
·
```
