import React, { Component } from "react";

import AddNewToDo from "./AddNewToDo";
import DisplayAllTheToDoItems from "./DisplayAllTheToDoItems";
import ActionToPerformOnToDoList from "./ActionToPerformOnToDoList";

import "./styles.css";

class ToDoListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      action: "all"
    };
  }
  addNewToDoToList = item => {
    const toDoListvalues = this.state.toDoList;
    let toDoitem = {
      isCompleted: false,
      id: Date.now(),
      toDoText: item
    };
    toDoListvalues.push(toDoitem);
    this.setState({
      toDoList: toDoListvalues
    });
  };
  deleteCompletedToDo = id => {
    var index = 0;
    const deleteRow = this.state.toDoList;
    index = this.state.toDoList.findIndex(todo => todo.id === id);
    deleteRow.splice(index, 1);
    this.setState({
      toDoList: deleteRow
    });
  };
  modifyIsCompleted = id => {
    var index = 0;
    const modifyToDoList = this.state.toDoList;
    index = this.state.toDoList.findIndex(todo => todo.id === id);
    modifyToDoList[index].isCompleted = !this.state.toDoList[index].isCompleted;
    this.setState({
      toDoList: modifyToDoList
    });
  };
  toUpdateToDo = (updatedToDoMessage, id) => {
    var index = 0;
    const updaterow = this.state.toDoList;
    if (updatedToDoMessage === "") {
      this.deleteCompletedToDo(id);
      return;
    }
    index = this.state.toDoList.findIndex(todo => todo.id === id);
    updaterow[index].toDoText = updatedToDoMessage;
    this.setState({
      toDoList: updaterow
    });
  };
  onClickingFilter = action => {
    this.setState({
      action: action
    });
  };
  onClickingClear = () => {
    const filtering = this.state.toDoList;
    this.filtering = this.state.toDoList.filter(function(todo) {
      return todo.isCompleted === false;
    });
    this.setState({
      toDoList: this.filtering
    });
  };
  noOfActiveToDos = () => {
    this.count = this.state.toDoList.filter(function(todo) {
      return todo.isCompleted === false;
    });
    return this.count.length;
  };
  noOfCompletedToDos = () => {
    this.count = this.state.toDoList.filter(function(todo) {
      return todo.isCompleted === true;
    });
    return this.count.length;
  };
  render() {
    return (
      <div className="todo-list-container">
        <div className="todo-heading">todos</div>
        {
          // TODO: change prop name into enter (contains)
        }
        <AddNewToDo addNewToDoToList={this.addNewToDoToList} />
        <DisplayAllTheToDoItems
          toDoList={this.state.toDoList}
          action={this.state.action}
          modifyIsCompleted={this.modifyIsCompleted}
          deleteCompletedToDo={this.deleteCompletedToDo}
          toUpdateToDo={this.toUpdateToDo}
        />
        {this.noOfActiveToDos() || this.noOfCompletedToDos() ? (
          <ActionToPerformOnToDoList
            noOfActiveToDos={this.noOfActiveToDos()}
            noOfCompletedToDos={this.noOfCompletedToDos()}
            todo={this.state.toDoList}
            onClickingFilter={this.onClickingFilter}
            onClickingClear={this.onClickingClear}
            action={this.state.action}
          />
        ) : null}
      </div>
    );
  }
}
export default ToDoListContainer;
