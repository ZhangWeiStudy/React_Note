// this.props对象的属性与组件的属性一一对应

'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//声明一个组件类，叫MyTitle
class MyTitle extends Component {
    show() {
        console.log(this.props.title);
        console.log(this.props.contents);
        console.log(this.props.name);
    }
    //渲染组件：一个按钮，并可以点击。
    //注意bind(this)的写法，这是jsx语法要求的
    //如果嫌麻烦也可以使用箭头函数。
    render() {
        // 渲染组件
        return (<button onClick={this.show.bind(this)}> click </button>);
    }
}
//要向组件传递的数据
var data = { title: 'this is a title', contents: 'this is contents' };

// 渲染方法包括两个参数，一个是组件名称，一个是页面的id。
ReactDOM.render(
    // 组件名称
    <MyTitle {...data} name={'my name'} />,
    // 页面Id
    document.getElementById('app')
);

/** 省略号语法 */
// 要注意到一个场景，就是data这个数据一般是从后台读取过来的，
// 有很多字段，如果不想一个一个去对应，则使用省略号语法
// 
// 例子:用{...data}就表示把data里面所有的字段都展开传入MyTitle组件里面
// 后面的name属性可以单独传入
// 等效为：<MyTitle title={'xxx'} contents={'xxxx'} name={'xxxx'} />