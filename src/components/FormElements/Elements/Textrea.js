import React from "react";
import InputLayout from "../Layout/InputLayout";

const Textarea = props => {
  return (
    <InputLayout {...props} title={props.base.title}>
      <textarea
        type={props.base.type ? props.base.type : "text"}
        className="p-4 h-24 w-full rounded-lg border border-color-gray-300 shadow-base focus:shadow-none focus:outline-none"
        placeholder={props.base.placeholder}
      />
    </InputLayout>
  );
};

export default Textarea;
