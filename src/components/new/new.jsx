import React, { Component } from 'react';
import Referen from './referen';
import User from './user';
import '../../assets/CSS/new.css';


export class New extends Component {

    render() {
        return (
            <div className='App-new'> 
                <div className='App-container-text'>
                    {console.log(this.props)}
                    <p className='App-description'>{this.props.data.description}</p>
                    <p className='App-categories'>{this.props.data.categories}</p>
                    <Referen props={this.props.data}/>

                    <User props={this.props.data}/>
                </div> 
                <div className='container-img'>
                    <img src={this.props.data.img} alt='#'/>
                </div> 
            </div>
        )
    }
}


//export default New;