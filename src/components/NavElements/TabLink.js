import React from "react";
import { NavLink } from "react-router-dom";

const TabLink = props =>
  props.base.map((i, index) => {
    return (
      <button
        className={`h-16 flex w-full ${
          props.active == i.id
            ? "bg-med-500 text-white"
            : "bg-gray-100 text-gray-900"
        }  py-4 border-b border-gray-200 focus:outline-none`}
        onClick={() => props.onClick(i.id)}
      >
        <span className="w-8 block mx-4 my-auto">{i.icon}</span>
        <span className="flex leading-none items-center justify-center text-base">
          {i.title}
        </span>
      </button>
    );
  });

export default TabLink;
