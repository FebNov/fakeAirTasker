import React from "react";

import PropTypes from "prop-types";
import Modal from "../../../../../Modal";
import NakedButton from "../../../../../NakedButton";
import styled from "styled-components";
import Button from "../../../../../Button";
import FormItem from "../../../../../FormItem";
import Input from "../../../../../Input";
const Form = styled.form`
  padding: 16px 0;
`;

const EMAIL_REGEXP = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const FORM = {
  email: {
    label: "Email",
    type: "text",
    getErrorMessage: (value) => {
      if (!value) {
        return "Please enter your email address";
      }

      if (!EMAIL_REGEXP.test(value)) {
        return "Please enter a valid email address";
      }

      return "";
    },
  },
  password: {
    key: "password",
    label: "Password",
    type: "password",
    getErrorMessage: (value) => {
      if (!value) {
        return "Please enter your password";
      }

      return "";
    },
  },
  confirmPassword: {
    key: "confirmPassword",
    label: "Confirm password",
    type: "password",
    getErrorMessage: (value, data) => {
      if (!value) {
        return "Please enter your confirm password";
      }

      if (value !== data.password) {
        return "Your confirm password does not match";
      }

      return "";
    },
  },
};

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        email: "",
        password: "",
        confirmpassword: "",
      },
    };
    this.handleFormDataChange = this.handleFormDataChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormDataChange(target) {
    return (event) => {
      const { value } = event.target;
      event.preventDefault();

      this.setState((prevState) => ({
        forData: {
          ...prevState.formData,
          [target]: value,
        },
      }));
    };
  }

  handleFormSubmit(event) {
    const { formData } = this.state;
    event.preventDefault();
    console.log(formData);
  }

  render() {
    const { formData } = this.state;
    const { onClose, onSignIn } = this.props;
    return (
      <Modal onClose={onClose}>
        <Modal.Header>Sign-Up</Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleFormSubmit}>
            {FORM.map(({ key, label, type, getErrorMessage }) => (
              <FormItem key={key} htmlFor={key} label={label}>
                <Input
                  onChange={this.handleFormDataChange(key)}
                  id={key}
                  type={type}
                />
                {getErrorMessage(formData[key])}
              </FormItem>
            ))}
            <FormItem>
              <Button width="100%" variant="success">
                Sign Up
              </Button>
            </FormItem>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          Already Member?&nbsp;
          <NakedButton variant="link" onClick={onSignIn}>
            Sign-In
          </NakedButton>
        </Modal.Footer>
      </Modal>
    );
  }
}

SignUpModal.propType = {
  onClose: PropTypes.func.isRequired,
  onSignIn: PropTypes.func.isRequired,
};
export default SignUpModal;
