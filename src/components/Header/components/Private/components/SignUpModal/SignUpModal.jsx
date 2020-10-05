import React from "react";
import Alert from "../../../../../Alert";
import PropTypes from "prop-types";
import Modal from "../../../../../Modal";
import NakedButton from "../../../../../NakedButton";
import styled from "styled-components";
import Button from "../../../../../Button";
import FormItem from "../../../../../FormItem";
import Input from "../../../../../Input";
import form from "./form";
import signUp from "../../../../../../apis/signUp";
const Form = styled.form`
  padding: 16px 0;
`;

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      loading: false,
      formData: {
        email: {
          value: "",
          touched: false,
        },
        password: {
          value: "",
          touched: false,
        },
        confirmPassword: {
          value: "",
          touched: false,
        },
      },
    };

    this.handleFormDataChange = this.handleFormDataChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  getData() {
    const { formData } = this.state;
    const data = Object.keys(formData).reduce(
      (obj, key) => ({
        ...obj,
        [key]: formData[key].value,
      }),
      {}
    );
    return data;
  }

  getErrorMessage(target) {
    const { formData } = this.state;
    const data = this.getData();

    return form[target].getErrorMessage(formData[target].value, data);
  }
  handleFormDataChange(target) {
    return (event) => {
      event.preventDefault();
      const { value } = event.target;

      this.setState((prevState) => ({
        formData: {
          ...prevState.formData,
          [target]: {
            value,
            touched: true,
          },
        },
      }));
    };
  }

  handleFormSubmit(event) {
    const { onClose, onSignUpSuccess } = this.props;
    event.preventDefault();

    this.setState({
      error: null,
      loading: true,
    });

    if (!this.isFormValid()) {
      console.log("There are validation errors");

      return;
    }
    const data = this.getData();

    signUp(data)
      .then((res) => {
        this.setState({
          loading: false,
        });
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((user) => {
        onClose();
        onSignUpSuccess(user);
      })
      .catch((error) => {
        if (error.status === 409) {
          this.setState({
            error: "Email Existed",
          });
          return;
        }

        this.setState({ error: "Something unexpect happen, try again later" });
        throw error;
      });
  }

  isFormValid() {
    const { formData } = this.state;

    const errorMessages = Object.keys(formData)
      .map((key) => {
        const errorMessage = this.getErrorMessage(key);

        return errorMessage;
      })
      .filter((v) => !!v);

    return !errorMessages.length;
  }

  render() {
    const { formData, error, loading } = this.state;
    const { onClose, onSignIn } = this.props;

    return (
      <Modal onClose={onClose}>
        <Modal.Header>Sign Up</Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleFormSubmit}>
            {error && (
              <FormItem>
                <Alert>{error}</Alert>
              </FormItem>
            )}

            {Object.keys(form).map((key) => {
              const { label, type } = form[key];

              const { value, touched } = formData[key];

              const errorMessage = touched ? this.getErrorMessage(key) : "";

              return (
                <FormItem
                  key={key}
                  htmlFor={key}
                  label={label}
                  errorMessage={errorMessage}
                >
                  <Input
                    id={key}
                    type={type}
                    error={errorMessage}
                    value={value}
                    onChange={this.handleFormDataChange(key)}
                  />
                </FormItem>
              );
            })}
            <FormItem>
              <Button
                disabled={!this.isFormValid() || loading}
                width="100%"
                variant="success"
              >
                {loading ? "loading" : "Sign up"}
              </Button>
            </FormItem>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          Already a member?&nbsp;
          <NakedButton variant="link" onClick={onSignIn}>
            Sign in now
          </NakedButton>
        </Modal.Footer>
      </Modal>
    );
  }
}

SignUpModal.propType = {
  onSignUpSuccess: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onSignIn: PropTypes.func.isRequired,
};
export default SignUpModal;
