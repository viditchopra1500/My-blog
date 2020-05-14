import React from 'react';
import './App.css';
import Blog from './components/Blog'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div>
    <Blog></Blog>
    </div>
    </BrowserRouter>
  );
}

export default App;
