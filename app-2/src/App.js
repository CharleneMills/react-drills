import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      colors: ['green', 'blue', 'yellow', 'red', 'purple', 'orange']
    }

  }
  

  render() {

    let colors = this.state.colors.map( (el, index) => {
        return <h2 style={{color: el}} key={index}>{el}</h2>;
    });


    return (
      <div className="App">
        <div className="App-body">
          <div className="container">
            {colors}
          </div>  
        </div>
      </div>
    );
  }
} 

export default App;
