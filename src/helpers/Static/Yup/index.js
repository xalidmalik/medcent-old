import * as yup from "yup"; // for everything

export const patientSchema = yup.object().shape({
  Name: yup.string().required("Bu alan zorunludur."),
  Surname: yup.string().required("Bu alan zorunludur."),
  Tc: yup.string().required("Bu alan zorunludur."),
  Gender: yup.string().required("Bu alan zorunludur."),
  BirthDate: yup
    .date()
    .required("Bu alan zorunludur.")
    .min(new Date(1900, 1, 1), "Geçersiz tarih girdiniz")
    .max(new Date(), "Geçersiz tarih girdiniz"),
  DocumentNo: yup.string().required("Bu alan zorunludur."),
  EMail: yup.string()
  // .email("Geçersiz email adresi girdiniz.")
  // .required("Bu alan zorunludur.")
});

export const signSchema = yup.object().shape({
  Username: yup.string().required("Bu alan zorunludur."),
  Password: yup.string().required("Bu alan zorunludur.")
});
