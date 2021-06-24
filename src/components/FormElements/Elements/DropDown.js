import React from "react";
import InputLayout from "../Layout/InputLayout";
import Select from "react-select";

const DropDown = props => {
  const handleChange = value => {
    props.onChange(props.base.for, value);
  };
  // const handleBlur = () => {
  //   props.onBlur(props.base.for, true);
  // };

  return (
    <InputLayout
      touched={props.touched}
      errors={props.errors}
      values={props.values}
      title={props.base.title}
      required={props.base.required}
    >
      <Select
        options={props.options}
        onChange={handleChange}
        // onBlur={handleBlur}
        isMulti
        value={props.values}
        className="w-full h-12 shadow-base rounded-lg"
        classNamePrefix="med"
      />
    </InputLayout>
  );
};

export default DropDown;
