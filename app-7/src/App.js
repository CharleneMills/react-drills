import React, { Component } from "react";
import './App.css';
import NewTask from "./NewTask";
import List from "./List";

class App extends Component {
  
  constructor(){
    super();

    this.state = {
      list: []
    }

    this.addTask = this.addTask.bind(this);
  }


  addTask(task) {
    this.setState({
      list: [...this.state.list, task]
    });
  }
  

  render(){

  return (
    <div className="App">
      <div className="container">
        
        <h1>To Do</h1>
        <NewTask add={this.addTask} />
        <List tasks={this.state.list} />
      
      </div>
    </div>
  );
}
}

export default App;
