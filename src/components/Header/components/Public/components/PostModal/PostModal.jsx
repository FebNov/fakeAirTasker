import React from "react";
import styled from "styled-components";
import Modal from "../../../../../Modal";
import PropTypes from "prop-types";

const Body = styled.div`
  padding: 40px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  font-size: 24px;
`;
const SubTitle = styled.div`
  font-size: 16px;
`;
const Image = styled.img``;
const PostTaskerModal = ({ onClose }) => (
  <Modal onClose={onClose}>
    <Modal.Body>
      <Body>
        <Image src="http://www.airtasker.com/images/taylor/on-boarding.png" />
        &nbsp;
        <Title>Start getting offers in no time</Title>
        &nbsp;&nbsp;
        <SubTitle>
          We're just going to ask a few questions to help you find the right
          Tasker - it'll only take a few minutes!
        </SubTitle>
      </Body>
    </Modal.Body>
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
