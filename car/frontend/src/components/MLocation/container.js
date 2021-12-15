import React, { Component } from "react";
import PropTypes from "prop-types";
import MLocation from "./presenter";

class Container extends Component {
  state = {
  };
  
  render() {
    return (
      <MLocation  {...this.state} {...this.props} />
    );
  }
}

export default Container;