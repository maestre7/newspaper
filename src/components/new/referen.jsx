import React, { Component } from 'react';

class Referen extends Component {

    render() {
        return (
            <div className='App-title'>
                <p>{this.props.props.title}</p>
                <p className='App-leer-mas'> LEER MAS ▽</p>
            </div> 
        )
    }
}

export default Referen;