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

const INITIAL_STATE_USER_LIST = {
  userIsLoading: false,
  users: null,
  userErrorMessage: null
};

const INITIAL_STATE_CREATE_USER = {
  createUserIsLoading: false,
  createUserResponse: null,
  createUserErrorMessage: null
};

const INITIAL_STATE_UPDATE_USER = {
  updateUserIsLoading: false,
  updateUserResponse: null,
  updateUserErrorMessage: null
};

const fetchUserListReducer = (state = INITIAL_STATE_USER_LIST, action) => {
  switch (action.type) {
    case FETCHING_USERS_LIST:
      return { ...state, userIsLoading: true, userErrorMessage: null };
    case FETCH_USERS_LIST_SUCCESS:
      return {
        ...state,
        userIsLoading: false,
        users: action.data.users
      };
    case FETCH_USERS_LIST_FAILED:
      return {
        ...state,
        userIsLoading: false,
        users: null,
        userErrorMessage: action.data.errorMessage
      };
    default:
      return state;
  }
};

const createUserReducer = (state = INITIAL_STATE_CREATE_USER, action) => {
  switch (action.type) {
    case CREATING_USERS:
      return {
        ...state,
        createUserIsLoading: true,
        createUserErrorMessage: null
      };
    case CREATE_USERS_SUCCESS:
      return {
        ...state,
        createUserIsLoading: false,
        createUserResponse: action.data.createUserResponse
      };
    case CREATE_USERS_FAILED:
      return {
        ...state,
        createUserIsLoading: false,
        createPatientResponse: null,
        createUserErrorMessage: action.data.errorMessage
      };
    default:
      return state;
  }
};

const updateUserReducer = (state = INITIAL_STATE_UPDATE_USER, action) => {
  switch (action.type) {
    case UPDATING_USERS:
      return {
        ...state,
        updateUserIsLoading: true,
        updateUserErrorMessage: null
      };
    case UPDATE_USERS_SUCCESS:
      return {
        ...state,
        updateUserIsLoading: false,
        updateUserResponse: action.data.updateUserResponse
      };
    case UPDATE_USERS_FAILED:
      return {
        ...state,
        updateUserIsLoading: false,
        updatePatientResponse: null,
        updateUserErrorMessage: action.data.errorMessage
      };
    default:
      return state;
  }
};

export { fetchUserListReducer, createUserReducer, updateUserReducer };
