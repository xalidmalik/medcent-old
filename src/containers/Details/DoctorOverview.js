import React, { Component } from "react";
import Card from "../../components/Card/Card";
import { patient, StringGenderType } from "../../helpers/Static/System";
import { patientForm } from "../../helpers/Static/FormFields";
import FieldOutput from "../../components/FormElements/Outputs/FieldOutput";
import CheckboxOutput from "../../components/FormElements/Outputs/CheckboxOutput";

export class DoctorOverview extends Component {
  render() {
    const { data } = this.props;
    return (
      <>
        <Card base={patient.identity}>
          <FieldOutput base={patientForm.Name} data={data.Name} />
          <FieldOutput base={patientForm.Surname} data={data.Surname} />
          <FieldOutput base={patientForm.Tc} data={data.Tc} />
          <FieldOutput
            base={patientForm.Gender}
            data={StringGenderType(data.Gender)}
          />
          <FieldOutput base={patientForm.BirthDate} data={data.BirthDate} />
        </Card>
        <Card base={patient.contact}>
          <FieldOutput base={patientForm.MobilePhone} data={data.MobilePhone} />
          <FieldOutput base={patientForm.Email} data={data.EMail} />

          <CheckboxOutput
            base={patientForm.CanSendSms}
            data={data.CanSendSms}
          />
        </Card>
      </>
    );
  }
}

export default DoctorOverview;
