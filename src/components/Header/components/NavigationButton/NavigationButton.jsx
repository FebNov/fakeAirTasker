import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import NavigationItem from "../NavigationItem";
import NavigationLink from "../NavigationLink";
import NakedButton from "../../../NakedButton";

const NavigationButton = {};

NavigationButton.Text = ({
  onClick,
  children,
  indictable,
  onMouseEnter,
  onMouseLeave,
}) => (
  <NavigationItem indictable={indictable}>
    <NavigationLink.Text
      as={NakedButton}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </NavigationLink.Text>
  </NavigationItem>
);

NavigationButton.Text.defaultProps = {
  indictable: false,
  onClick: undefined,
  onMouseEnter: undefined,
  onMouseLeave: undefined,
};

NavigationButton.Text.propTypes = {
  indictable: PropTypes.bool,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  children: PropTypes.node.isRequired,
};

NavigationButton.Button = ({ onClick, children }) => (
  <NavigationLink.Button as={NakedButton} onClick={onClick} variant="primary">
    {children}
  </NavigationLink.Button>
);
NavigationButton.Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavigationButton;
