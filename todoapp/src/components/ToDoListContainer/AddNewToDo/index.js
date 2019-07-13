import React, { Component } from "react";

import "./styles.css";
class AddNewToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newToDoItem: ""
    };
  }
  onChange = event => {
    this.setState({
      newToDoItem: event.target.value
    });
  };
  onKeyPress = event => {
    if (event.key === "Enter") {
      if (this.state.newToDoItem !== "") {
        this.props.addNewToDoToList(this.state.newToDoItem);
        this.setState({
          newToDoItem: ""
        });
      }
    }
  };
  render() {
    return (
      <div className="todo-item">
        <span className="drop-down" />
        <input
          type="text"
          onChange={this.onChange}
          className="todo-init-item"
          onKeyPress={this.onKeyPress}
          value={this.state.newToDoItem}
          placeholder="What needs to be done?"
        />
      </div>
    );
  }
}
export default AddNewToDo;
