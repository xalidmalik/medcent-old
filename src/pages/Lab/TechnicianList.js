import React, { Component } from "react";
import { LeftLayout, RightLayout } from "../../components/Layout/Layouts";
import { DoctorDataList } from "../../helpers/Static/Fake";
import { connect } from "react-redux";
import { getUserList } from "../../redux/actions/User";
import { Technician } from "../../helpers/UserLevel";
import TechnicianTable from "../../containers/Table/TechnicianTable";
import { HeaderTechnicianList } from "../../containers/Header/Header";
import { CardWrapper } from "../../components/Card/CardWrapper";
import { doctorListHeader } from "../../helpers/Static/PageLists";

class TechnicianList extends Component {
  componentDidMount() {
    this.props.getUserList(Technician, "true");
    localStorage.removeItem("SelectedTechnician");
  }
  render() {
    return (
      <>
        <LeftLayout>Lab Menu</LeftLayout>
        <RightLayout>
          <HeaderTechnicianList />
          <CardWrapper classes="w-card-table bg-white rounded-lg flex shadow-base mb-4 overflow-hidden">
            <TechnicianTable
              header={doctorListHeader}
              data={this.props.users || DoctorDataList}
            />
          </CardWrapper>
        </RightLayout>
      </>
    );
  }
}

const mapStateToProps = state => {
  const { userIsLoading, users, userErrorMessage } = state.userList;
  return { userIsLoading, users, userErrorMessage };
};

export default connect(
  mapStateToProps,
  { getUserList }
)(TechnicianList);
