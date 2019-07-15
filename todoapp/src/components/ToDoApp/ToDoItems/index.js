import React, { Component } from "react";

import ToDoRow from "./ToDoRow";

class ToDoItems extends Component {
  onPressEnter = () => {
    this.props.toUpdateToDo();
  };
  renderList = () => {
    const filteredtodo = this.props.toDoList;
    if (this.props.filter === "all") {
      this.filteredtodo = this.props.toDoList;
    } else if (this.props.filter === "completed") {
      this.filteredtodo = this.props.toDoList.filter(function(todo) {
        return todo.isCompleted === true;
      });
    } else if (this.props.filter === "active") {
      this.filteredtodo = this.props.toDoList.filter(function(todo) {
        return todo.isCompleted === false;
      });
    }
    return this.filteredtodo.map(todo => (
      <ToDoRow
        todo={todo}
        key={todo.id}
        modifyIsCompleted={this.props.modifyIsCompleted}
        deleteCompletedToDo={this.props.deleteCompletedToDo}
        toUpdateToDo={this.props.toUpdateToDo}
        onClickEnter={this.props.onClickEnter}
      />
    ));
  };
  render() {
    return <div>{this.renderList()}</div>;
  }
}
export default ToDoItems;
