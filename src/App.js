
import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super()
    
    this.removeTask = this.removeTask.bind(this);
    ;

    this.state = {
      task: {
        text: '',
        id: uniqid()
      },
      tasks: [],
    };
  }

  removeTask(task) {
    
    let array = [...this.state.tasks];
    let index = array.indexOf(task)
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({tasks: array});
    }
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '', 
        id: uniqid(),

      },
    });
  };

  

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input 
            type="text" 
            id="taskInput"
            onChange={this.handleChange}
            value={task.text}
          />
          <button type="submit">
            Add Task
          </button>
        </form>
        <Overview tasks={tasks} removeTask={this.removeTask} />

      </div>
    );
  }
}

export default App;