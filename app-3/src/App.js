import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      filterText: '',
      colors: ['green', 'blue', 'yellow', 'red', 'purple', 'orange']
    }
    this.filtering = this.filtering.bind(this)
  }
  
  filtering(val){
    this.setState({
      filterText: val
    })
  }

  render() {
    let colors = this.state.colors
    .filter( (el, index) => {
      return el.includes(this.state.filterText);
    })
    .map( (el, index) => {
        return <h2 style={{color: el}} key={index}>{el}</h2>;
    });


    return (
      <div className="App">
          <div className="container">
           <input onChange = {e => this.filtering(e.target.value)}/>
            {colors}
        </div>
      </div>
    );
  }
} 

export default App;
