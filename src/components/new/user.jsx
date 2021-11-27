import React, { Component } from 'react';

class User extends Component {


    render() {
        return (
            <div className='App-comments'>
                <p>💬{this.props.props.comments}
                </p>
                <p>-</p>
                <p>
                    {this.props.props.name}
                </p>
                <p>-</p>
                <p>
                    {this.props.props.lastComment}
                </p>
            </div> 
        )
    }
}

export default User;