import React, { Component } from "react";

class ToDoTextEditable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <span>
        {!this.props.todo.isCompleted ? (
          this.props.todo.toDoText
        ) : (
          <strike>{this.props.todo.toDoText}</strike>
        )}
      </span>
    );
  }
}
export default ToDoTextEditable;
