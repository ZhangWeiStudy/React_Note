﻿'use strict';
//引入相关的包
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//es6语法
class HelloWorld extends Component {
    render() {
            return ( <h1> hello, world </h1>)
            }
        }
        //渲染虚拟dom 
    ReactDOM.render( <HelloWorld/> ,
        document.getElementById('app')
    );

    console.log(__dirname);