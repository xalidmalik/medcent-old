import React from "react";
import { CardWrapper } from "./CardWrapper";

const Card = props => {
  return (
    <CardWrapper>
      <div className="w-2/5 rounded-l-lg p-8 text-left">
        <h2 className="text-2xl font-bold">{props.base.title}</h2>
        <p className="text-base">{props.base.desc}</p>
      </div>
      <div className="w-3/5 bg-gray-100 rounded-r-lg p-8 text-left">
        {props.children}
      </div>
    </CardWrapper>
  );
};

export default Card;
