import React, { Component } from "react";

import "./styles.css";
import ToDoTextEditable from "./ToDoTextEditable";
class SingleToDoRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onChange = event => {
    this.props.modifyIsCompleted(this.props.todo.id);
  };
  onClick = () => {
    if (window.confirm("Do you really want to delete ?")) {
      this.props.deleteCompletedToDo(this.props.todo.id);
    }
  };
  render() {
    return (
      <div className="single-row-todo">
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
            />
            <button onClick={this.onClick} className="delete-buttons">
              X
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default SingleToDoRow;
