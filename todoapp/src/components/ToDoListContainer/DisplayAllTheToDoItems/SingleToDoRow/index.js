import React, { Component } from "react";

import "./styles.css";
import ToDoTextEditable from "./ToDoTextEditable";
class SingleToDoRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="single-row-todo">
        <input type="checkbox" checked={this.props.list.isCompleted} />
        <ToDoTextEditable toDoText={this.props.list.toDoText} />
        <button>X</button>
      </div>
    );
  }
}
export default SingleToDoRow;
