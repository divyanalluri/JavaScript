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
        <div className="items-left">
          {this.props.noOfActiveToDos || this.props.noOfCompletedToDos ? (
            <div>{this.props.noOfActiveToDos} items left</div>
          ) : null}
        </div>
        <div>
          {this.props.noOfActiveToDos || this.props.noOfCompletedToDos ? (
            this.props.action == "all" ? (
              <button onClick={this.onClickAll} className="selected">
                All
              </button>
            ) : (
              <button onClick={this.onClickAll} className="buttons">
                All
              </button>
            )
          ) : null}
          {this.props.noOfActiveToDos || this.props.noOfCompletedToDos ? (
            this.props.action == "active" ? (
              <button onClick={this.onClickActive} className="selected">
                Active
              </button>
            ) : (
              <button onClick={this.onClickActive} className="buttons">
                Active
              </button>
            )
          ) : null}
          {this.props.noOfActiveToDos || this.props.noOfCompletedToDos ? (
            this.props.action == "completed" ? (
              <button onClick={this.onClickCompleted} className="selected">
                Completed
              </button>
            ) : (
              <button onClick={this.onClickCompleted} className="buttons">
                Completed
              </button>
            )
          ) : null}
        </div>
        <div>
          {this.props.noOfCompletedToDos ? (
            <div onClick={this.onClickClear} className="clear-button">
              Clear Completed
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
export default ActionToPerformOnToDoList;
