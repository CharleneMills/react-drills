import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Image from './Image.js';

class App extends Component {
 
  render(){
    return (
      <div className="App">
        <Image url={"https://images.hdqwalls.com/wallpapers/aloy-horizon-zero-dawn-bird-4k-u7.jpg"} />
      </div>
    );
  }
}

export default App;
