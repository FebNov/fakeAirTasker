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
const Text = styled.span`
  color: #545a77;
`;
const Naked = styled.span``;

const NavigationLink = ({ href, variant, children }) => {
  const Component =
    {
      button: Button,
      text: Text,
    }[variant] || Naked;
  return (
    <Link href={href}>
      <Component>{children}</Component>
    </Link>
  );
};
NavigationLink.defaultProps = {
  variant: undefined,
};
NavigationLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["button", "text"]),
};
export default NavigationLink;
