import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import NavigationItem from "../NavigationItem";

const StyleLink = styled.a`
  text-decoration: none;
`;
const Link = ({ children }) => (
  <NavigationItem>
    <StyleLink>{children}</StyleLink>
  </NavigationItem>
);
Link.propTypes = {
  children: PropTypes.node.isRequired,
};
const NavigationLink = {};
NavigationLink.Naked = ({ href, children }) => (
  <Link href={href}>{children}</Link>
);
NavigationLink.Naked.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Button = styled.span`
  background: #e0446d;
  border-radius: 200px;
  font-size: 14px;
  padding: 8px 18px;
  color: white;

  ${(props) => {
    const style = {
      primary: css`
        background: #e0446d;
        color: white;
      `,
      secondary: css`
        background: #f5f8fd;
        border: 1px solid #dadada;
        color: #008fb4;
      `,
    }[props.variant];
    return style;
  }}
`;
NavigationLink.Button = ({ href, children, variant }) => (
  <Link href={href}>
    <Button variant={variant}>{children}</Button>
  </Link>
);
NavigationLink.Button.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]),
};
NavigationLink.Text = ({ href, children }) => (
  <Link href={href}>
    <Text>{children}</Text>
  </Link>
);

const Text = styled.span`
  color: #545a77;
  &:hover {
    color: #008fb4;
  }
`;
NavigationLink.Text.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavigationLink;
