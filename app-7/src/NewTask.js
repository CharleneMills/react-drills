import React, { Component } from "react";

class NewTask extends Component {
  
    constructor(){
      super();
  
      this.state = {
        list: [],
        input: ''
      }
  
      this.addTask = this.addTask.bind(this);
    }
  
  
  
    updateList(value) {
        this.setState({ input: value });
      }
  
    addTask() {
        this.props.add(this.state.input);
        this.setState({ input: "" });
      }

    render(){
    
      return (
        <div>
            <input value={this.state.input} placeholder="Enter Task" onChange={ e => this.updateList( e.target.value )}/>
            <button onClick={this.addTask}>Add Task</button>
        </div>
        );
    }
}

export default NewTask;