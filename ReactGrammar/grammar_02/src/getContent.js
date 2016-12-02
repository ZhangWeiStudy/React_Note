'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Search extends Component {

    getInputText() {

        var inputValue = this.refs.inputString.value;
        alert(inputValue);
    }

    render() {

        return (
            <div>
                <input type="text" ref='inputString' />
                <button type="button" onClick={this.getInputText.bind(this)}>获取input中的值</button>
            </div>
        );
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById("app")
);