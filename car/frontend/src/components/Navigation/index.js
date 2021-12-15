import { connect } from "react-redux";
import Container from "./container";
import { push } from "react-router-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    
    usernameLogin: (username, password) => {
      dispatch(userActions.usernameLogin(username, password));
    },
    createAccount: (username, password) => {
      dispatch(userActions.createAccount(username, password));
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);