import React, { Component } from "react";
import PropTypes from "prop-types";
import MSummary from "./presenter";
import $ from "jquery";
class Container extends Component {

  state = {
      loading:true,
      show:false,
      cn : "",
      pn : "",
      data : null,
      warning : false,
      image : [],
  };
  static propTypes = {
    find : PropTypes.func.isRequired,
  };
  _handleInputChange = event => {
    const { target: { value, name } } = event;
    this.setState({
      [name]: value
    });
    console.log(name,value);
  };
  selectOnChange = event => {
    
    const { target: { value } } = event;
    this.changeDate(value);
  };
  changeDate(index){
    const { data } = this.state;
    var arr = []
    
    for(var i=0;i<data[index].repairImg.length;i++){
      arr.push({url: data[index].repairImg[i].img_url})
    }
    this.setState({
      image: arr
    });
    console.log(arr);
    this.setState({
      show: true,
    });
  };
  _handleSubmit = event => {
    const { cn} = this.state;
    const { find } = this.props;
    event.preventDefault();
    find(cn);
    console.log("dd")
    
  };
  componentWillReceiveProps = nextProps => {
    console.log(nextProps.repair)
    if (nextProps.repair) {
      this.setState({
        data: nextProps.repair,
        loading:false 
      });
      var arr = [];
      for(var i=0;i<nextProps.repair[0].repairImg.length;i++){
        arr.push({url: nextProps.repair[0].repairImg[i].img_url})
      }
      this.setState({
        image: arr
      });
      this.setState({
        show: true,
      });
      console.log(arr);
    };
    if (nextProps.err) {
      console.log(nextProps.err);
      this.setState({
        warning: true,
      });
    };
  };
  

  componentDidMount() {
  };

  render() {
    
    return (
      <MSummary {...this.state} selectOnChange={this.selectOnChange} handleSubmit={this._handleSubmit} handleInputChange={this._handleInputChange}onKeyPress={this.onKeyPress}  onClick={this.onClick} />
      
    );
    
  }
}

export default Container;