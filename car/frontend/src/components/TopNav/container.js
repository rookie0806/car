import React, { Component } from "react";
import PropTypes from "prop-types";
import TopNav from "./presenter";
import $ from "jquery";
class Container extends Component {
  scrollToLocation = event => {
    event.preventDefault();
    var offset = $("#Location").offset();
    $('html, body').animate({scrollTop : offset.top}, 400);
  }
  scrollToFooter = event => {
    event.preventDefault();
    var offset = $("#Footer").offset();
    $('html, body').animate({scrollTop : offset.top}, 400);
  }
  
  render() {
    const {isLoggedIn,nickname} = this.props;
    return (
      <TopNav scrollToLocation={this.scrollToLocation} scrollToFooter={this.scrollToFooter} />
    );
  }

}

export default Container;