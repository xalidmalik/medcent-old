import React, { Component } from "react";
import { LeftLayout, RightLayout } from "../../components/Layout/Layouts";
import PatientForm from "../../containers/Forms/PatientForm";
import { HeaderPatientNew } from "../../containers/Header/Header";
import SubLink from "../../components/NavElements/SubLink";
import { patientList } from "../../helpers/Static/Links";

class NewPatient extends Component {
  render() {
    return (
      <>
        <LeftLayout>
          <SubLink base={patientList.list} />
        </LeftLayout>
        <RightLayout>
          <HeaderPatientNew />
          <PatientForm />
        </RightLayout>
      </>
    );
  }
}

export default NewPatient;
