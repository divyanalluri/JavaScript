import React, { Component } from "react";

import "./styles.css";
import ToDoText from "./ToDoText";
import AddNewToDo from "../../../../ToDoApp/AddNewToDo";

class ToDoTextEditable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false
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
  changeEditable = text => {
    this.setState({
      editable: !this.state.editable
    });
    this.props.onClickEnter(text);
  };
  render() {
    return (
      <div>
        {!this.state.editable ? (
          <ToDoText onClick={this.onClick} todo={this.props.todo} />
        ) : (
          <AddNewToDo
            value={this.props.todo.toDoText}
            onClickEnter={this.changeEditable}
            className="todo-edit-item"
            spann="nospacing"
            placeholder=""
          />
        )}
      </div>
    );
  }
}
export default ToDoTextEditable;
