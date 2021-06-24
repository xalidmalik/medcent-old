import React, { Component } from "react";
import Fields from "../../components/FormElements/Elements/Fields";
import Checkbox from "../../components/FormElements/Elements/Checkbox";
import Radiobox from "../../components/FormElements/Elements/Radiobox";
import { patientForm } from "../../helpers/Static/FormFields";
import { patientSchema } from "../../helpers/Static/Yup";
import { gender, diseases, color } from "../../helpers/Static/System";
import { patient } from "../../helpers/Static/System";
import Card from "../../components/Card/Card";
import DropDown from "../../components/FormElements/Elements/DropDown";
import { Formik, Form } from "formik";

class DefaultForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          Name: "",
          Surname: "",
          Tc: "",
          Gender: "",
          BirthDate: "",
          MobilePhone: "",
          Email: "",
          ConfirmSms: false,
          Diseases: "",
          Color: ""
        }}
        validationSchema={patientSchema}
        onSubmit={(values, { setSubmitting }) => {
          alert("Başarılı");
          console.log("Degerler", values);
        }}
      >
        {({
          errors,
          touched,
          values,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          setFieldTouched
        }) => (
          <Form id="PatientFormSubmit">
            <Card base={patient.identity}>
              <Fields
                base={patientForm.name}
                touched={touched.Name}
                errors={errors.Name}
                values={values.Name}
              />
              <Fields
                base={patientForm.surname}
                touched={touched.Surname}
                errors={errors.Surname}
                values={values.Surname}
              />
              <Fields
                base={patientForm.tc}
                touched={touched.Tc}
                errors={errors.Tc}
                values={values.Tc}
              />
              <Radiobox
                touched={touched.Gender}
                errors={errors.Gender}
                values={values.Gender}
                options={gender}
                base={patientForm.gender}
              />
              <Fields
                base={patientForm.birthDate}
                touched={touched.BirthDate}
                errors={errors.BirthDate}
                values={values.BirthDate}
              />
              {/* <ColorPicker
                base={patientForm.color}
                options={colors}
                selectedOption={value => {
                  console.log("Parent-ColorPicker", value);
                }}
              /> */}

              <DropDown
                options={diseases}
                base={patientForm.diseases}
                touched={touched.Diseases}
                errors={errors.Diseases}
                values={values.Diseases}
                onChange={setFieldValue}
                OnBlur={setFieldTouched}
              />
            </Card>
            <Card base={patient.identity}>
              <Fields
                base={patientForm.mobilePhone}
                touched={touched.MobilePhone}
                errors={errors.MobilePhone}
                values={values.MobilePhone}
              />
              <Fields
                base={patientForm.email}
                touched={touched.Email}
                errors={errors.Email}
                values={values.Email}
              />
              <Checkbox base={patientForm.confirmSms} />
            </Card>
            <button
              type="submit"
              className="px-12 py-4 rounded bg-red-300 font-medium"
            >
              Kaydet
            </button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default DefaultForm;
