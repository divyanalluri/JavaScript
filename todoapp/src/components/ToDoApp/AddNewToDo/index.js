import React, { Component } from "react";

import "./styles.css";
class AddNewToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newToDoItem: props.value
    };
  }
  onChange = event => {
    this.setState({
      newToDoItem: event.target.value
    });
  };
  onKeyPress = event => {
    if (event.key === "Enter") {
      if (this.props.className == "todo-init-item") {
        if (this.state.newToDoItem !== "") {
          this.props.onClickEnter(this.state.newToDoItem);
          this.setState({
            newToDoItem: ""
          });
        }
      } else {
        this.props.onClickEnter(this.state.newToDoItem);
        this.setState({
          newToDoItem: ""
        });
      }
    }
  };
  render() {
    return (
      <div className="todo-item">
        <span className={this.props.spann} />
        <input
          type="text"
          onChange={this.onChange}
          className={this.props.className}
          onKeyPress={this.onKeyPress}
          value={this.state.newToDoItem}
          placeholder={this.props.placeholder}
          autoFocus
        />
      </div>
    );
  }
}
export default AddNewToDo;
