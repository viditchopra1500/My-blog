import React, { Component } from 'react';
import {Link} from 'react-router-dom';


import './home.css'
class home extends Component {
    render(){
        return(
            <div className="homePage">
                <div className="jumbotron">
  <h1 className="display-4">Hello, world!</h1>
  <p className="lead">Hola amigos you are now officially in the territory of Vidit aka Limbo462!!</p>
  <hr className="my-4"/>
  <p>To learn more about this project ----></p>
  
  <Link to="/about-us" className=" btn btn-primary btn-lg" role="button">About Us</Link>
</div>
                <img src="https://i.pinimg.com/originals/16/39/c8/1639c8e34dbd74c1b25148adcb9acae3.jpg" alt="srry u are the unlucky one"width="500px" height="600px"></img>
            </div>
        )
    }
}
export default home;