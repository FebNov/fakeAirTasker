import React from "react";
import Alert from "../../../../../Alert";
import PropTypes from "prop-types";
import Modal from "../../../../../Modal";
import NakedButton from "../../../../../NakedButton";
import styled from "styled-components";
import Button from "../../../../../Button";
import FormItem from "../../../../../FormItem";
import Input from "../../../../../Input";
import signIn, { error as Error } from "../../../../../../apis/signIn";
import form from "./form";
import { withRouter } from "../../../../../Router";
import withForm from "../../../../../withForm";

const Form = styled.form`
  padding: 16px 0;
`;

class SignInModal extends React.Component {
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
      onSignInSuccess,
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

    signIn(data)
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
        onSignInSuccess(user);
        router.push("/dashboard");
      })
      .catch((error) => {
        if (Error[error.status]) {
          this.setState({
            error: Error[error.status],
          });
          return;
        }
        throw error;
      });
  }

  render() {
    const {
      onClose,
      onSignUp,
      formData,
      getErrorMessage,
      isFormValid,
      handleFormDataChange,
    } = this.props;
    const { error, loading } = this.state;
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
  }
}

SignInModal.propType = {
  onClose: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired,
};
const withFormSignInModal = withForm(form)(SignInModal);
const withRouterSignInModal = withRouter(withFormSignInModal);
export default withRouterSignInModal;
