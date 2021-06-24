import React, { Component } from "react";
import { LeftLayout, RightLayout } from "../../components/Layout/Layouts";
import { CardWrapper } from "../../components/Card/CardWrapper";
import { patientListHeader } from "../../helpers/Static/PageLists";
import { patientDataList } from "../../helpers/Static/Fake";
import PatientTable from "../../containers/Table/PatientTable";
import { connect } from "react-redux";
import { getList } from "../../redux/actions/Patient";
import { diseasesGetList } from "../../redux/actions/Diseases";
import { HeaderPatientList } from "../../containers/Header/Header";
import SubLink from "../../components/NavElements/SubLink";
import { patientList } from "../../helpers/Static/Links";

class PatientList extends Component {
  componentDidMount() {
    this.props.getList();
    localStorage.removeItem("SelectedPatient");
  }

  render() {
    return (
      <>
        <LeftLayout>
          <SubLink base={patientList.list} />
        </LeftLayout>
        <RightLayout>
          <HeaderPatientList />
          <CardWrapper classes="w-card-table bg-white rounded-lg flex shadow-base mb-4 overflow-hidden">
            <PatientTable
              header={patientListHeader}
              data={this.props.patients || patientDataList}
            />
          </CardWrapper>
        </RightLayout>
      </>
    );
  }
}

const mapStateToProps = state => {
  const { patientIsLoading, patients, patientErrorMessage } = state.patientList;
  return { patientIsLoading, patients, patientErrorMessage };
};

export default connect(
  mapStateToProps,
  { getList, diseasesGetList }
)(PatientList);
