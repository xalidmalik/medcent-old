import {
  CREATE_DISEASES_TOPATIENT_FAILED,
  CREATE_DISEASES_TOPATIENT_SUCCESS,
  CREATING_DISEASES_TOPATIENT,
  FETCHING_DISEASES_LIST,
  FETCH_DISEASES_LIST_FAILED,
  FETCH_DISEASES_LIST_SUCCESS
} from "../actionTypes/Diseases";

import {
  AxiosClient,
  Post,
  Get,
  Diseases
} from "@routeax/medcentapiproxy/index";

const userData = JSON.parse(localStorage.getItem("userData"));

if (userData) {
  AxiosClient.defaults.headers.common["token"] = userData.token.Token;
}

const diseasesGetList = () => dispatch => {
  dispatch({ type: FETCHING_DISEASES_LIST });
  Get(
    Diseases.GetList(userData.token.DepartmentCode),
    success => {
      dispatch({
        type: FETCH_DISEASES_LIST_SUCCESS,
        data: { diseasesList: success }
      });
    },
    error => {
      dispatch({
        type: FETCH_DISEASES_LIST_FAILED,
        data: { errorMessage: error }
      });
    }
  );
};

const addDiseasesToPatient = diseasesModel => dispatch => {
  dispatch({ type: CREATING_DISEASES_TOPATIENT });
  Post(
    Diseases.CreateToPatient(userData.token.DepartmentCode),
    diseasesModel,
    success => {
      dispatch({
        type: CREATE_DISEASES_TOPATIENT_SUCCESS,
        data: { createDiseasesToPatientResponse: success }
      });
    },
    error => {
      dispatch({
        type: CREATE_DISEASES_TOPATIENT_FAILED,
        data: { errorMessage: error }
      });
    }
  );
};

export { diseasesGetList, addDiseasesToPatient };
