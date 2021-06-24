import React, { Component } from "react";
import { LeftLayout, RightLayout } from "../../components/Layout/Layouts";
import DoctorTable from "../../containers/Table/DoctorTable";
import { DoctorDataList } from "../../helpers/Static/Fake";
import { connect } from "react-redux";
import { getUserList } from "../../redux/actions/User";
import { Doctor } from "../../helpers/UserLevel";
import { HeaderDoctorList } from "../../containers/Header/Header";
import { doctorListHeader } from "../../helpers/Static/PageLists";
import { CardWrapper } from "../../components/Card/CardWrapper";

class DoctorList extends Component {
  componentDidMount() {
    this.props.getUserList(Doctor, "true");
    localStorage.removeItem("SelectedDoctor");
  }

  render() {
    return (
      <>
        <LeftLayout>Kadro Menu</LeftLayout>
        <RightLayout>
          <HeaderDoctorList />
          <CardWrapper classes="w-card-table bg-white rounded-lg flex shadow-base mb-4 overflow-hidden">
            <DoctorTable
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
)(DoctorList);
