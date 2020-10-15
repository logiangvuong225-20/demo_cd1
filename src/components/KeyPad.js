import React, { Component } from 'react';
import './KeyPad.scss'
class KeyPad extends Component {
    btnPress=(e) => {
        this.props.btnPress(e.target.name);
    };
    render() {
        return (
            <div>
                <button name='C' onClick={this.btnPress}>C</button>
                <button name='1' onClick={this.btnPress}>1</button>
                <button name='2' onClick={this.btnPress}>2</button>               
                <button name='3' onClick={this.btnPress}>3</button>
                <br></br>
                <button name='4' onClick={this.btnPress}>4</button>
                <button name='5' onClick={this.btnPress}>5</button>
                <button name='6' onClick={this.btnPress}>6</button>
                <button name='7' onClick={this.btnPress}>7</button>
                <br></br>
                <button name='8' onClick={this.btnPress}>8</button>
                <button name='9' onClick={this.btnPress}>9</button>
                <button name='0' onClick={this.btnPress}>0</button>
                <button name='+' onClick={this.btnPress}>+</button>
                <br></br>
                <button name='-' onClick={this.btnPress}>-</button>
                <button name='*' onClick={this.btnPress}>x</button>
                <button name='/' onClick={this.btnPress}>/</button>
                <button name='=' onClick={this.btnPress}>=</button>


            </div>
        );
    }
}

export default KeyPad;