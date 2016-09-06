# 个人博客

使用node.js + MongoDB开发的个人博客系统，前后端分离的单页应用。

> `web-project` 文件夹为客户端代码，需配合服务端运行。

##开发

```shell
$ npm install
$ cd web-project
$ npm install
$ npm run build
$ cd ../
$ node app.js
```

##目录结构

```
·
├── README.md
├── web-project     // 前端项目代码，详情见此目录下的README.md
├── server          // 后端代码目录
|   ├── apis        // api请求
|   ├── db          // 数据库Model
|   ├── uploads     // 已上传文件存放目录
|   ├── util        // 工具函数
|   ├── index.js    // 入口文件
|   ├── routes      // 路由入口文件
├── app.js          // 启动server
```

##使用pm2部署

```shell
$ pm2 start app.js
```