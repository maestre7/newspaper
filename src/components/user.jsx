import React, { Component } from 'react';

class User extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <a href=''><img>{this.props.comments}</img>
                </a>
                -
                <a href=''>
                    {this.props.name}
                </a>
                -
                <a href=''>
                    {this.props.lastComment}
                </a>
            </div> 
        )
    }
}

export default User;