import React from "react";
import MainLink from "../../components/NavElements/MainLink";
import { mainLink } from "../../helpers/Static/Links";

const Leftbar = props => {
  return (
    <header className="w-20 h-full bg-gray-900 text-red-100 fixed top-0 left-0 z-40 shadow-header ">
      <nav className="flex-col flex justify-between h-full">
        <div className="w-20 h-20 flex bg-gray-900">
          <h1 className="flex leading-none m-auto">Account</h1>
        </div>
        <div>
          <MainLink base={mainLink.dashboard} />
          <MainLink base={mainLink.patient} />
          {/* <MainLink base={mainLink.cadre} />
          <MainLink base={mainLink.lab} /> */}
          {/* <MainLink base={mainLink.settings} /> */}
        </div>
        <div>
          {/* <MainLink base={mainLink.settings} /> */}
          <div
            onClick={() => {
              localStorage.removeItem("userData");
              window.location.reload();
            }}
            className="w-20 h-20 flex bg-gray-900 hover:bg-red-500 cursor-pointer"
          >
            <h1 className="flex leading-none m-auto">Çıkış</h1>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Leftbar;
