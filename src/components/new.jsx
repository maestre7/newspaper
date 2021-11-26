import React, { Component } from 'react';
import Referen from './referen'
import User from './user'

class New extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className='container-text'>
                    <p>{this.props.description}</p>
                    <a href=''>{this.props.categories}</a>
                    <Referen props={}/>
                    <User props={}/>
                </div>
                <div className='container-img'>
                    <img src={this.props.img} />
                </div>
            </div>
        )
    }
}


export default New;