import React, { Component } from "react";
import "./App.css";
import TaskList from "./components/TaskList/index.jsx";
import NewTaskForm from "./components/NewTaskForm/index.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };
  }

  addTask(task) {
    console.log(this.state.tasks.concat({ ...task, status: "open" }))
    this.setState({
      tasks: this.state.tasks.concat({ ...task, status: "open" })
    });
  }

  render() {
    return (
      <div className="App">
        <div className="list-selector">My todo list</div>
        <TaskList tasks={this.state.tasks} />
        <NewTaskForm addTask={task => this.addTask(task)} />
      </div>
    );
  }
}

export default App;
