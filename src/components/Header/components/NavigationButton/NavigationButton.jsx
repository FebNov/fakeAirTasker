import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import NavigationItem from "../NavigationItem";

const Button = styled.button`
  outline: 0;
  border: 0;
  background: transparent;
  text-align: left;
  font-size: 16px;
  cursor: pointer;
  padding: 0;
`;

const NavigationButton = ({ onClick, children }) => (
  <NavigationItem>
    <Button onClick={onClick}>{children}</Button>
  </NavigationItem>
);

NavigationButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavigationButton;
