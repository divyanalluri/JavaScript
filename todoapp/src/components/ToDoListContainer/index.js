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

  deleteCompletedToDo = id => {
    var index = 0;
    alert(id);
    const deleteRow = this.state.toDoList;
    for (var i = 0; i < this.state.toDoList.length; i++) {
      if (this.state.toDoList[i].id == id) {
        index = i;
        break;
      }
    }
    alert(index);
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
    alert(updatedToDoMessage);
    var index = 0;
    const updaterow = this.state.toDoList;
    for (var i = 0; i < this.state.toDoList.length; i++) {
      if (this.state.toDoList[i].id == id) {
        index = i;
        break;
      }
    }
    alert(index);
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

  render() {
    console.log("todos", this.state.toDoList);
    return (
      <div className="todo-ist-container">
        <AddNewToDo addNewToDoToList={this.addNewToDoToList} />
        <DisplayAllTheToDoItems
          toDoText={this.state.toDoList}
          modifyIsCompleted={this.modifyIsCompleted}
          deleteCompletedToDo={this.deleteCompletedToDo}
          toUpdateToDo={this.toUpdateToDo}
        />
        <ActionToPerformOnToDoList
          onClickingAll={this.onClickingAll}
          onClickingActive={this.onClickingActive}
          onClickingCompleted={this.onClickingCompleted}
          onClickingClearCompleted={this.onClickingClearCompleted}
        />
      </div>
    );
  }
}
export default ToDoListContainer;
