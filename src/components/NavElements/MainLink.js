import React from "react";
import { NavLink } from "react-router-dom";

const MainLink = props => {
  return (
    <NavLink
      exact
      to={props.base.link}
      className="h-20 block bg-gray-900 text-white py-3 border-b border-gray-800 hover:bg-gray-800"
      activeClassName="bg-med-500 text-white "
    >
      <span className="w-8 block mx-auto">{props.base.icon}</span>
      <span className="flex leading-none mt-1 justify-center text-base">
        {props.base.title}
      </span>
    </NavLink>
  );
};

export default MainLink;
