# 一、node
nodejs就是运行在服务端的JS，是一个事件驱动I/O服务端JS环境，是基于Google的V8引擎，
```
node -v // 查看安装的node版本
```
全局对象global
***
# 二、npm
npm是随同nodejs一起安装包管理工具
```
npm -v //查看版本
```
淘宝镜像
```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
### 使用npm命令安装模块
```
npm install <Module Name>
```
全局安装与本地安装
```
npm install express // 本地安装
npm install express -g   // 全局安装
```
### 卸载模块
```
npm uninstall express
```
### 更新模块
```
npm uninstall express
```
### 使用package.json进行包管理
name - 包名。

version - 包的版本号。

description - 包的描述。

homepage - 包的官网 url 。

author - 包的作者姓名。

contributors - 包的其他贡献者姓名。

dependencies - 依赖包列表。如果依赖包没有安装，npm 会自动将依赖包安装在 node_module 目录下。

repository - 包代码存放的地方的类型，可以是 git 或 svn，git 可在 Github 上。

main - main 字段指定了程序的主入口文件，require('moduleName') 就会加载这个文件。这个字段的默认值是模块根目录下面的 index.js。

keywords - 关键字

### npm资源库注册用户并发布
```
npm adduser
Username: mcmohd
Password:
Email: (this IS public) mcmohd@gmail.com
```
```
npm publish
```
### 版本号说明
X.Y.Z：主版本号、次版本号、补丁版本号

***
# 创建服务器
```
let http=require('http')
http.createServer(function(request,response){
    // 发送http头部
    // http状态值 200：OK
    // 内容类型 text/plain
    response.writeHead(200,{'Content-Type':'text/plain'})

    // 发送响应数据
    response.end('Hello world！')
}).listen(8080)
console.log('Server running at http://127.0.0.1:8888/');
```
当前执行脚本文件名__filename
当前执行脚本所在的目录__dirname
***
# 回调函数
node.js异步编程的直接体现就是回调，因此没有阻塞，可以处理大量并发请求，性能好

nodejs几乎所有API都支持回调函数
***
# 事件循环
Node.js 是单进程单线程应用程序，但是因为 V8 引擎提供的异步执行回调接口，通过这些接口可以处理大量的并发，所以性能非常高

所有的事件机制都是用设计模式中观察者模式实现

单线程类似进入一个while(true)的事件循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数

***
# EventEmitter
```
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

eventEmitter.addListener(event,listener)
// 为指定事件注册一个监听器
eventEmitter.on(event,listener)
// 为指定事件注册一个单次监听器
eventEmitter.once(event,listener)
// 移除指定事件的某个监听器
eventEmitter.removeListener(event,listener)
// 移除所有事件的所有监听器，或为某事件移除所有事件监听器
eventEmitter.removeAllListeners([event])
// 默认情况下， EventEmitters 如果你添加的监听器超过 10 个就会输出警告信息。 setMaxListeners 函数用于提高监听器的默认限制的数量。
eventEmitter.setMaxListeners(n)
// 返回指定事件的监听器数组
eventEmitter.listeners(event)
// 返回指定事件的监听器数量
eventEmitter.listenerCount(event)
// 按监听器的顺序执行执行每个监听器，如果事件有注册监听返回 true，否则返回 false。
event.emit(event[,arg1[,...]])
```
***
# Buffer



