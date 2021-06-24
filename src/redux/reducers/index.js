import { fetchTokenReducer } from "./Token";
import { combineReducers } from "redux";
import {
  fetchPatientListReducer,
  createPatientReducer,
  updatePatientReducer
} from "./Patient";
import {
  fetchDiseasesListReducer,
  createDiseasesPatientReducer
} from "./Diseases";
import {
  fetchUserListReducer,
  createUserReducer,
  updateUserReducer
} from "./User";
import { fetchServiceDepartmentListReducer } from "./ServiceDepartment";

export default combineReducers({
  fetchToken: fetchTokenReducer,
  patientList: fetchPatientListReducer,
  addPatient: createPatientReducer,
  putPatient: updatePatientReducer,
  fetchDiseases: fetchDiseasesListReducer,
  addDiseasesToPatient: createDiseasesPatientReducer,
  userList: fetchUserListReducer,
  addUser: createUserReducer,
  putUser: updateUserReducer,
  fetchServiceDepartmentList: fetchServiceDepartmentListReducer
});
