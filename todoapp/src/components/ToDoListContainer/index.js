import React, { Component } from "react";

import AddNewToDo from "./AddNewToDo";
import DisplayAllTheToDoItems from "./DisplayAllTheToDoItems";
import ActionToPerformOnToDoList from "./ActionToPerformOnToDoList";

class ToDoListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: []
    };
  }
  addNewToDoToList = item => {
    alert(item);
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
      isCompleted: true,
      id: this.state.toDoList[index].id,
      toDoText: this.state.toDoList[index].toDoText
    };
    modifyToDoList[index] = modifyitem;
    this.setState({
      toDoList: modifyToDoList
    });
  };
  render() {
    console.log("todos", this.state.toDoList);
    return (
      <div>
        <AddNewToDo addNewToDoToList={this.addNewToDoToList} />
        <DisplayAllTheToDoItems
          toDoText={this.state.toDoList}
          modifyIsCompleted={this.modifyIsCompleted}
        />
        <ActionToPerformOnToDoList />
      </div>
    );
  }
}
export default ToDoListContainer;
