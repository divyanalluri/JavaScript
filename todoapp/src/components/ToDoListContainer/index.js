import React, { Component } from "react";

import AddNewToDo from "./AddNewToDo";
import DisplayAllTheToDoItems from "./DisplayAllTheToDoItems";
import ActionToPerformOnToDoList from "./ActionToPerformOnToDoList";

class ToDoListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [
        {
          isCompleted: false,
          id: 1,
          toDoText: "hello"
        },
        {
          isCompleted: true,
          id: 2,
          toDoText: "hello2"
        },
        {
          isCompleted: false,
          id: 3,
          toDoText: "hello3"
        }
      ]
    };
  }
  addNewToDoToList = item => {
    // alert(item);
    // const samplearray = this.state.toDoList;
    // samplearray.push(todoitem1);
    // this.setState({
    //   toDoList: samplearray
    // });
  };

  render() {
    return (
      <div>
        <AddNewToDo addNewToDoToList={this.addNewToDoToList} />
        <DisplayAllTheToDoItems list={this.state.toDoList} />
        <ActionToPerformOnToDoList />
      </div>
    );
  }
}
export default ToDoListContainer;
