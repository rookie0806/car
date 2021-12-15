
import { actionCreators as userActions } from "../../redux/modules/user";

const SET_REPAIR = "SET_REPAIR";
const SET_ERR = "SET_ERR";
function setRepair(repair) {
  return {
    type: SET_REPAIR,
    repair
  };
}
function setERR(err) {
  return {
    type: SET_ERR,
    err
  };
}
// API Actions
function find(cn) {
  return (dispatch, getState) => {
    const { user: { token } } = getState();
    fetch("/repair/find/?cn="+cn, {
    })
    .then(response => {
      return response.json();
    })
    .then(json => {
      if(json.err){
        dispatch(setERR(json));
      }
      else{
        dispatch(setRepair(json));
      }
        
    });
  };
}
// Initial State

const initialState = {};

// Reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_REPAIR:
      return applySetREPAIR(state, action);
    case SET_ERR:
      return applySetERR(state, action);
    default:
      return state;
  }
}
// Reducer Functions

function applySetREPAIR(state, action) {
  const { repair } = action;
  return {
    ...state,
    repair
  };
}
function applySetERR(state, action) {
  const { err } = action;
  return {
    ...state,
    err
  };
}
const actionCreators = {
  find,
};

export { actionCreators };

// Export reducer by default

export default reducer;