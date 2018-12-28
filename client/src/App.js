import React, { Component } from 'react';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Models from './components/Models';
import Features from './components/Features';
import Survey from './components/Survey';
import Questionnaire from './components/Questionnaire';

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
            <li> <Link to="/survey">Survey</Link></li>
          <li> <Link to="/questionnaire">Questionnaire</Link></li>
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


          <Route path="/features"
            render={props => <Features/>}
          />

          <Route path="/survey"
            render={props => <Survey/>}
          />

           <Route path="/questionnaire"
            render={props => <Questionnaire/>}
          />



        </div>
      </div>
    );
  }
}

export default App;
