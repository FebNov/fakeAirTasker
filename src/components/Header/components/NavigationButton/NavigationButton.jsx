import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import NavigationItem from "../NavigationItem";
import NavigationLink from "../NavigationLink";

const Button = styled.button`
  outline: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  padding: 0;
`; 

const NavigationButton = ({ onClick, children }) => (
  <NavigationItem>
    <NavigationLink.Text as={Button} onClick={onClick}>
      {children}
    </NavigationLink.Text>
  </NavigationItem>
);

NavigationButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavigationButton;
