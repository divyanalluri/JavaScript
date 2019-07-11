import React, { Component } from "react";

import SearchingBar from "./SearchingBar";
import ProductTable from "./ProductTable";
import { productconstants } from "./constants";

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      checked: false
    };
  }
  valueChange = value => {
    this.setState({
      value: value
    });
  };
  statusChange = checked => {
    this.setState({
      checked: checked
    });
  };
  TODO: "fix the bug";
  render() {
    const arr = [];
    for (var i = 0; i < productconstants.length; i++) {
      if (productconstants[i].name.indexOf(this.state.value) != -1) {
        arr.push(productconstants[i]);
      }
    }
    return (
      <div className="filterable-product-table">
        <SearchingBar
          valueChange={this.valueChange}
          statusChange={this.statusChange}
        />
        <ProductTable
          product={arr}
          value={this.state.value}
          checked={this.state.checked}
        />
      </div>
    );
  }
}
export default FilterableProductTable;
