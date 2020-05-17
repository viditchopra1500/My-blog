import React, { Component } from 'react';
import axios from './../createThread/axios-threads';
import FullPost from './../FullPost/FullPost'
import Post from './post';
import './threads.css';

//Its job is to take  all the blogs from backend and render them.  
class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount () {
        axios.get( '/threads.json' )
            .then( response => {
                // console.log(response);
                const data = Object.values(response.data);
                const keys=Object.keys(response.data);
                const updatedPosts = data.map((post,i) => {
                    post.id=keys[i];                           //giving another attribute(id) to the post elements of data.
                    return {
                        ...post
                    }
                });
                // console.log(updatedPosts);
                this.setState({posts: updatedPosts});
            } )
            .catch(error => {
                // console.log(error);
                this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {
        // console.log(id);
        this.setState({selectedPostId: id});
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post                                              //As post is a dynamic component so we make a separate component for it.
                    key={post.id} 
                    title={post.title} 
                    clicked={() => this.postSelectedHandler(post.id)} />;  //when you need to send a data to the fxn thats how to write it when calling from here.
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
            </div>
        );
    }
}

export default Blog;