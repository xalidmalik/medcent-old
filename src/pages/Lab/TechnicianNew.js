import React, { Component } from "react";
import { LeftLayout, RightLayout } from "../../components/Layout/Layouts";
import TechnicianForm from "../../containers/Forms/TechnicianForm";
import { HeaderTechnicianNew } from "../../containers/Header/Header";

export class TechnicianNew extends Component {
  render() {
    return (
      <>
        <LeftLayout>Lab Menu</LeftLayout>
        <RightLayout>
          <HeaderTechnicianNew />
          <TechnicianForm />
        </RightLayout>
      </>
    );
  }
}

export default TechnicianNew;
