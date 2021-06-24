import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { LeftLayout, RightLayout } from "../../components/Layout/Layouts";
import PatientOverview from "../../containers/Details/PatientOverview";
import SubLink from "../../components/NavElements/SubLink";
import { patientDetail } from "../../helpers/Static/Links";
import PatientForm from "../../containers/Forms/PatientForm";
import { getPatient } from "../../helpers/Static/LocalStoroge";
import {
  HeaderPatientDetails,
  HeaderPatientEdit
} from "../../containers/Header/Header";
import moment from "moment";

class PatientDetail extends Component {
  state = {
    patients: []
  };

  componentWillMount() {
    const activePatient = JSON.parse(localStorage.getItem("SelectedPatient"));
    if (activePatient) {
      activePatient.Gender = activePatient.Gender.toString();
      activePatient.BirthDate = moment(activePatient.BirthDate).format(
        "YYYY-MM-DD"
      );
      this.setState({ patients: activePatient });
    }
  }

  render() {
    const { patients } = this.state;
    return (
      <>
        <LeftLayout>
          <SubLink base={patientDetail.overview} />
          <SubLink base={patientDetail.edit} />
        </LeftLayout>

        <RightLayout>
          <Switch>
            <Route
              exact
              path={patientDetail.overview.link}
              render={() => (
                <>
                  <HeaderPatientDetails patients={patients} />
                  <PatientOverview data={patients} />
                </>
              )}
            />
            <Route
              exact
              path={patientDetail.edit.link}
              render={() => (
                <>
                  <HeaderPatientEdit patients={patients} />
                  <PatientForm activePatient={patients} />
                </>
              )}
            />
          </Switch>
        </RightLayout>

        {/* <h1>detaylar</h1> */}
      </>
    );
  }
}

export default PatientDetail;
