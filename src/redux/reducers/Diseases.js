import {
  CREATE_DISEASES_TOPATIENT_FAILED,
  CREATE_DISEASES_TOPATIENT_SUCCESS,
  CREATING_DISEASES_TOPATIENT,
  FETCHING_DISEASES_LIST,
  FETCH_DISEASES_LIST_FAILED,
  FETCH_DISEASES_LIST_SUCCESS
} from "../actionTypes/Diseases";

const INITIAL_STATE_DISEASES_LIST = {
  diseasesListIsLoading: false,
  diseasesList: null,
  diseasesListErrorMessage: null
};

const INITIAL_STATE_CREATE_DISEASES_TOPATIENT = {
  createDiseasesToPatientIsLoading: false,
  createDiseasesToPatientResponse: null,
  createDiseasesToPatientErrorMessage: null
};

const fetchDiseasesListReducer = (
  state = INITIAL_STATE_DISEASES_LIST,
  action
) => {
  switch (action.type) {
    case FETCHING_DISEASES_LIST:
      return {
        ...state,
        diseasesListIsLoading: true,
        diseasesListErrorMessage: null
      };
    case FETCH_DISEASES_LIST_SUCCESS:
      return {
        ...state,
        diseasesListIsLoading: false,
        diseasesList: action.data.diseasesList
      };
    case FETCH_DISEASES_LIST_FAILED:
      return {
        ...state,
        diseasesListIsLoading: false,
        diseasesList: null,
        diseasesListErrorMessage: action.data.errorMessage
      };
    default:
      return state;
  }
};

const createDiseasesPatientReducer = (
  state = INITIAL_STATE_CREATE_DISEASES_TOPATIENT,
  action
) => {
  switch (action.type) {
    case CREATING_DISEASES_TOPATIENT:
      return {
        ...state,
        createDiseasesToPatientIsLoading: true,
        createDiseasesToPatientErrorMessage: null
      };
    case CREATE_DISEASES_TOPATIENT_SUCCESS:
      return {
        ...state,
        createDiseasesToPatientIsLoading: false,
        createDiseasesToPatientResponse:
          action.data.createDiseasesToPatientResponse
      };
    case CREATE_DISEASES_TOPATIENT_FAILED:
      return {
        ...state,
        createDiseasesToPatientIsLoading: false,
        createDiseasesToPatientResponse: null,
        createDiseasesToPatientErrorMessage: action.data.errorMessage
      };
    default:
      return state;
  }
};

export { createDiseasesPatientReducer, fetchDiseasesListReducer };
