import { connect } from "react-redux";
import { actionCreators as dataActions } from "../../redux/modules/data";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const { router: { location } } = state;
  const { data: { repair,err} } = state;
  return {
    repair,
    err,
    location
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    find: (cn) => {
      dispatch(dataActions.find(cn));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);