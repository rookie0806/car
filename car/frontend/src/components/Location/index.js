import { connect } from "react-redux";
import { actionCreators as dataActions } from "../../redux/modules/data";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const { router: { location } } = state;
  return {
    location,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
   
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);