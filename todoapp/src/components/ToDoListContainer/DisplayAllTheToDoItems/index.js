import React, { Component } from "react";

import SingleToDoRow from "./SingleToDoRow";

class DisplayAllTheToDoItems extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderList = () => {
    const sample = [];
    for (var i = 0; i < this.props.list.length; i++) {
      sample.push(
        <div>
          <SingleToDoRow list={this.props.list[i]} />
        </div>
      );
    }
    return sample;
  };
  render() {
    return <div>{this.renderList()}</div>;
  }
}
export default DisplayAllTheToDoItems;
