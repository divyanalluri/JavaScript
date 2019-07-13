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
    for (var i = 0; i < this.state.toDoList.length; i++) {
      if (this.state.toDoList[i].id == id) {
        index = i;
        break;
      }
    }
    deleteRow.splice(index, 1);
    this.setState({
      toDoList: deleteRow
    });
  };

  modifyIsCompleted = id => {
    var index = 0;
    const modifyToDoList = this.state.toDoList;
    for (var i = 0; i < this.state.toDoList.length; i++) {
      if (this.state.toDoList[i].id == id) {
        index = i;
        break;
      }
    }
    let modifyitem = {
      isCompleted: !this.state.toDoList[index].isCompleted,
      id: this.state.toDoList[index].id,
      toDoText: this.state.toDoList[index].toDoText
    };
    modifyToDoList[index] = modifyitem;
    this.setState({
      toDoList: modifyToDoList
    });
  };

  toUpdateToDo = (updatedToDoMessage, id) => {
    var index = 0;
    const updaterow = this.state.toDoList;
    if (updatedToDoMessage == "") {
      this.deleteCompletedToDo(id);
      return;
    }
    for (var i = 0; i < this.state.toDoList.length; i++) {
      if (this.state.toDoList[i].id == id) {
        index = i;
        break;
      }
    }
    let updateitem = {
      isCompleted: this.state.toDoList[index].isCompleted,
      id: this.state.toDoList[index].id,
      toDoText: updatedToDoMessage
    };
    updaterow[index] = updateitem;
    this.setState({
      toDoList: updaterow
    });
  };
  filteredtodo = [];

  onClickingFilter = action => {
    this.setState({
      action: action
    });
  };
  filterData = () => {
    const filtering = this.state.toDoList;
    if (this.state.action == "all") {
      this.filteredtodo = filtering;
    } else if (this.state.action == "completed") {
      this.filteredtodo = filtering.filter(function(todo) {
        return todo.isCompleted == true;
      });
    } else if (this.state.action == "active") {
      this.filteredtodo = filtering.filter(function(todo) {
        return todo.isCompleted == false;
      });
    }
    return this.filteredtodo;
  };
  onClickingClear = () => {
    const filtering = this.state.toDoList;
    this.filteredtodo = filtering.filter(function(todo) {
      return todo.isCompleted == false;
    });
    this.setState({
      toDoList: this.filteredtodo
    });
  };
  noOfActiveToDos = () => {
    this.count = this.state.toDoList.filter(function(todo) {
      return todo.isCompleted == false;
    });
    return this.count.length;
  };
  noOfCompletedToDos = () => {
    this.count = this.state.toDoList.filter(function(todo) {
      return todo.isCompleted == true;
    });
    return this.count.length;
  };
  render() {
    console.log("todos", this.state.toDoList);
    return (
      <div className="todo-list-container">
        <text className="todo-heading">todos</text>
        <AddNewToDo addNewToDoToList={this.addNewToDoToList} />
        <DisplayAllTheToDoItems
          toDoText={this.filterData()}
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
