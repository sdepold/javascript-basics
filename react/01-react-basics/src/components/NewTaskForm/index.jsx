import React, { Component } from "react";

export default class NewTaskForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            showForm: false
        };
        this.propagateNewTask = props.addTask;
    }

    handleSubmit (e) {
        e.preventDefault();

        const form = e.target;

        this.propagateNewTask({
            title: form.querySelector('[name=title]').value,
            description: form.querySelector('[name=description]').value
        });
        this.toggleForm();
        form.reset();
    }

    render () {
        return (
            <>
                <div className="add-todo">
                    <button onClick={() => this.toggleForm()}>
                        <i className="fas fa-plus"></i>
                        New Task
                    </button>
                </div>
                <form className={this.state.showForm ? "" : "hidden"} onSubmit={(e) => this.handleSubmit(e)}>
                    <input placeholder="Title" type="text" name="title" required />
                    <textarea placeholder="Description" name="description"></textarea>
                    <input type="submit" value="Add task" />
                </form>
            </>
        );
    }

    toggleForm () {
        this.setState({ showForm: !this.state.showForm });
    }
}
