import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import ToDo from './ToDo.js';

class App extends Component {
  
  constructor(){
    super();

    this.state = {
      list: [],
      input: ''
    }

    this.updateList = this.updateList.bind(this);
    this.addTask = this.addTask.bind(this);
  }



  updateList(val) {
    this.setState({ 
      input: val 
    });
  }

  addTask() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    });
  }

  render(){

    let list = this.state.list.map((element, index) => {
      return <ToDo key={index} task={element} />;
    });

  return (
    <div className="App">
      <div className="container">
        <h1>To Do List</h1>
        <input value={this.state.input} placeholder="Enter Task" onChange={ e => this.updateList( e.target.value )}/>
        <button onClick={this.addTask}>Add Task</button>
     <br/>
     
      {list}
      
      </div>
    </div>
  );
}
}

export default App;
