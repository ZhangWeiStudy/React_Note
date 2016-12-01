Webpack

react是虚拟dom，语法规则叫jsx语法，所以是不能直接在浏览器上解析的。
浏览器可以解析js，而jsx语法则需要一个转换工具，把它转换成js才能执行。
其实如果光是解析jsx，可以使用JSXTransformer.js这个工具，
可以像解析less一样解析jsx，但是这种做法并不主流，生产环境上一般使用webpack。

webpack不仅可以解析jsx，也可以将es6转换为es5语法。
最终，它把这些代码都打包成一个叫bundle.js的文件,我们在html文件中只引入这么一个js文件就可以了！

打包后，引用的语法
import “./button.css”

1.安装webpack

npm install webpack -g  （全局）
npm install webpack --save--dev  （本地）

2.webpack的辅助文件

npm install babel-core
npm install babel-loader
npm install babel-preset-es2015  (解析es6)
npm install babel-preset-react   （解析jsx语法）
npm install react （jsx语法支持）
npm install react-dom （jsx语法支持）


3.新建src和dest，分别放源文件和打包后的文件。

4.新建webpack.config.js的文件

  module.exports = {    
    entry:'./entry.js',//入口
    output:{//输出      
        path:__dirname,        
        filename:"./dest/bundle.js"
    },
    module:{
     loaders:[{         
      test:/\.js?$/,
      loader:'babel-loader',
      exclude:/node_modules/,
      query:{compact:false,presets:['es2015','react']}
        }]
    }
  };

  配置文件说明：
  ① entry就是入口（entrance）的意思，就是待打包的文件。

  ② output就是输出了，其中path是输出路径，__dirname获取当前路径。

  ③ module就是我们前面装的机械臂了。其中，test表示要编译的文件类型，
  这里是编译js，用正则表达式过滤出来；loader表示装载的是哪些功能模块，
  这里装载的是babel家族系列；exclude是排除的意思，也就是说，
  不编译node_modules文件夹下的内容，因为这里面全是预装的模块。

  ④ query后面跟的是具体编译的类型了，需要编译es6，react的jsx，

  ⑤ compact为false表示不压缩。


5.创建测试文件

在src源文件夹里面创建index.html文件。

<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>第一个react的例子</title>
</head>
<body>
    <div id="app"></div>

</body>
</html>
<script src="./dest/bundle.js">
</script>


6.创建一个测试helloworld.js文件,这个文件我们用jsx和es6语法写。
'use strict';
//引入相关的包
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//es6语法
class HelloWorld extends Component{
    render(){
       return(
            <h1>hello,world</h1>
        )
   }
}
//渲染虚拟dom
ReactDOM.render(
    <HelloWorld />,
    document.getElementById('app')
);


7.完成后，我们跳出src目录，创建一个入口文件entry.js
 require('./src/helloworld.js');

8.运行
 webpack，回车，过一会看到编译完成后，在dest文件夹下会多一个bundle.js文件，
 然后进入src目录，双击index.html文件