import React, { Component } from "react";

import AllToDoItems from "./AllToDoItems";
import ActiveToDoItems from "./ActiveToDoItems";
import CompletedToDoItems from "./CompletedToDoItems";
import ClearCompletedItems from "./ClearCompletedItems";

class ActionToPerformOnToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: {}
    };
  }
  addNewToDoToList = item => {
    this.setState({});
  };

  render() {
    return (
      <div>
        <AllToDoItems />
        <ActiveToDoItems />
        <CompletedToDoItems />
        <ClearCompletedItems />
      </div>
    );
  }
}
export default ActionToPerformOnToDoList;
