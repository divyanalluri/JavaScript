import React, { Component } from "react";

import SingleToDoRow from "./SingleToDoRow";

class DisplayAllTheToDoItems extends Component {
  renderList = () => {
    const filteredtodo = this.props.toDoList;
    if (this.props.action === "all") {
      this.filteredtodo = this.props.toDoList;
    } else if (this.props.action === "completed") {
      this.filteredtodo = this.props.toDoList.filter(function(todo) {
        return todo.isCompleted === true;
      });
    } else if (this.props.action === "active") {
      this.filteredtodo = this.props.toDoList.filter(function(todo) {
        return todo.isCompleted === false;
      });
    }
    return this.filteredtodo.map(todo => (
      <SingleToDoRow
        todo={todo}
        key={todo.id}
        modifyIsCompleted={this.props.modifyIsCompleted}
        deleteCompletedToDo={this.props.deleteCompletedToDo}
        toUpdateToDo={this.props.toUpdateToDo}
      />
    ));
  };
  render() {
    return <div>{this.renderList()}</div>;
  }
}
export default DisplayAllTheToDoItems;
