import {
  FETCHING_SERVICE_DEPARTMENT_LIST,
  FETCH_SERVICE_DEPARTMENT_LIST_FAILED,
  FETCH_SERVICE_DEPARTMENT_LIST_SUCCESS
} from "../actionTypes/ServiceDepartment";

const INITIAL_STATE_SERVICE_DEPARTMENT_LIST = {
  serviceDepartmentListIsLoading: false,
  serviceDepartmentList: null,
  serviceDepartmentListErrorMessage: null
};

const fetchServiceDepartmentListReducer = (
  state = INITIAL_STATE_SERVICE_DEPARTMENT_LIST,
  action
) => {
  switch (action.type) {
    case FETCHING_SERVICE_DEPARTMENT_LIST:
      return {
        ...state,
        serviceDepartmentListIsLoading: true,
        serviceDepartmentListErrorMessage: null
      };
    case FETCH_SERVICE_DEPARTMENT_LIST_SUCCESS:
      return {
        ...state,
        serviceDepartmentListIsLoading: false,
        serviceDepartmentList: action.data.serviceDepartmentList
      };
    case FETCH_SERVICE_DEPARTMENT_LIST_FAILED:
      return {
        ...state,
        serviceDepartmentListIsLoading: false,
        serviceDepartmentList: null,
        serviceDepartmentListErrorMessage: action.data.errorMessage
      };
    default:
      return state;
  }
};

export { fetchServiceDepartmentListReducer };
