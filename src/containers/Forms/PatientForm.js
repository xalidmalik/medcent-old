import React, { Component } from "react";
import Fields from "../../components/FormElements/Elements/Fields";
import Checkbox from "../../components/FormElements/Elements/Checkbox";
import Radiobox from "../../components/FormElements/Elements/Radiobox";
import { patientForm } from "../../helpers/Static/FormFields";
import { patientSchema } from "../../helpers/Static/Yup";
import { gender, diseases } from "../../helpers/Static/System";
import { patient } from "../../helpers/Static/System";
import Card from "../../components/Card/Card";
import DropDown from "../../components/FormElements/Elements/DropDown";
import { Formik, Form } from "formik";
import { connect } from "react-redux";
import {
  getList,
  addPatient,
  updatePatient
} from "../../redux/actions/Patient";
import {
  diseasesGetList,
  addDiseasesToPatient
} from "../../redux/actions/Diseases";
import { AlertSwal } from "../../helpers/Alert";
import { message } from "../../helpers/Static/System";
import { History } from "../../helpers/History";

class PatientForm extends Component {
  PatientCreateControl = prevProps => {
    const {
      createPatientIsLoading,
      createPatientResponse,
      createPatientErrorMessage
    } = this.props;

    if (
      prevProps.createPatientIsLoading &&
      !createPatientIsLoading &&
      createPatientResponse
    ) {
      AlertSwal(message.success.title, message.success.type);
      this.DiseasesToPatient(createPatientResponse, this.DiseasesList);
      // setTimeout(() => History.push("/patient/detail"), 1000);
      setTimeout(() => window.location.reload(), 1000);
    }
  };

  DiseasesToPatient = (patientId, diseasesList) => {
    if (diseasesList) {
      let diseasesModel = [];
      diseasesList.map(d => {
        diseasesModel.push({
          PatientId: patientId,
          DiseaseId: d.value
        });
      });

      // console.log("Diseases Model :", diseasesModel);
      this.props.addDiseasesToPatient(diseasesModel);
    }
  };

  PatientUpdateControl = prevProps => {
    const {
      updatePatientIsLoading,
      updatePatientResponse,
      updatePatientErrorMessage
    } = this.props;

    if (
      prevProps.updatePatientIsLoading &&
      !updatePatientIsLoading &&
      updatePatientResponse
    ) {
      AlertSwal(message.success.title, message.success.type);
    } else if (
      prevProps.updatePatientIsLoading &&
      !updatePatientIsLoading &&
      !updatePatientResponse
    ) {
      AlertSwal(message.error.title, message.error.type);
    }
  };

  componentDidUpdate(prevProps) {
    this.PatientCreateControl(prevProps);
    this.PatientUpdateControl(prevProps);
  }

  componentDidMount() {}

  DiseasesList = null;
  render() {
    return (
      <Formik
        initialValues={
          this.props.activePatient || {
            Name: "",
            Surname: "",
            Tc: "",
            Gender: "",
            BirthDate: "",
            MobilePhone: "",
            EMail: "",
            CanSendSms: false,
            DocumentNo: "",
            Note: "",
            Tag: ""
          }
        }
        validationSchema={patientSchema}
        onSubmit={(values, { setSubmitting }) => {
          if (this.props.activePatient) {
            this.props.updatePatient(values);
            localStorage.setItem("SelectedPatient", JSON.stringify(values));
          } else {
            this.props.addPatient(values);
            localStorage.setItem("SelectedPatient", JSON.stringify(values));
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
          setFieldTouched,
          handleReset,
          dirty
        }) => (
          <Form id="PatientFormSubmit">
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
              {/* <ColorPicker
                base={patientForm.color}
                options={colors}
                selectedOption={value => {
                  console.log("Parent-ColorPicker", value);
                }}
              /> */}

              {/* <DropDown
                options={this.props.allDiseasesList || diseases}
                base={patientForm.Diseases}
                touched={touched.Diseases}
                errors={errors.Diseases}
                values={values.Diseases}
                onChange={setFieldValue}
                OnBlur={setFieldTouched}
              /> */}
            </Card>
            <Card base={patient.contact}>
              <Fields
                base={patientForm.MobilePhone}
                touched={touched.MobilePhone}
                errors={errors.MobilePhone}
                values={values.MobilePhone}
              />
              <Fields
                base={patientForm.EmergencyMobilePhone}
                touched={touched.EmergencyMobilePhone}
                errors={errors.EmergencyMobilePhone}
                values={values.EmergencyMobilePhone}
              />
              <Fields
                base={patientForm.Email}
                touched={touched.EMail}
                errors={errors.EMail}
                values={values.EMail}
              />
              <Checkbox
                touched={touched.CanSendSms}
                errors={errors.CanSendSms}
                values={values.CanSendSms}
                base={patientForm.CanSendSms}
              />
            </Card>
            <Card base={patient.process}>
              <Fields
                base={patientForm.DocumentNo}
                touched={touched.DocumentNo}
                errors={errors.DocumentNo}
                values={values.DocumentNo}
              />
              <Fields
                touched={touched.Tag}
                errors={errors.Tag}
                values={values.Tag}
                base={patientForm.Tag}
              />
              <Fields
                base={patientForm.Note}
                touched={touched.Note}
                errors={errors.Note}
                values={values.Note}
              />
            </Card>
            {/* <button
              type="button"
              className="bg-red-500 p-4"
              onClick={handleReset}
              disabled={!dirty}
            >
              Sifirla
            </button> */}
            {/* <button
              onClick={() => console.log("hasta", values)}
              type="submit"
              className="px-12 py-4 rounded bg-red-300 font-medium"
            >
              Kaydet
            </button> */}
          </Form>
        )}
      </Formik>
    );
  }
}

const mapStateToProps = state => {
  const {
    createPatientIsLoading,
    createPatientResponse,
    createPatientErrorMessage
  } = state.addPatient;

  const { diseasesList } = state.fetchDiseases;

  const {
    updatePatientIsLoading,
    updatePatientResponse,
    updatePatientErrorMessage
  } = state.putPatient;

  let allDiseasesList = [];

  if (diseasesList) {
    diseasesList.map(diseases => {
      allDiseasesList.push({ value: diseases.Id, label: diseases.Name });
    });
  }

  return {
    createPatientIsLoading,
    createPatientResponse,
    createPatientErrorMessage,
    allDiseasesList,
    updatePatientIsLoading,
    updatePatientResponse,
    updatePatientErrorMessage
  };
};

export default connect(
  mapStateToProps,
  { addPatient, diseasesGetList, addDiseasesToPatient, updatePatient }
)(PatientForm);
