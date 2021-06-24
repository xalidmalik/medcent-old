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

const INITIAL_STATE_PATIENT_LIST = {
  patientIsLoading: false,
  patients: null,
  patientErrorMessage: null
};

const INITIAL_STATE_CREATE_PATIENT = {
  createPatientIsLoading: false,
  createPatientResponse: null,
  createPatientErrorMessage: null
};

const INITIAL_STATE_UPDATE_PATIENT = {
  updatePatientIsLoading: false,
  updatePatientResponse: null,
  updatePatientErrorMessage: null
};

const fetchPatientListReducer = (
  state = INITIAL_STATE_PATIENT_LIST,
  action
) => {
  switch (action.type) {
    case FETCHING_PATIENT_LIST:
      return { ...state, patientIsLoading: true, patientErrorMessage: null };
    case FETCH_PATIENT_LIST_SUCCESS:
      return {
        ...state,
        patientIsLoading: false,
        patients: action.data.patients
      };
    case FETCH_PATIENT_LIST_FAILED:
      return {
        ...state,
        patientIsLoading: false,
        patients: null,
        patientErrorMessage: action.data.errorMessage
      };
    default:
      return state;
  }
};

const createPatientReducer = (state = INITIAL_STATE_CREATE_PATIENT, action) => {
  switch (action.type) {
    case CREATING_PATIENT:
      return {
        ...state,
        createPatientIsLoading: true,
        createPatientErrorMessage: null
      };
    case CREATE_PATIENT_SUCCESS:
      return {
        ...state,
        createPatientIsLoading: false,
        createPatientResponse: action.data.createPatientResponse
      };
    case CREATE_PATIENT_FAILED:
      return {
        ...state,
        createPatientIsLoading: false,
        createPatientResponse: null,
        createPatientErrorMessage: action.data.errorMessage
      };
    default:
      return state;
  }
};

const updatePatientReducer = (state = INITIAL_STATE_UPDATE_PATIENT, action) => {
  switch (action.type) {
    case UPDATING_PATIENT:
      return {
        ...state,
        updatePatientIsLoading: true,
        updatePatientErrorMessage: null
      };
    case UPDATE_PATIENT_SUCCESS:
      return {
        ...state,
        updatePatientIsLoading: false,
        updatePatientResponse: action.data.updatePatientResponse
      };
    case UPDATE_PATIENT_FAILED:
      return {
        ...state,
        updatePatientIsLoading: false,
        updatePatientResponse: null,
        updatePatientErrorMessage: action.data.errorMessage
      };
    default:
      return state;
  }
};

export { fetchPatientListReducer, createPatientReducer, updatePatientReducer };
