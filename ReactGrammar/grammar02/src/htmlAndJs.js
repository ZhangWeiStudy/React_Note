'use strict';
//引入相关的包
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
var arr = [
    <h1>Hello world!</h1>,
    <h2>React  HTML & JS</h2>

];//将html装到数组里面

ReactDOM.render(
    <div>{arr}</div>,
    document.getElementById('app'));