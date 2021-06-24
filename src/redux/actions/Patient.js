import {
  CREATING_PATIENT,
  CREATE_PATIENT_FAILED,
  CREATE_PATIENT_SUCCESS,
  DELETE_PATIENT_FAILED,
  DELETE_PATIENT_SUCCESS,
  DELETING_PATIENT,
  FETCHING_PATIENT_LIST,
  FETCH_PATIENT_LIST_FAILED,
  FETCH_PATIENT_LIST_SUCCESS,
  UPDATE_PATIENT_FAILED,
  UPDATE_PATIENT_SUCCESS,
  UPDATING_PATIENT
} from "../actionTypes/Patient";

import {
  Patient,
  Get,
  AxiosClient,
  Post,
  Put
} from "@routeax/medcentapiproxy/index";
const userData = JSON.parse(localStorage.getItem("userData"));

if (userData) {
  AxiosClient.defaults.headers.common["token"] = userData.token.Token;
}

const getList = (isActive = null) => dispatch => {
  dispatch({ type: FETCHING_PATIENT_LIST });
  Get(
    Patient.GetList((isActive = true), userData.token.DepartmentCode),
    success => {
      dispatch({
        type: FETCH_PATIENT_LIST_SUCCESS,
        data: { patients: success }
      });
    },
    error => {
      dispatch({
        type: FETCH_PATIENT_LIST_FAILED,
        data: { errorMessage: error }
      });
    }
  );
};

const addPatient = patientModel => dispatch => {
  dispatch({ type: CREATING_PATIENT });
  Post(
    Patient.Create(userData.token.DepartmentCode),
    patientModel,
    success => {
      dispatch({
        type: CREATE_PATIENT_SUCCESS,
        data: { createPatientResponse: success }
      });
    },
    error => {
      dispatch({
        type: CREATE_PATIENT_FAILED,
        data: { errorMessage: error }
      });
    }
  );
};

const updatePatient = patientModel => dispatch => {
  dispatch({ type: UPDATING_PATIENT });
  Put(
    Patient.Update(userData.token.DepartmentCode),
    patientModel,
    success => {
      dispatch({
        type: UPDATE_PATIENT_SUCCESS,
        data: { updatePatientResponse: success }
      });
    },
    error => {
      dispatch({
        type: UPDATE_PATIENT_FAILED,
        data: { errorMessage: error }
      });
    }
  );
};

export { getList, addPatient, updatePatient };
