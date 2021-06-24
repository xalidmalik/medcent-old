import React, { Component } from "react";
import { LeftLayout, RightLayout } from "../../components/Layout/Layouts";
import DoctorForm from "../../containers/Forms/DoctorForm";
import { HeaderDoctorNew } from "../../containers/Header/Header";

class DoctorNew extends Component {
  render() {
    return (
      <>
        <LeftLayout>Kadro Menu</LeftLayout>
        <RightLayout>
          <HeaderDoctorNew />
          <DoctorForm />
        </RightLayout>
      </>
    );
  }
}

export default DoctorNew;
