import React from "react";

import PropTypes from "prop-types";
import Modal from "../../../../../Modal";
import NakedButton from "../../../../../NakedButton";
const SignUpModal = ({ onClose, onSignIn }) => (
  <Modal onClose={onClose}>
    <Modal.Header>Sign-Up</Modal.Header>
    <Modal.Body>THi is Body</Modal.Body>
    <Modal.Footer>
      Already Member?&nbsp;
      <NakedButton variant="link" onClick={onSignIn}>
        Sign-In
      </NakedButton>
    </Modal.Footer>
  </Modal>
);
SignUpModal.propType = {
  onClose: PropTypes.func.isRequired,
  onSignIn: PropTypes.func.isRequired,
};
export default SignUpModal;
