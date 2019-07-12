import React, { Component } from "react";

import SingleToDoRow from "./SingleToDoRow";

class DisplayAllTheToDoItems extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderList = () => {
    return this.props.toDoText.map(todo => (
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
