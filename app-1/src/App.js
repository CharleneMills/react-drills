import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component {
 constructor(){
   super();
   
   this.state = {
      text: ''
   }
   
   this.updateText = this.updateText.bind(this);
 }

 updateText(val){
   this.setState({ text: val });
 }
 
 render(){

  const {text} = this.state;
  
  return (
    <div className="App">
      <header className="App-header">
        
        <input onChange={e => this.updateText(e.target.value)}/>

        <p>{this.state.text}</p>
    

      </header>
    </div>
  );
}
}

export default App;
