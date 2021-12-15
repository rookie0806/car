import React, { Component } from "react";
import PropTypes from "prop-types";
import Location from "./presenter";

class Container extends Component {
  state = {
  };
  
  render() {
    return (
      <Location  {...this.state} {...this.props} />
    );
  }
}

export default Container;