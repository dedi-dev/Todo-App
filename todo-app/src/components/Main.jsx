import React, { Component } from "react";
import CreateTasks from "./CreateTasks";
import ListTasks from "./ListTasks";

const varTasks = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];

export default class Main extends Component {
  state = {
    Tasks: [],
  };

  addTask = (newTask, isDone) => {
    if (newTask.trim() === "") {
      alert("Task can't be empty!!");
      return;
    }
    varTasks.push({ name: newTask, isDone: isDone });
    this.setState({ Tasks: varTasks });
    localStorage.setItem("tasks", JSON.stringify(varTasks));
  };

  handleDelete = (idx) => {
    varTasks.splice(idx, 1);
    this.setState({ Tasks: varTasks });
    localStorage.setItem("tasks", JSON.stringify(varTasks));
  };

  handleEdit = (idx, editTask) => {
    varTasks[idx].name = editTask;
    this.setState({ Tasks: varTasks });
    localStorage.setItem("tasks", JSON.stringify(varTasks));
  };

  toggleTask = (idx) => {
    varTasks[idx].isDone = !varTasks[idx].isDone;
    this.setState({ Tasks: varTasks });
    localStorage.setItem("tasks", JSON.stringify(varTasks));
  };
  render() {
    return (
      <div className="main">
        <h1>Todo Lists</h1>
        <div className="content">
          <CreateTasks addTask={this.addTask} />

          <ListTasks
            tasks={varTasks}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
            toggleTask={this.toggleTask}
          />
        </div>
      </div>
    );
  }
}
