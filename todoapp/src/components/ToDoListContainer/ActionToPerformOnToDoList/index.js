import React, { Component } from "react";
import "./styles.css";

class ActionToPerformOnToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onClickAll = () => {
    this.props.onClickingFilter("all");
  };
  onClickActive = () => {
    this.props.onClickingFilter("active");
  };
  onClickCompleted = () => {
    this.props.onClickingFilter("completed");
  };
  onClickClear = () => {
    this.props.onClickingClear("clear");
  };
  render() {
    return (
      <div className="actions-bar">
        {this.props.noOfActiveToDos || this.props.noOfCompletedToDos ? (
          <div>{this.props.noOfActiveToDos} items left</div>
        ) : null}
        <div>
          {this.props.noOfActiveToDos || this.props.noOfCompletedToDos ? (
            <button onClick={this.onClickAll}>All</button>
          ) : null}
          {this.props.noOfActiveToDos || this.props.noOfCompletedToDos ? (
            <button onClick={this.onClickActive}>Active</button>
          ) : null}
          {this.props.noOfActiveToDos || this.props.noOfCompletedToDos ? (
            <button onClick={this.onClickCompleted}>Completed</button>
          ) : null}
        </div>
        <div>
          {this.props.noOfCompletedToDos ? (
            <button onClick={this.onClickClear}>Clear Completed</button>
          ) : null}
        </div>
      </div>
    );
  }
}
export default ActionToPerformOnToDoList;
