import { connect } from "react-redux";
import Container from "./container";
import { push } from "react-router-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
const mapStateToProps = (state, ownProps) => {
  const { user, router: { location } } = state;
  const { user: { err, token, nickname} } = state;
  return {
    err,
    token,
    nickname,
    isLoggedIn: user.isLoggedIn,
    pathname: location.pathname
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    
    usernameLogin: (username, password) => {
      dispatch(userActions.usernameLogin(username, password));
    },
    createAccount: (username, password) => {
      dispatch(userActions.createAccount(username, password));
    },
    logOut: () => {
      dispatch(userActions.logout());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);