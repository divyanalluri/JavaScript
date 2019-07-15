import React, { Component } from "react";
class ToDoText extends Component {
  render() {
    return (
      <div>
        {!this.props.todo.isCompleted ? (
          <span className="todo-list-tems" onClick={this.props.onClick}>
            {this.props.todo.toDoText}
          </span>
        ) : (
          <strike className="todo-list-tems">{this.props.todo.toDoText}</strike>
        )}
      </div>
    );
  }
}
export default ToDoText;
