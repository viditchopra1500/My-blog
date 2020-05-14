import React, { Component } from 'react';
import './aboutUs.css'
class aboutus extends Component {
    render(){
        return(
            <div className="page">
                <h1 className="display-1 text-center content">Express Yourself</h1>
               <blockquote className="blockquote text-center content h1">
               We made it really easy to post anything while remaining completely anonymous the entire time.
               </blockquote>
               <blockquote className="blockquote text-center">
               You can crib about anyone you want without them knowing it's you.
               </blockquote>
            </div>
        )
    }
}
export default aboutus;