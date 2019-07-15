import React, { Component } from "react";

import "./styles.css";
import ToDoTextEditable from "./ToDoTextEditable";
class ToDoRow extends Component {
  onChange = event => {
    this.props.modifyIsCompleted(this.props.todo.id);
  };
  onClick = () => {
    if (window.confirm("Do you really want to delete ?")) {
      this.props.deleteCompletedToDo(this.props.todo.id);
    }
  };
  onClickEnter = value => {
    this.props.toUpdateToDo(value, this.props.todo.id);
  };
  render() {
    return (
      <div className="single-todo-row">
        <label className="checkbox-iscompleted">
          <input
            type="checkbox"
            checked={this.props.todo.isCompleted}
            onChange={this.onChange}
            className="input-checkbox"
          />
          <span className="checkbox-duplicate" />
        </label>
        <div>
          <div className="todo-single-editable-item">
            <ToDoTextEditable
              todo={this.props.todo}
              toUpdateToDo={this.props.toUpdateToDo}
              onClickEnter={this.onClickEnter}
            />
            <button onClick={this.onClick} className="delete-button">
              X
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default ToDoRow;
