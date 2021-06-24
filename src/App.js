import React, { useContext } from "react";
import { Route, Switch, __RouterContext } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import Leftbar from "./containers/Navbar/Leftbar";
import Dashboard from "./pages/Dashboard";
import PatientNew from "./pages/Patient/PatientNew";
import PatientList from "./pages/Patient/PatientList";
import PatientDetail from "./pages/Patient/PatientDetail";
import DoctorList from "./pages/Doctor/DoctorList";
import DoctorNew from "./pages/Doctor/DoctorNew";
import TechnicianList from "./pages/Lab/TechnicianList";
import TechnicianNew from "./pages/Lab/TechnicianNew";
import DoctorDetail from "./pages/Doctor/DoctorDetail";
import TechnicianDetail from "./pages/Lab/TechnicianDetail";
import SettingServices from "./pages/Settings/SettingServices";

function App() {
  const { location } = useContext(__RouterContext);
  // console.log("lokasyon", location.pathname.split("/")[1]);
  const transition = useTransition(location, location => location.pathname, {
    from: {
      opacity: 1,
      transform: "translate3d(-100%,0,0)"
    },
    enter: {
      opacity: 1,
      transform: "translate3d(0%,0,0)"
    },
    leave: {
      opacity: 1,
      transform: "translate3d(-100%,0,0)"
    },
    config: { mass: 1, tension: 300, friction: 40 }
  });
  // console.log("transition", transition);

  return (
    <>
      <Leftbar />
      {transition.map(({ key, item, props }) => (
        <animated.div
          key={key}
          style={props}
          className="fixed w-layout bg-gray-200 ml-20 flex h-full"
        >
          {/* {console.log("itemler", item)} */}
          <Switch location={item}>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/patient" component={PatientList} />
            <Route path="/patient/new" component={PatientNew} />
            <Route path="/patient/detail" component={PatientDetail} />
            <Route exact path="/cadre/doctor" component={DoctorList} />
            <Route path="/cadre/doctor/new" component={DoctorNew} />
            <Route path="/cadre/doctor/detail" component={DoctorDetail} />
            <Route exact path="/lab/technician" component={TechnicianList} />
            <Route path="/lab/technician/new" component={TechnicianNew} />
            <Route path="/lab/technician/detail" component={TechnicianDetail} />
            <Route exact path="/settings" render={() => <h1>Ayarlar</h1>} />
            <Route path="/settings/services" component={SettingServices} />
          </Switch>
        </animated.div>
      ))}
    </>
  );
}

export default App;
