import React, { Component } from "react";

//onClick = () => {};
class CompletedToDoItems extends Component {
  render() {
    return <button onClick={this.onClick}>Completed</button>;
  }
}
export default CompletedToDoItems;
