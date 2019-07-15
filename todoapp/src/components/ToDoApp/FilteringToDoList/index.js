import React, { Component } from "react";
import "./styles.css";
import { filters } from "./constants";
class FilteringToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onClickAll = () => {
    this.props.onClickingFilter(filters.all);
  };
  onClickActive = () => {
    this.props.onClickingFilter(filters.active);
  };
  onClickCompleted = () => {
    this.props.onClickingFilter(filters.completed);
  };
  onClickClear = () => {
    this.props.onClickingClear(filters.clear);
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
            this.props.filter === filters.all ? (
              <button onClick={this.onClickAll} className="selected">
                all
              </button>
            ) : (
              <button onClick={this.onClickAll} className="filter-buttons">
                all
              </button>
            )
          ) : null}
          {this.props.noOfActiveToDos || this.props.noOfCompletedToDos ? (
            this.props.filter === filters.active ? (
              <button onClick={this.onClickActive} className="selected">
                active
              </button>
            ) : (
              <button onClick={this.onClickActive} className="filter-buttons">
                active
              </button>
            )
          ) : null}
          {this.props.noOfActiveToDos || this.props.noOfCompletedToDos ? (
            this.props.filter === filters.completed ? (
              <button onClick={this.onClickCompleted} className="selected">
                completed
              </button>
            ) : (
              <button
                onClick={this.onClickCompleted}
                className="filter-buttons"
              >
                completed
              </button>
            )
          ) : null}
        </div>
        <div>
          {this.props.noOfCompletedToDos ? (
            <div onClick={this.onClickClear} className="clear-button">
              clear completed
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
export default FilteringToDoList;
