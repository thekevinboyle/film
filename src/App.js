import React from 'react';
import logo from './logo.svg';

import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './Projects.js';
import Articles from './Articles.js';
import About from './About.js';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      // Router
      <Route exact path="/" component={Projects} />
      <Route path="/articles" component={Articles} />
      <Route path="/about" component={About} />

      <div className="navigation">
        <img src={img} className="logo" alt="Logo Image" />
        <div className="navigation-sub">

          // Links
          <Link to="/" className="navigation-sub__item">Projects</Link>
          <Link to="/articles" className="navigation-sub__item">Articles</Link>
          <Link to="/About" className="navigation-sub__item">About</Link>

        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
