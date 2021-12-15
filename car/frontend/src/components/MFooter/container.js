import React, { Component } from "react";
import MFooter from "./presenter";
import $ from "jquery";
class Container extends Component {
  constructor() {
    super();
      this.state = {
        first : false,
        second : false,
        third : false,
        scrollTop: 0,
        scroll: false,
      }
  }

  update(){
    setTimeout( () => {
      this.setState( prevState => ({
        first: true
      }));
    }, 2000);
    
  }
  update2(){
    setTimeout( () => {
      this.setState( prevState => ({
        second: true
      }));
    }, 2000);

  }
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);

    this.update()
    this.update2()
  }
  
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }




  onScroll = (e) => {
    
  };
  render() {
    return <MFooter {...this.state} {...this.props} />;
  }
}

export default Container;