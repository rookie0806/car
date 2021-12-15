import React, { Component } from "react";
import PropTypes from "prop-types";
import LOGIN from "./presenter";

class Container extends Component {
  state = {
    loading: false,
    loading2: false,
    text : "",
    average : 0,
    averagetier : "",
  };
  static propTypes = {
    
    mmr: PropTypes.array.isRequired,
    summonername: PropTypes.string.isRequired,
    getMultiMMR: PropTypes.func.isRequired,

  };
  componentDidMount() {

  }
  onClick = (e) => {
    const {getMultiMMR } = this.props;
    const {text,loading2} = this.state;
    console.log(text);
    const value = text.replace(/님이 로비에 참가하셨습니다./g, ',').replace(/\n/g, '')
    const array = value.split(',');
    var i = 0;
    var str = "";
    while(i<array.length -1){
      if(i==0){
        str = array[0]
      }
      else{
        str = str + "," + array[i];
      }
      
      i = i + 1
    }
    console.log(array.length)
    if(array.length>1){
      getMultiMMR(str);
      this.setState({
        loading: false,
        loading2 : true
      });
    }
    
    
  }
  mmrtolp(mmr){
    
    var tier = ["Iron","Bronze","Silver","Gold","Platinum","Diamond","Master","Grandmaster","Challenger"]
    var text = ""
    var tiernum = ""
    var tiertext = tier[parseInt(mmr/400)]
    var text = text + tiertext
    var tierlp
    if(mmr/400<6){
      tiernum = 4 - parseInt(mmr % 400 / 100)
        text = text + " " + (tiernum)
        tierlp = mmr % 100
    }
        
    else{
      tiernum = 1
      tierlp = mmr-2400
    }
        
    text = text + " " + tierlp + "LP"

    return text
  }
  onKeyPress = (e) =>{
    this.setState({
      text : e.target.value
    })

  }
  componentWillReceiveProps = nextProps => {
    const {loading2} = this.state;
    if(nextProps.mmr && loading2){
      this.setState({
        loading: true,
        loading2: false
      });
      var i;
      var temp = 0;
      var cnt = 0;
      for(i=0;i<nextProps.mmr.length;i++){
        if((nextProps.mmr[i].mmr>0)){
          temp = temp + nextProps.mmr[i].mmr;
          cnt = cnt + 1
          
        }
        
      }
      this.setState({
        average : parseInt(temp/cnt),
        averagetier : this.mmrtolp(parseInt(temp/cnt))
      });
    }

  };
  render() {
    const { summonername } = this.props;
    
    return (
      <LOGIN  {...this.state} {...this.props} onKeyPress={this.onKeyPress}  onClick={this.onClick} />
    );
  }
}

export default Container;