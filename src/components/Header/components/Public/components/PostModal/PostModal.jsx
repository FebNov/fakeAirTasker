import React from "react";
import styled from "styled-components";
import Modal from "../../../../../Modal";
import PropTypes from "prop-types";

const PostTaskerModal = ({ onClose }) => (
  <Modal onClose={onClose}>
    <Modal.Body>THi is Body</Modal.Body>
    <Modal.Footer>this is footer</Modal.Footer>
  </Modal>
);

PostTaskerModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  //   title: PropTypes.node.isRequired,
  // content: PropTypes.node.isRequired,
  // footer: PropTypes.node.isRequired,
};

export default PostTaskerModal;
