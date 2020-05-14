import React, { Component } from 'react';
import axios from './../createThread/axios-threads';
import parse from 'html-react-parser';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null,
        id1:null
    }

    componentDidUpdate () {
        // console.log(this.props.id,this.state.loadedPost,this.state.id1)
        if ( !this.state.loadedPost || (this.state.loadedPost && this.state.id1 !== this.props.id)) {
                axios.get( '/threads.json' )
                    .then( response => {
                        var key=this.props.id;
                        var data=Object.entries(response.data);
                        var found=data.find((post=>(post[0]===key)))
                        // console.log(found[0])
                        if(found)
                        this.setState( { loadedPost: found[1],id1:found[0] } );
                    } ).catch(e=>console.log(e));
        }
    }

    deletePostHandler = () => {
        axios.delete('/threads/' + this.props.id)
            .then(response => {
                console.log(response);
            });
    }

    render () {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if ( this.props.id ) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if ( this.state.loadedPost ) {
            post=<div className="FullPost">
                {parse(this.state.loadedPost.content)}
                </div>
            // post = (
            //     <div className="FullPost">
            //         <h1>{this.state.loadedPost.title}</h1>
            //         <p>{this.state.loadedPost.content}</p>
            //         <div className="Edit">
            //             <button onClick={this.deletePostHandler} className="Delete">Delete</button>
            //         </div>
            //     </div>

            // );
        }
        return post
    }
}

export default FullPost;