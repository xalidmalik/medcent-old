import React from "react";
import InputLayout from "../Layout/InputLayout";
import { Field } from "formik";
import { borderColorChange } from "../../../helpers/Static/FormValidation";
import MaskedInput from "react-text-mask";

const Fields = props => {
  return (
    <InputLayout
      touched={props.touched}
      errors={props.errors}
      values={props.values}
      title={props.base.title}
      required={props.base.required}
    >
      {props.base.mask ? (
        <Field
          name={props.base.for}
          render={({ field }) => (
            <MaskedInput
              {...field}
              mask={props.base.masked}
              placeholder={props.base.placeholder}
              type={props.base.type ? props.base.type : "text"}
              className={`h-12 px-4 w-full rounded-lg border ${borderColorChange(
                props.touched,
                props.errors,
                props.values
              )} shadow-base focus:shadow-none focus:outline-none`}
            />
          )}
        />
      ) : (
        <Field
          type={props.base.type ? props.base.type : "text"}
          name={props.base.for}
          className={`h-12 px-4 w-full rounded-lg border ${borderColorChange(
            props.touched,
            props.errors,
            props.values
          )} shadow-base focus:shadow-none focus:outline-none`}
          placeholder={props.base.placeholder}
        />
      )}
    </InputLayout>
  );
};

export default Fields;
