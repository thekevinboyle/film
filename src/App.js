import React from 'react';
import logo from './logo.svg';

import { BrowserRouter, Route, Link } from 'react-router-dom';
import Gallery from './Gallery.js';
import Articles from './Articles.js';
import About from './About.js';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />

        <div class="container">
          <div class="navbar">
            <img src={logo} className="logo" alt="Logo Image" />
            <div class="items">
              <div class="item">
              {/* <Link to="/About" className="navigation-sub__item">About</Link> */} 
              </div>
            </div>
          </div>
<Gallery></Gallery>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
