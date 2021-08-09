import React, { Component } from "react";

export default class ListItem extends Component {
  state = {
    editTask: this.props.name,
    isEdit: false,
  };

  handleChange = (e) => {
    this.setState({ editTask: e.target.value });
  };

  editToggle = (e) => {
    this.setState({ isEdit: e });
  };

  handleDelete = () => {
    this.props.handleDelete(this.props.idx);
  };

  handleSaveEdit = (e) => {
    e.preventDefault();
    this.props.handleSaveEdit(this.props.idx, this.state.editTask);
    this.setState({ isEdit: false });
  };

  toggleTask = () => {
    this.props.toggleTask(this.props.idx);
  };

  render() {
    return (
      <tr>
        {!this.state.isEdit ? (
          <>
            <td className="task" onClick={this.toggleTask}>
              <input type="checkbox" checked={this.props.isDone} readOnly />
              <span className={this.props.isDone ? "complete" : "inComplete"}>
                {this.props.name}
              </span>
            </td>
            <td>
              <button className="edit" onClick={() => this.editToggle(true)}>
                Edit
              </button>
              <button className="delete" onClick={this.handleDelete}>
                Delete
              </button>
            </td>
          </>
        ) : (
          <>
            <td>
              <input
                type="text"
                name="input"
                defaultValue={this.props.name}
                autoFocus
                onChange={this.handleChange}
              />
            </td>
            <td>
              <button className="save" onClick={this.handleSaveEdit}>
                Save
              </button>
              <button className="cancel" onClick={() => this.editToggle(false)}>
                Cancel
              </button>
            </td>
          </>
        )}
      </tr>
    );
  }
}
