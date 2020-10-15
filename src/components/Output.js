import React, { Component } from 'react';
import './Output.scss'
class Output extends Component {
    render() {
        return (
            <div className="output">
               {this.props.result}
            </div>
        );
    }
}

export default Output;