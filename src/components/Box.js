import React, { Component } from 'react';
import KeyPad from './KeyPad';
import Output from './Output';
import './Box.scss'

class Box extends Component {
    state={
        result:""
    };
    btnPress=btnName =>{
       
       
         if(btnName==="="){
           this.calculate();
        }
       else if(btnName==="C"){
           
            this.reset();
         }
        
        else{
            this.setState({
                result: this.state.result + btnName
            });
        }
        
    };
    calculate =()=>{
       try {this.setState({
           result: eval(this.state.result)

        });} catch(e){
            this.setState({
                result: "ERR"
            })
        }
    }
    reset =() =>{
        this.setState({
            result:""
        })
    }
    render() {
        return (
            <div className="BoxCal">
                <Output result={this.state.result}></Output>
                <KeyPad btnPress={this.btnPress}></KeyPad>

            </div>
        );
    }
}

export default Box;