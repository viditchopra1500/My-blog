import React from 'react';
import './Blog.css';
import { Route, Link ,Switch} from 'react-router-dom';
// import {
//     CSSTransition,
//     TransitionGroup,
//   } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material-ui/core'

import Threads from './threads/threads'
import Home from './home/home'
import CreateThreads from './createThread/createThreads'
import Aboutus from './aboutUs/aboutUs'

function blog() {
  return (
      <div>
      <div id="nav">
      <Link to="/" type="button" className="nv nav-link active">Home</Link>
      <Link to="/about-us" className="nv nav-link active">About Us</Link>
      <Link to="/create-threads" className="nv nav-link active">Create Threads</Link>
      <Link to="/threads" className="nv nav-link active">Threads</Link>
      </div >
      <div id="content">

            <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about-us" exact component={Aboutus}/>
            <Route path="/create-threads" exact component={CreateThreads}/>
            <Route path="/threads" exact component={Threads}/>
            </Switch>
          
      </div>
      </div>
  )
}

export default blog 