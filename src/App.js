import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Muse from './Muse';
import GithubJobs from './GithubJobs';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to My App</h1>

            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
            <hr/>
            <Route exact path='/' component={Muse}/>
            <Route exact path='/about' component={GithubJobs}/>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
