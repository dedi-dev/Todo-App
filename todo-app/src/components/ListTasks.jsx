import React, { Component } from "react";
import ListItem from "./ListItem";

export default class ListTasks extends Component {
  // renderTodo = () => {};
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.props.tasks.map((task, id) => {
            return (
              <ListItem
                key={id}
                idx={id}
                name={task.name}
                handleDelete={this.props.handleDelete}
                handleSaveEdit={this.props.handleEdit}
                toggleTask={this.props.toggleTask}
                isDone={task.isDone}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}
