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
      console.log(this.state.newToDoItem);
      this.props.addNewToDoToList(this.state.newToDoItem);
      this.setState({
        newToDoItem: ""
      });
    }
  };
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.onChange}
          className="todo-item"
          id="todo-item"
          onKeyPress={this.onKeyPress}
          value={this.state.newToDoItem}
        />
      </div>
    );
  }
}
export default AddNewToDo;
