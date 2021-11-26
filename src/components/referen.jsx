import React, { Component } from 'react';

class Referen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>{this.props.title}</p>
                <a href=''>Leer mas</a>
            </div> 
        )
    }
}

export default Referen;