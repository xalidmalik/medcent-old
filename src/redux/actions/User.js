import {
  CREATE_USERS_FAILED,
  CREATE_USERS_SUCCESS,
  CREATING_USERS,
  FETCHING_USERS_LIST,
  FETCH_USERS_LIST_FAILED,
  FETCH_USERS_LIST_SUCCESS,
  UPDATE_USERS_FAILED,
  UPDATE_USERS_SUCCESS,
  UPDATING_USERS
} from "../actionTypes/User";

import { User, Get, Post, AxiosClient, Put } from "@routeax/medcentapiproxy";

const userData = JSON.parse(localStorage.getItem("userData"));
if (userData) {
  AxiosClient.defaults.headers.common["token"] = userData.token.Token;
}

const getUserList = (userLevel, isActive) => dispatch => {
  dispatch({ type: FETCHING_USERS_LIST });
  Get(
    User.GetList(userLevel, isActive, userData.token.DepartmentCode),
    success => {
      dispatch({
        type: FETCH_USERS_LIST_SUCCESS,
        data: { users: success }
      });
    },
    error => {
      dispatch({
        type: FETCH_USERS_LIST_FAILED,
        data: { errorMessage: error }
      });
    }
  );
};

const addUser = userModel => dispatch => {
  dispatch({ type: CREATING_USERS });
  Post(
    User.Create(userData.token.DepartmentCode),
    userModel,
    success => {
      dispatch({
        type: CREATE_USERS_SUCCESS,
        data: { createUserResponse: success }
      });
    },
    error => {
      dispatch({
        type: CREATE_USERS_FAILED,
        data: { errorMessage: error }
      });
    }
  );
};

const putUser = userModel => dispatch => {
  dispatch({ type: UPDATING_USERS });

  Put(
    User.Update(userData.token.Token),
    userModel,
    success => {
      dispatch({
        type: UPDATE_USERS_SUCCESS,
        data: { updateUserResponse: success }
      });
    },
    error => {
      dispatch({
        type: UPDATE_USERS_FAILED,
        data: { errorMessage: error }
      });
    }
  );
};

export { getUserList, addUser, putUser };
