import React, { Component } from "react";
import Fields from "../../components/FormElements/Elements/Fields";
import { signForm } from "../../helpers/Static/FormFields";
import { signSchema } from "../../helpers/Static/Yup";
import { Formik, Form } from "formik";
import { connect } from "react-redux";
import { fetchToken } from "../../redux/actions/Token";
import { History } from "../../helpers/History";

class LoginData extends Component {
  componentDidUpdate(prevProps) {
    const { tokenIsLoading, token, tokenErrorMessage } = this.props;

    if (prevProps.tokenIsLoading && !tokenIsLoading && token) {
      localStorage.setItem("userData", JSON.stringify(token));
      window.location.reload();
    } else if (
      prevProps.tokenIsLoading &&
      !tokenIsLoading &&
      tokenErrorMessage &&
      !token
    ) {
      alert("Giriş bilgileri yanlış");
    }
  }

  render() {
    return (
      <Formik
        initialValues={{
          Username: "",
          Password: ""
        }}
        validationSchema={signSchema}
        onSubmit={(values, { setSubmitting }) => {
          this.props.fetchToken(values.Username, values.Password);
        }}
      >
        {({ errors, touched, values, handleSubmit, isSubmitting }) => (
          <Form>
            <Fields
              base={signForm.Username}
              touched={touched.Username}
              errors={errors.Username}
            />
            <Fields
              base={signForm.Password}
              touched={touched.Password}
              errors={errors.Password}
            />

            <button
              type="submit"
              className="px-6 py-4 mt-20 w-full bg-med-500 rounded shadow-base"
            >
              Giriş Yap
            </button>
          </Form>
        )}
      </Formik>
    );
  }
}

const mapStateToProps = state => {
  const { tokenIsLoading, token, tokenErrorMessage } = state.fetchToken;

  return {
    tokenIsLoading,
    token,
    tokenErrorMessage
  };
};

export default connect(
  mapStateToProps,
  { fetchToken }
)(LoginData);
