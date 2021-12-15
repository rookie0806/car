import React, { Component } from "react";
import PropTypes from "prop-types";
import MInfo from "./presenter";

class Container extends Component {

  static propTypes = {

  };
  componentDidMount() {

  }
  componentWillReceiveProps = nextProps => {
  
  };
  render() {
    const { summonername } = this.props;
    
    return (
      <MInfo  {...this.state} {...this.props} />
    );
  }
}

export default Container;