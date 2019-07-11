import React, { Component } from "react";

class ToDoTextEditable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <span>{this.props.toDoText}</span>;
  }
}
export default ToDoTextEditable;
