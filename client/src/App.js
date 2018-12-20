import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      models: [],
      features: []
    }
  }

  componentDidMount(){
    axios 
    .get(`http://localhost:3000/api/features`)
    .then(response => {
      this.setState({ features: response.data })
    })
    .catch(err => {
      console.log("Fail to GET models from local server", err)
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        
        </header>
        <div>
            Models here:
            {this.state.features.map(feature => {
              return(
                <h1> {feature.battery} </h1>
              )
            })}
        </div>
      </div>
    );
  }
}

export default App;
