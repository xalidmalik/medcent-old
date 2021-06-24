import React, { Component } from "react";
import { Route, Switch, __RouterContext } from "react-router-dom";
import { LeftLayout, RightLayout } from "../../components/Layout/Layouts";
import CardWrapper from "../../components/Card/CardWrapper";
import { History } from "../../helpers/History";
import SubLink from "../../components/NavElements/SubLink";
import { technicianDetail } from "../../helpers/Static/Links";
import TechnicianForm from "../../containers/Forms/TechnicianForm";
import TechnicianOverview from "../../containers/Details/TechnicianOverview";
import moment from "moment";
import {
  HeaderTechnicianDetails,
  HeaderTechnicianEdit
} from "../../containers/Header/Header";

export class TechnicianDetail extends Component {
  state = {
    technician: []
  };
  componentWillMount() {
    const activeTechnician = JSON.parse(
      localStorage.getItem("SelectedTechnician")
    );

    if (activeTechnician) {
      activeTechnician.Gender = activeTechnician.Gender.toString();
      activeTechnician.BirthDate = moment(moment.BirthDate).format(
        "YYYY-MM-DD"
      );
      this.setState({ technician: activeTechnician });
    }
  }
  render() {
    const { technician } = this.state;

    return (
      <>
        <LeftLayout>
          <SubLink base={technicianDetail.overview} />
          <SubLink base={technicianDetail.edit} />
        </LeftLayout>

        <RightLayout>
          <Switch>
            <Route
              exact
              path="/lab/technician/detail"
              render={() => (
                <>
                  <HeaderTechnicianDetails technician={technician} />
                  <TechnicianOverview data={technician} />
                </>
              )}
            />
            <Route
              exact
              path="/lab/technician/detail/edit"
              render={() => (
                <>
                  <HeaderTechnicianEdit technician={technician} />
                  <TechnicianForm activeTechnician={technician} />
                </>
              )}
            />
          </Switch>
        </RightLayout>
      </>
    );
  }
}

export default TechnicianDetail;
