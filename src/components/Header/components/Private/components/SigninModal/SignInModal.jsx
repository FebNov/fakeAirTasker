import React from "react";
import Alert from "../../../../../Alert";
import PropTypes from "prop-types";
import Modal from "../../../../../Modal";
import NakedButton from "../../../../../NakedButton";
import styled from "styled-components";
import Button from "../../../../../Button";
import FormItem from "../../../../../FormItem";
import Input from "../../../../../Input";
import signIn, { error as ERROR } from "../../../../../../apis/signIn";
import form from "./form";
import { withRouter } from "../../../../../Router";
import withForm from "../../../../../withForm";
import withFetch from "../../../../../withFetch/withFetch";

const Form = styled.form`
  padding: 16px 0;
`;

const SignInModal = (
{  onClose,
  onSignUp,
  onSignInSuccess,
  formData,
  getData,
  getErrorMessage,
  handleFormDataChange,
  isFormValid,
  router,
  fetch,
  error,
  loading}
) => {
  return (
    <Modal onClose={onClose}>
      <Modal.Header>Sign Up</Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            if (!isFormValid()) {
              return;
            }
            const data = getData();
            fetch(() => signIn(data), ERROR).then((user) => {
              onClose();
              onSignInSuccess(user);
              localStorage.setItem("user",JSON.stringify(user))
              router.push("/dashboard");
            });
          }}
        >
          {error && (
            <FormItem>
              <Alert>{error}</Alert>
            </FormItem>
          )}
          {Object.keys(form).map((key) => {
          const { label, type } = form[key];
          const { value, touched } = formData[key];

          const errorMessage = touched ? getErrorMessage(key) : '';

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
              {loading ? "loading" : "Sign In"}
            </Button>
          </FormItem>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        Not Member Yet?&nbsp;
        <NakedButton variant="link" onClick={onSignUp}>
          Sign Up now
        </NakedButton>
      </Modal.Footer>
    </Modal>
  );
};

SignInModal.propType = {
  onClose: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired,
  onSignInSuccess: PropTypes.func.isRequired,
};
const withFetchSignInModal = withFetch(SignInModal);
const withFormSignInModal = withForm(form)(withFetchSignInModal);
const withRouterSignInModal = withRouter(withFormSignInModal);
export default withRouterSignInModal;
