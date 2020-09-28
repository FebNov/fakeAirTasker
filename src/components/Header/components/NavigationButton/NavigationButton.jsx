import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Link = styled.a`
  text-decoration: none;
  padding: 12px 16px;
`;
const Button = styled.span`
  background: #e0446d;
  border-radius: 200px;
  font-size: 14px;
  padding: 8px 18px;
  color: white;
`;
const NavigationButton = ({ href, children }) => (
  <Link href={href}>
    <Button>{children}</Button>
  </Link>
);

NavigationButton.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavigationButton;
