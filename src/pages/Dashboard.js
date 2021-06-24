import React, { useState } from "react";
import { LeftLayout, RightLayout } from "../components/Layout/Layouts";
import { useTransition, animated } from "react-spring";

const Dashboard = () => {
  const [show, set] = useState(false);
  const transitions = useTransition(show, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  return (
    <>
      <LeftLayout>
        <h1>Kontrol Paneli</h1>
      </LeftLayout>
      <RightLayout>
        <h1>Medcent Dashboard</h1>
      </RightLayout>
    </>
  );
};

export default Dashboard;
