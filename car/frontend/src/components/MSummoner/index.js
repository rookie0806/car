import { connect } from "react-redux";
import { actionCreators as dataActions } from "../../redux/modules/data";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const { data:{mmr,mmrdate},router: { location } } = state;
  const { params: { summonername } }  = ownProps.match;
  return {
    summonername,
    location,
    mmr,
    mmrdate
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { params: { summonername } }  = ownProps.match;
  return {
    getmmrdata : () => {
      dispatch(dataActions.getMMR(summonername));
    },
    getmmrdate : () => {
      dispatch(dataActions.getMMRDate(summonername));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);