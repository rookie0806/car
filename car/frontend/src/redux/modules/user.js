// imports

// actions

const SAVE_TOKEN = "SAVE_TOKEN";
const LOGOUT = "LOGOUT";
const SAVE_NICKNAME = "SAVE_NICKNAME";
const ERR = "ERR";
// action creators

function saveToken(token) {
  return {
    type: SAVE_TOKEN,
    token
  };
}

function saveNickName(nickname) {
    return {
      type: SAVE_NICKNAME,
      nickname
    };
  }
function sendERR(err) {
    console.log("dd")
    return {
      type: ERR,
      err
    };
  }
function logout() {
  return {
    type: LOGOUT
  };
}


function usernameLogin(username, password) {
  return dispatch => {
    fetch("/rest-auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    .then(response => {
        if (response.status === 400) {
            dispatch(sendERR("아이디 혹은 비밀번호를 확인해주세요"));
        }
        return response.json();
      })
      .then(json => {
        if (json.token) {
          dispatch(saveToken(json.token));
          dispatch(saveNickName(json.user.pk+"분"))
        }
      })
  };
}

function createAccount(username, password) {
  return dispatch => {
    fetch("/rest-auth/registration/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password1: password,
        password2: password,
        nickname : "1분",
      })
    })
    .then(response => {
        if (response.status === 400) {
            dispatch(sendERR("아이디"));
        }
        return response.json();
      })
      .then(json => {
          console.log(json)
        if (json.token) {
          dispatch(saveToken(json.token));
          dispatch(saveNickName(json.user.pk+"분"))
        }
        if (json.password1) {
            dispatch(sendERR("비밀번호는 8글자 이상, 문자와 숫자를 포함해야합니다."));
          }
          if(json.username){
            dispatch(sendERR("이미 존재하는 아이디입니다."));
          }
      })
      .catch((response) => {
        console.log(response.status, response.statusText);
        // 3. get error messages, if any
        
      });
  };
}




// initial state

const initialState = {
  isLoggedIn: localStorage.getItem("jwt") ? true : false,
  token: localStorage.getItem("jwt"),
  nickname: localStorage.getItem("nickname")
};

// reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_TOKEN:
      return applySetToken(state, action);
    case LOGOUT:
      return applyLogout(state, action);
    case ERR:
        return applysendERR(state, action);
    case SAVE_NICKNAME:
        return applySetNickName(state, action);
    default:
      return state;
  }
}

// reducer functions

function applySetToken(state, action) {
  const { token } = action;
  localStorage.setItem("jwt", token);
  return {
    ...state,
    isLoggedIn: true,
    token: token
  };
}
function applySetNickName(state, action) {
    const { nickname } = action;
    localStorage.setItem("nickname", nickname);
    return {
      ...state,
      isLoggedIn: true,
      nickname: nickname
    };
  }
  
function applyLogout(state, action) {
  localStorage.removeItem("jwt");
  return {
    isLoggedIn: false
  };
}
function applysendERR(state, action) {
    const { err } = action;
    return {
        ...state,
        err : err,
    };
  }
  


// exports

const actionCreators = {
  usernameLogin,
  createAccount,
  logout,
  
};

export { actionCreators };

// export reducer by default

export default reducer;
