import React, { Component } from "react";

export default class Task extends Component {
    constructor(props) {
        super(props);
        this.state = props.model;
    }

    render () {
        return (
            <li className={["task", this.state.status]} data-task-id={this.state.id}>
                <span className="title">
                    <i className="far fa-circle complete"></i>
                    {this.state.title}
                </span>
                <i className="far fa-trash-alt delete-task"></i>
                <i className="far fa-file-alt toggle-description"></i>
                <p className="description hidden">{this.state.description}</p>
            </li>
        );
    }
};
