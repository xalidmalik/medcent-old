export const textColorChange = (touched, errors, values) => {
  if ((touched && !errors && values) || (!touched && !errors && values)) {
    return "text-green-500";
  } else if ((touched && errors && !values) || (touched && errors && values)) {
    return "text-red-500";
  } else {
    return "text-gray-500";
  }
};

export const bgColorChange = (touched, errors, values) => {
  if ((touched && !errors && values) || (!touched && !errors && values)) {
    return "bg-green-500";
  } else if ((touched && errors && !values) || (touched && errors && values)) {
    return "bg-red-500";
  } else {
    return "bg-gray-500";
  }
};
export const errorsChange = (touched, errors, values) => {
  if ((touched && !errors && values) || (!touched && !errors && values)) {
    return "Başarılı";
  }
  // else if (touched && !errors && !values) {
  //   return errors ? errors : "Bu alan zorunludur.";
  // }
  else {
    return errors ? errors : "Bu alan zorunludur.";
  }
};

export const borderColorChange = (touched, errors, values) => {
  if ((touched && !errors && values) || (!touched && !errors && values)) {
    return "border-green-500";
  } else if ((touched && errors && !values) || (touched && errors && values)) {
    return "border-red-500";
  } else {
    return "border-gray-300";
  }
};
