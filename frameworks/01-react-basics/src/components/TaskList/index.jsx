import React, { Component } from "react";
import Task from "../Task/index.jsx";

export default class TaskList extends Component {
  constructor(props) {
    super(props);

    console.log(props)

    this.state = {
      tasks: props.tasks
    };
  }

  componentWillReceiveProps(props) {
    this.setState({ tasks: props.tasks });
  }

  render() {
    console.log('rendering tasklist', this.state)
    return (
        <div className="todos">
            <ul>
                {this.renderTasks()}
            </ul>
        </div>
    );
  }

  renderTasks() {
    return this.state.tasks && this.state.tasks.map((task, i) => (<Task model={task} key={i} />))
  }
}
