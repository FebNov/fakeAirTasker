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
const Form = styled.form`
  padding: 16px 0;
`;

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      loading: false,
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    const {
      onClose,
      onSignUpSuccess,
      router,
      isFormValid,
      getData,
    } = this.props;
    event.preventDefault();

    this.setState({
      error: null,
      loading: true,
    });

    if (!isFormValid()) {
      console.log("There are validation errors");

      return;
    }
    const data = getData();

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
        router.push("/dashboard");
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

  render() {
    const { error, loading } = this.state;
    const {
      onClose,
      onSignIn,
      formData,
      getErrorMessage,
      isFormValid,
      handleFormDataChange,
    } = this.props;

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
      </Modal>
    );
  }
}

SignUpModal.propType = {
  onSignUpSuccess: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onSignIn: PropTypes.func.isRequired,
};
const withFormSignUpModal = withForm(form)(SignUpModal);
const withRouterSignUpModal = withRouter(withFormSignUpModal);
export default withRouterSignUpModal;
