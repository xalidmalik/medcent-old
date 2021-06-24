import {
  FETCHING_TOKEN,
  FETCH_TOKEN_FAILED,
  FETCH_TOKEN_SUCCESS
} from "../actionTypes/Token";

import { GetToken } from "@routeax/medcentapiproxy/index";

const fetchToken = (userName, password) => dispatch => {
  dispatch({ type: FETCHING_TOKEN });

  GetToken(
    userName,
    password,
    success => {
      dispatch({ type: FETCH_TOKEN_SUCCESS, data: { token: success } });
    },
    error => {
      dispatch({
        type: FETCH_TOKEN_FAILED,
        data: { errorMessage: error }
      });
    }
  );
};

export { fetchToken };
