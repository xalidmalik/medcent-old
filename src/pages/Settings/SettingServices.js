import React, { Component } from "react";
import { LeftLayout, RightLayout } from "../../components/Layout/Layouts";
import { HeaderServicesList } from "../../containers/Header/Header";
import ServicesSelected from "../../containers/ServicesSelected/ServicesSelected";

export class SettingServices extends Component {
  render() {
    return (
      <>
        <LeftLayout>
          <h1>Hizmetler ve Kampanya</h1>
        </LeftLayout>
        <RightLayout>
          <HeaderServicesList />
          <ServicesSelected />
        </RightLayout>
      </>
    );
  }
}

export default SettingServices;
