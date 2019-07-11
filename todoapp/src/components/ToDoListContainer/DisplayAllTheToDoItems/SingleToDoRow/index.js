import React, { Component } from "react";

import "./styles.css";
import ToDoTextEditable from "./ToDoTextEditable";
class SingleToDoRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onChange = event => {
    alert(event.target.checked);
    this.props.modifyIsCompleted(this.props.todo.id);
  };
  render() {
    return (
      <div className="single-row-todo">
        <input
          type="checkbox"
          checked={this.props.todo.isCompleted}
          onChange={this.onChange}
        />
        <ToDoTextEditable todo={this.props.todo} />
        <button>X</button>
      </div>
    );
  }
}
export default SingleToDoRow;
