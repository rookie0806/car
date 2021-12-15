import React, { Component } from "react";
import PropTypes from "prop-types";
import MSummoner from "./presenter";

class Container extends Component {
  state = {
    loading: true,
    loading2: true,
    data : [
      {
        date : '21/09/01', mmr: 1900
      },
      {
        date : '21/09/02', mmr: 1920
      },
      {
        date : '21/09/03', mmr: 1930
      },
      {
        date : '21/09/01', mmr: 1900
      },
      {
        date : '21/09/02', mmr: 1950
      },
      {
        date : '21/09/03', mmr: 1930
      },
      {
        date : '21/09/01', mmr: 1970
      },
      {
        date : '21/09/02', mmr: 1980
      },
      {
        date : '21/09/03', mmr: 1990
      },
      
    ]
  };
  static propTypes = {

    mmr: PropTypes.array.isRequired,
    summonername: PropTypes.string.isRequired,
    getmmrdata: PropTypes.func.isRequired,
    getmmrdate: PropTypes.func.isRequired,
  };
  componentDidMount() {

    const {getmmrdata } = this.props;
    getmmrdata();
  }
  componentWillReceiveProps = nextProps => {
    const {loading2} = this.state;
    if(nextProps.mmr && loading2){
      const {getmmrdate } = this.props;
      getmmrdate();
      this.setState({
        loading2: false
      });


    }
    if(nextProps.mmrdate){
      console.log("dd");
      this.setState({
        loading: false
      });

    }
  };
  render() {
    const { summonername } = this.props;
    
    return (
      <MSummoner  {...this.state} {...this.props} />
    );
  }
}

export default Container;