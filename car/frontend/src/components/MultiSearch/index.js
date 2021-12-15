import { connect } from "react-redux";
import { actionCreators as dataActions } from "../../redux/modules/data";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const { data:{mmr},router: { location } } = state;

  return {
    location,
    mmr,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    getMultiMMR : (summonername) => {
      dispatch(dataActions.getMultiMMR(summonername));
    },

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);