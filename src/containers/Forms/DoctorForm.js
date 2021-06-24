import React, { Component } from "react";
import Fields from "../../components/FormElements/Elements/Fields";
import Checkbox from "../../components/FormElements/Elements/Checkbox";
import Radiobox from "../../components/FormElements/Elements/Radiobox";
import { patientForm } from "../../helpers/Static/FormFields";
import { patientSchema } from "../../helpers/Static/Yup";
import { gender, color } from "../../helpers/Static/System";
import { patient } from "../../helpers/Static/System";
import Card from "../../components/Card/Card";
import { Formik, Form } from "formik";
import ColorPicker from "../../components/FormElements/Elements/ColorPicker";
import { Doctor } from "../../helpers/UserLevel";
import { connect } from "react-redux";
import { addUser, putUser } from "../../redux/actions/User";
import { AlertSwal } from "../../helpers/Alert";
import { message } from "../../helpers/Static/System";
import { History } from "../../helpers/History";

const UserData = JSON.parse(localStorage.getItem("userData"));

class DoctorForm extends Component {
  checkUserCreate = prevProps => {
    const {
      createUserIsLoading,
      createUserResponse,
      createUserErrorMessage
    } = this.props;

    if (
      prevProps.createUserIsLoading &&
      !createUserIsLoading &&
      createUserResponse
    ) {
      AlertSwal(message.success.title, message.success.type);
      setTimeout(() => History.push("/cadre/doctor/detail"), 1000);
    } else if (
      prevProps.createUserIsLoading &&
      !createUserIsLoading &&
      createUserResponse <= 0
    ) {
      AlertSwal(message.error.title, message.error.type);
    }
  };

  checkUserUpdate = prevProps => {
    const {
      updateUserIsLoading,
      updateUserResponse,
      updateUserErrorMessage
    } = this.props;

    if (
      prevProps.updateUserIsLoading &&
      !updateUserIsLoading &&
      updateUserResponse
    ) {
      AlertSwal(message.success.title, message.success.type);
    } else if (
      prevProps.updateUserIsLoading &&
      !updateUserIsLoading &&
      !updateUserResponse
    ) {
      AlertSwal(message.error.title, message.error.type);
    }
  };

  componentDidUpdate(prevProps) {
    this.checkUserCreate(prevProps);
    this.checkUserUpdate(prevProps);
  }

  render() {
    return (
      <Formik
        initialValues={
          this.props.activeDoctor || {
            Name: "",
            Surname: "",
            Tc: "",
            Gender: "",
            BirthDate: "",
            MobilePhone: "",
            EMail: "",
            CanSendSms: false,
            Color: "gray-800",
            UserLevel: Doctor,
            Username: null,
            Password: null,
            DepartmentCode: UserData.token.DepartmentCode
          }
        }
        validationSchema={patientSchema}
        onSubmit={(values, { setSubmitting }) => {
          if (this.props.activeDoctor) {
            this.props.putUser(values);
            localStorage.setItem("SelectedDoctor", JSON.stringify(values));
          } else {
            values.Password = values.MobilePhone;
            values.Username = values.EMail;
            this.props.addUser(values);
            localStorage.setItem("SelectedDoctor", JSON.stringify(values));
          }
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
          <Form id="DoctorFormSubmit">
            <Card base={patient.identity}>
              <Fields
                base={patientForm.Name}
                touched={touched.Name}
                errors={errors.Name}
                values={values.Name}
              />
              <Fields
                base={patientForm.Surname}
                touched={touched.Surname}
                errors={errors.Surname}
                values={values.Surname}
              />
              <Fields
                base={patientForm.Tc}
                touched={touched.Tc}
                errors={errors.Tc}
                values={values.Tc}
              />
              <Radiobox
                touched={touched.Gender}
                errors={errors.Gender}
                values={values.Gender}
                options={gender}
                base={patientForm.Gender}
              />
              <Fields
                base={patientForm.BirthDate}
                touched={touched.BirthDate}
                errors={errors.BirthDate}
                values={values.BirthDate}
              />
            </Card>
            <Card base={patient.contact}>
              <Fields
                base={patientForm.MobilePhone}
                touched={touched.MobilePhone}
                errors={errors.MobilePhone}
                values={values.MobilePhone}
              />
              <Fields
                base={patientForm.Email}
                touched={touched.EMail}
                errors={errors.EMail}
                values={values.EMail}
              />
              <ColorPicker
                base={patientForm.Color}
                options={color}
                touched={touched.Color}
                errors={errors.Color}
                values={values.Color}
              />
              {/* <Checkbox base={patientForm.CanSendSms} /> */}
            </Card>
          </Form>
        )}
      </Formik>
    );
  }
}

const mapStateToProps = state => {
  const {
    createUserIsLoading,
    createUserResponse,
    createUserErrorMessage
  } = state.addUser;

  const {
    updateUserIsLoading,
    updateUserResponse,
    updateUserErrorMessage
  } = state.putUser;

  return {
    createUserIsLoading,
    createUserResponse,
    createUserErrorMessage,
    updateUserIsLoading,
    updateUserResponse,
    updateUserErrorMessage
  };
};

export default connect(
  mapStateToProps,
  { addUser, putUser }
)(DoctorForm);
