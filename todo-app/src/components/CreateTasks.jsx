import React, { Component } from "react";

export default class CreateTasks extends Component {
  state = {
    newTask: "",
    isDone: false,
  };

  handleChange = (e) => {
    this.setState({ newTask: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.newTask, this.state.isDone);
    this.setState({ newTask: "" });
  };

  render() {
    return (
      <div>
        <div>
          <figure>
            <legend>Add new task</legend>

            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="newTask"
                value={this.state.newTask}
                placeholder="Input here"
                onChange={this.handleChange}
              />
              <button className="add" type="submit">
                Add
              </button>
            </form>
          </figure>
        </div>
      </div>
    );
  }
}
