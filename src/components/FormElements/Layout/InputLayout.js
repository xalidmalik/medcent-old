import React from "react";
import {
  errorsChange,
  bgColorChange,
  textColorChange
} from "../../../helpers/Static/FormValidation";

const InputLayout = props => {
  return (
    <div className="flex mb-4">
      <div className="w-2/6 max-h-full">
        <h5 className="font-bold leading-none text-lg">{`${props.title} :`}</h5>
        {props.required ? (
          <small
            className={`text-xs mt-1 flex leading-tight ${textColorChange(
              props.touched,
              props.errors,
              props.values
            )} relative items-center`}
          >
            <span
              className={`rounded-full ${bgColorChange(
                props.touched,
                props.errors,
                props.values
              )}  w-3 h-3 m-auto shadow absolute`}
            />
            <span className="text-xs pl-5">
              {errorsChange(props.touched, props.errors, props.values)}
            </span>
          </small>
        ) : (
          ""
        )}
      </div>
      <div className="w-4/6 flex">{props.children}</div>
    </div>
  );
};

export default InputLayout;
