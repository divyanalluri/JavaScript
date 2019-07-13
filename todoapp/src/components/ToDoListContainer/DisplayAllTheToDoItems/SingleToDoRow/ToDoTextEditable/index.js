import React, { Component } from "react";

import "./styles.css";
class ToDoTextEditable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      todoText: ""
    };
  }

  onClick = () => {
    if (!this.state.editable) {
      this.setState({
        editable: true,
        todoText: this.props.todo.toDoText
      });
    } else {
      this.setState({
        editable: false
      });
    }
  };
  onKeyPress = event => {
    if (event.key === "Enter") {
      if (!this.state.editable) {
        this.setState({
          editable: true
        });
      } else {
        this.setState({
          editable: false
        });
      }
      this.props.toUpdateToDo(this.state.todoText, this.props.todo.id);
    }
  };
  onChange = event => {
    this.setState({
      todoText: event.target.value
    });
  };
  render() {
    return (
      <div>
        {this.state.editable ? (
          <input
            type="text"
            onChange={this.onChange}
            value={this.state.todoText}
            onKeyPress={this.onKeyPress}
            className="todo-item-editable"
          />
        ) : !this.props.todo.isCompleted ? (
          <span className="todo-list-tems" onClick={this.onClick}>
            {this.props.todo.toDoText}
          </span>
        ) : (
          <strike className="todo-list-tems">{this.props.todo.toDoText}</strike>
        )}
      </div>
    );
  }
}
export default ToDoTextEditable;
