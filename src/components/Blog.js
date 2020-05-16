import React from 'react';
import './Blog.css';
import { Route ,Switch} from 'react-router-dom';
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
import Navigation from './navigation/navigation'

function blog() {
  return (
      <div>
        <Navigation></Navigation>
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