import React, { Component } from 'react';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Models from './components/Models';
import Features from './components/Features';
import UpdateModel from './components/UpdateModel';

import { Route, Link } from 'react-router-dom'



class App extends Component {
  constructor(){
    super();
  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul className="menu">
            <li> <Link to="/home">Home</Link></li>
            <li> <Link to="/about">About</Link></li>
            <li> <Link to="/models">Models</Link></li>
            <li> <Link to="/features">Features</Link></li>
            <li>Logout</li>
          </ul>
        </header>

        <div className="container">
          <Route path="/home"
            render={props => <Home/>}
          />

          <Route path="/about"
            render={props => <About/>}
          />

          <Route path="/models"
            render={props => <Models/>}
          />

          <Route exact path="/models/:id"
            render={props => <UpdateModel/>}
          />


          <Route path="/features"
            render={props => <Features/>}
          />



        </div>
      </div>
    );
  }
}

export default App;
