import {
  LOGIN_START,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  AUTHENTICATE_USER,
  LOG_OUT,
  CLEAR_AUTH_STATE,
  RAGISTER_SUCCESS,
  RAGISTER_START,
  RAGISTER_FAILED,
} from "./actionTypes";
import { APIUrls } from "../helpers/urls";
import { getFormBody } from "../helpers/utils";

export function startLogin() {
  return {
    type: LOGIN_START,
  };
}
export function loginFailed(errorMessage) {
  return {
    type: LOGIN_FAILED,
    error: errorMessage,
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}
export function login(userId, password) {
  return (dispatch) => {
    dispatch(startLogin());
    const url = APIUrls.login();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({ userId, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        if (data.success) {
          // dispatch action to save user
          localStorage.setItem("token", data.data.token);
          console.log(data.data.token);
          dispatch(loginSuccess(data.data.user));
          return;
        }
        dispatch(loginFailed(data.message));
      });
  };
}
export function authenticateUser(user) {
  return {
    type: AUTHENTICATE_USER,
    user,
  };
}

export function logoutUser() {
  return {
    type: LOG_OUT,
  };
}

export function clearAuthState() {
  return {
    type: CLEAR_AUTH_STATE,
  };
}

// ragister User
export function startRagisterUser() {
  return {
    type: RAGISTER_START,
  };
}
export function RagisterUserFailed(errorMessage) {
  console.log(errorMessage);
  return {
    type: RAGISTER_FAILED,
    error: errorMessage,
  };
}

export function RagisterUserSuccess(Message) {
  return {
    type: RAGISTER_SUCCESS,
    error: Message,
  };
}

export function RagisterUser(name, userId, password, confirm_password) {
  console.log(name, userId, password, confirm_password);
  console.log(getFormBody({ name, userId, password, confirm_password }));
  return (dispatch) => {
    dispatch(startRagisterUser());
    const url = APIUrls.signup();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({ name, userId, password, confirm_password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // dispatch action to save user
          dispatch(RagisterUserSuccess(data.message));
          return;
        }
        dispatch(RagisterUserFailed(data.message));
      });
  };
}
