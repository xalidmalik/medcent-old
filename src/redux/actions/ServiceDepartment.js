import {
  FETCHING_SERVICE_DEPARTMENT_LIST,
  FETCH_SERVICE_DEPARTMENT_LIST_FAILED,
  FETCH_SERVICE_DEPARTMENT_LIST_SUCCESS
} from "../actionTypes/ServiceDepartment";

import {
  ServiceDepartment,
  Get,
  AxiosClient
} from "@routeax/medcentapiproxy/index";

const userData = JSON.parse(localStorage.getItem("userData"));

if (userData) {
  AxiosClient.defaults.headers.common["token"] = userData.token.Token;
}

const getServiceDepartmentList = () => dispatch => {
  dispatch({ type: FETCHING_SERVICE_DEPARTMENT_LIST });

  Get(
    ServiceDepartment.GetServiceList(userData.token.DepartmentCode),
    success => {
      dispatch({
        type: FETCH_SERVICE_DEPARTMENT_LIST_SUCCESS,
        data: { serviceDepartmentList: success }
      });
    },
    error => {
      dispatch({
        type: FETCH_SERVICE_DEPARTMENT_LIST_FAILED,
        data: { errorMessage: error }
      });
    }
  );
};

export { getServiceDepartmentList };
