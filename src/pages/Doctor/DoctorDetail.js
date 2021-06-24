import React, { Component } from "react";
import DoctorOverview from "../../containers/Details/DoctorOverview";
import { Route, Switch, __RouterContext } from "react-router-dom";
import { LeftLayout, RightLayout } from "../../components/Layout/Layouts";
import SubLink from "../../components/NavElements/SubLink";
import { doctorDetail } from "../../helpers/Static/Links";
import DoctorForm from "../../containers/Forms/DoctorForm";
import moment from "moment";
import {
  HeaderDoctorDetail,
  HeaderDoctorEdit
} from "../../containers/Header/Header";

export class DoctorDetail extends Component {
  state = {
    doctor: []
  };
  componentWillMount() {
    const activeDoctor = JSON.parse(localStorage.getItem("SelectedDoctor"));
    console.log("hasta:", activeDoctor);

    if (activeDoctor) {
      activeDoctor.Gender = activeDoctor.Gender.toString();
      activeDoctor.BirthDate = moment(moment.BirthDate).format("YYYY-MM-DD");
      this.setState({ doctor: activeDoctor });
    }
  }
  render() {
    const { doctor } = this.state;

    return (
      <>
        <LeftLayout>
          <SubLink base={doctorDetail.overview} />
          <SubLink base={doctorDetail.edit} />
        </LeftLayout>

        <RightLayout>
          <Switch>
            <Route
              exact
              path="/cadre/doctor/detail"
              render={() => (
                <>
                  <HeaderDoctorDetail doctor={doctor} />
                  <DoctorOverview data={doctor} />
                </>
              )}
            />
            <Route
              exact
              path="/cadre/doctor/detail/edit"
              render={() => (
                <>
                  <HeaderDoctorEdit doctor={doctor} />
                  <DoctorForm activeDoctor={doctor} />
                </>
              )}
            />
          </Switch>
        </RightLayout>
      </>
    );
  }
}

export default DoctorDetail;
