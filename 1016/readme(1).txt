node

1. 什么是nodeJs
基于chrome V8引擎 的  javascript 的运行环境

使用事件驱动   event
非阻塞的I/O操作
轻量而且高效

node 直接运行并且解析  javascript代码 
提供了很多系统级别的api  (HTTP/net/url/querystring/events/file system)

node 单线程  高并发  运行速度快  

npm  包管理工具  package    package.json   最大的开源的包管理器  (bower)




2. 模板引擎  template  (快速解析html)

jade    
EJS   
handlebars
artTemplate
smart 

Forever 
PM2      负载均衡


模块化开发规范
grunt
gulp  实现项目工程自动化  
webpack 
项目模块化开发和自动化开发

Mocha
Karma  测试工具  


3. 安装


v6.9.4 LTS    长期持久稳定版本
v7.4.0 Current   当前最新版本



4. linux 指令          
cmd  控制台
D:  直接切换到硬盘 D
ls 显示当前文件夹得所有的文件目录
tab  自动补全
cd    切换到对应的文件目录
cd .. 切换到上一级文件
touch  创建文件
mkdir  创建文件夹
pwd  显示文件目录路径
rm -rf   不询问强制删除文件
ctrl+c 强制退出 当前命令



5.  Content-type  文档类型 


下面是几个常见的Content-Type:

1.text/html
2.text/plain
3.text/css
4.text/javascript
5.application/x-www-form-urlencoded
6.multipart/form-data
7.application/json
8.application/xml
...

前面几个都很好理解，都是html，css，javascript的文件类型，后面四个是POST的发包方式。



6. node 常用网站
https://segmentfault.com
https://nodejs.org/en/
https://www.npmjs.com/
https://stackoverflow.com/
https://github.com/

7.
http://localhost:7000/

http 协议
localhost  主机 IP
7000  端口

localhost:7000  域名

/  路径   path  
/favicon.ico  


8.
nodeJs+webpack 全部遵循commonJs规范  (module,exports,require);  (define)

commonJs是nodeJs+webpack实现模块开发的规范

nodeJs+webpack是commonJs这个规范的一种展现形式


9.npm  入门 
n   node 版本控制 包(下架) 
n   stable 更新node到最稳定版本
n   latest  更新到node 最新版本  
npm i forever -g      下载到全局环境   --golbal
npm uninstall forever -g   从全局环境卸载   
npm init 项目包管理初始化  生成package.json  

npm install/i underscore 下载到node_modules 但是没有在 package.json 配置文件声明
npm i underscore --save-dev  -D    开发依赖   devDependencies   辅助开发 
npm i underscore --save    -S     项目依赖   dependencies      项目始终需要

npm uni babel-cli -D   卸载  
npm uni babel-cli -S   卸载  

rm -rf node_modules 
npm install  下载package 根据  package.json 
tree 查看文件名称树形图
npm info underscore   查看插件的具体信息 
npm list underscore   查看插件的版本
npm i underscore@1.8.0 -D  下载指定版本的插件

npm i nrm -g   
nrm ls 查看当前源 

淘宝镜像 
npm install -g cnpm --registry=https://registry.npm.taobao.org 
cnpm -v 查看版本



