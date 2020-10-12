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
import { withRouter } from "../../../../../Router";
import withForm from "../../../../../withForm";
import withFetch from "../../../../../withFetch/withFetch";
import compose from '../../../../../../utils/compose'
const Form = styled.form`
  padding: 16px 0;
`;

const ERROR = {
  409: 'Email already exists, please use another one',
  500: 'Something wrong, please try again',
};


const SignUpModal= ({
  onClose,
  onSignIn,
  onSignUpSuccess,
  formData,
  getData,
  getErrorMessage,
  handleFormDataChange,
  isFormValid,
  router,
  fetch,
  error,
  loading,})=>{
    return (
    <Modal onClose={onClose}>
    <Modal.Header>Sign Up</Modal.Header>
    <Modal.Body>
      <Form o
      nSubmit={(event)=>{   
        event.preventDefault();
          if (!isFormValid()) {
           return;
          }
         const data = getData();
         fetch(() => signUp(data))
          .then((user) => {
          onClose();
          onSignUpSuccess(user);
          router.push("/dashboard");
      });
    }}
    >
        {error && (
          <FormItem>
            <Alert>{ERROR[error.status]}</Alert>
          </FormItem>
        )}
        {Object.keys(form).map((key) => {
          const { label, type } = form[key];
          const { value, touched } = formData[key];

          const errorMessage = touched ? getErrorMessage(key) : "";

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
                onChange={handleFormDataChange(key)}
              />
            </FormItem>
          );
        })}
        <FormItem>
          <Button
            disabled={!isFormValid() || loading}
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
  </Modal>)}


SignUpModal.propTypes = {
  onSignUpSuccess: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onSignIn: PropTypes.func.isRequired,
};


const EnhancedSignUpModal = compose(
  withForm(form),
  withRouter,
  withFetch,
)(SignUpModal);
export default EnhancedSignUpModal;