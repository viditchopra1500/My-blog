import {Link } from 'react-router-dom';
import React from 'react';
import './navigation.css';

function navigation() {
    return (
        <div id="nav">
        <Link to="/" type="button" className="nv nav-link active">Home</Link>
        <Link to="/about-us" className="nv nav-link active">About Us</Link>
        <Link to="/create-threads" className="nv nav-link active">Create Threads</Link>
        <Link to="/threads" className="nv nav-link active">Threads</Link>
        </div >
    )
}
export default navigation