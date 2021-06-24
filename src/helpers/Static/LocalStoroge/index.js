import moment from "moment";

// componentWillMount() {
//   const activePatient = JSON.parse(localStorage.getItem("SelectedPatient"));
//   if (activePatient) {
//     activePatient.Gender = activePatient.Gender.toString();
//     activePatient.BirthDate = moment(moment.BirthDate).format("YYYY-MM-DD");
//     this.setState({ patients: activePatient });
//   }
// }

const activePatient = JSON.parse(localStorage.getItem("SelectedPatient"));
if (activePatient) {
  activePatient.Gender = activePatient.Gender.toString();
  activePatient.BirthDate = moment(moment.BirthDate).format("YYYY-MM-DD");
}

export function getPatient() {
  return activePatient;
}
