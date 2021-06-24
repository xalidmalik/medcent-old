import {
  FETCHING_TOKEN,
  FETCH_TOKEN_FAILED,
  FETCH_TOKEN_SUCCESS
} from "../actionTypes/Token";

const INITIAL_STATE_TOKEN = {
  tokenIsLoading: false,
  token: null,
  tokenErrorMessage: null
};

const fetchTokenReducer = (state = INITIAL_STATE_TOKEN, action) => {
  switch (action.type) {
    case FETCHING_TOKEN:
      return { ...state, tokenIsLoading: true, tokenErrorMessage: null };
    case FETCH_TOKEN_SUCCESS:
      return { ...state, tokenIsLoading: false, token: action.data };
    case FETCH_TOKEN_FAILED:
      return {
        ...state,
        tokenIsLoading: false,
        token: null,
        tokenErrorMessage: action.data.errorMessage
      };
    default:
      return state;
  }
};

export { fetchTokenReducer };
