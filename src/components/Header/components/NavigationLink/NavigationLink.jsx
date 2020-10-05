// import React from "react";
// import PropTypes from "prop-types";
import styled, { css } from "styled-components";

// import Button from "../../../Button";

const NavigationLink = styled.a`
  text-decoration: none;
  color: #545a77;
  margin: 16px;
  &:hover {
    color: #008fb4;
  }
  ${(props) =>
    props.indictable &&
    css`
      &:hover {
        border-bottom: 2px solid #008fb4;
        margin-bottom: --2px;
      }
    `}
`;

// const Link = ({ children, href, className, indictable }) => (
//   <NavigationItem
//     as={StyleLink}
//     indictable={indictable}
//     href={href}
//     className={className}
//   >
//     {children}
//   </NavigationItem>
// );

// Link.defaultProps = {
//   className: "",
//   indictable: false,
// };

// Link.propTypes = {
//   children: PropTypes.node.isRequired,
//   href: PropTypes.string.isRequired,
//   indictable: PropTypes.bool,
//   className: PropTypes.string,
// };

// const NavigationLink = {};

// NavigationLink.Naked = Link;

// NavigationLink.Text = styled(Link)`
//   color: #545a77;
//   &:hover {
//     color: #008fb4;
//   }
// `;

// const StyledButton = styled(Button)`
//   margin: 8px 16px;
// `;
// NavigationLink.Button = ({ href, children, variant }) => (
//   <StyledButton as={StyleLink} href={href} variant={variant}>
//     {children}
//   </StyledButton>
// );

// NavigationLink.Button.defaultProps = {
//   variant: "primary",
// };
// NavigationLink.Button.propTypes = {
//   children: PropTypes.node.isRequired,
//   href: PropTypes.string.isRequired,
//   variant: PropTypes.oneOf(["primary", "secondary"]),
// };
export default NavigationLink;
