import React from "react";
import PropTypes from "prop-types";
import Modal from "../../../../../Modal";
import NakedButton from "../../../../../NakedButton";

const SignInModal = ({ onClose, onSignUp }) => (
  <Modal onClose={onClose}>
    <Modal.Header>Sign-In</Modal.Header>
    <Modal.Body>THi is Body</Modal.Body>
    <Modal.Footer>
      Not a member yet?&nbsp;
      <NakedButton variant="link" onClick={onSignUp}>
        Sign-Up
      </NakedButton>
    </Modal.Footer>
  </Modal>
);
SignInModal.propType = {
  onClose: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired,
};
export default SignInModal;
