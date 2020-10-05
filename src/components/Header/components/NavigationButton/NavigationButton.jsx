// import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
// import NavigationItem from "../NavigationItem";
// import NavigationLink from "../NavigationLink";
// import NakedButton from "../../../NakedButton";
import Button from "../../../Button";

const NavigationButton = styled(Button)`
  margin: 8px 16px;
`;

NavigationButton.defaultProps = {
  variant: "primary",
  size: "small",
};
// const NavigationButton = {};

// NavigationButton.Text = ({
//   onClick,
//   children,
//   indictable,
//   onMouseEnter,
//   onMouseLeave,
// }) => (
//   <NavigationItem indictable={indictable}>
//     <NavigationLink.Text
//       as={NakedButton}
//       onClick={onClick}
//       onMouseEnter={onMouseEnter}
//       onMouseLeave={onMouseLeave}
//     >
//       {children}
//     </NavigationLink.Text>
//   </NavigationItem>
// );

// NavigationButton.Text.defaultProps = {
//   indictable: false,
//   onClick: undefined,
//   onMouseEnter: undefined,
//   onMouseLeave: undefined,
// };

// NavigationButton.Text.propTypes = {
//   indictable: PropTypes.bool,
//   onClick: PropTypes.func,
//   onMouseEnter: PropTypes.func,
//   onMouseLeave: PropTypes.func,
//   children: PropTypes.node.isRequired,
// };

// const StyledButton = styled(Button)`
//   margin: 8px 16px;
// `;

// NavigationButton.Button = ({ onClick, children, variant, size }) => (
//   <StyledButton size="small" variant={variant} onClick={onClick}>
//     {children}
//   </StyledButton>
// );

// NavigationButton.Button.defaultProps = {
//   variant: "primary",
// };
// NavigationButton.Button.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   children: PropTypes.node.isRequired,
//   variant: PropTypes.oneOf(["primary", "secondary"]),
// };

export default NavigationButton;
