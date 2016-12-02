'use strict';
//引入相关的包
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class InputState extends Component {

    constructor(props) {
        super(props);

        // initialize this.state.
        this.state = {
            enable: false
        };
    }

    // event
    handleClick() {

        // click to change state
        this.setState({ enable: !this.state.enable });
    }

    render() {

        // 事件绑定的，一律要加bind(this) es2015
        return (
            <p>
                <input type="text" disabled={this.state.enable} />
                <button onClick={this.handleClick.bind(this)}>change state</button>
            </p>

        );

    };
}

// 渲染
ReactDOM.render(
    <InputState />,
    document.getElementById('app'));