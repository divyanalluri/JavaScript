import React, { Component } from "react";

import "./styles.css";
class ToDoTextEditable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClick = () => {
    document.getElementById("todo-text").contentEditable = true;
    //alert(document.getElementById("todo-text").innerHTML);
  };
  onKeyPress = event => {
    if (event.key === "Enter") {
      alert(document.getElementById("todo-text").innerHTML);
      this.props.toUpdateToDo(
        document.getElementById("todo-text").innerHTML,
        this.props.todo.id
      );
    }
  };
  render() {
    return (
      <span
        className="todo-text"
        onClick={this.onClick}
        onKeyPress={this.onKeyPress}
        id="todo-text"
      >
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
