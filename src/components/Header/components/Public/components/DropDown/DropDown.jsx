import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import NavigationLink from "../../../NavigationLink";
import NakedButton from "../../../../../NakedButton";
import NavigationItem from "../../../NavigationItem";

const Menu = styled.div`
  position: absolute;
  left: 0;
  background: white;
  padding: 16px 24px;
  border: 1px solid #dadada;
  border-radius: 4px;
  margin-top: -4px;
  margin-right: -4px;
`;

const DropDownWrapper = styled(NakedButton)`
  position: relative;
  cursor: initial;
`;
const CurosrWrapper = styled(NavigationItem)`
  cursor: pointer;
`;
class DropDownList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropDown: false,
    };
    this.toggleDropDown = this.toggleDropDown.bind(this);
  }
  toggleDropDown(event) {
    event.preventDefault();
    this.setState((prevState) => ({
      showDropDown: !prevState.showDropDown,
    }));
  }
  render() {
    const { showDropDown } = this.state;
    return (
      <DropDownWrapper
        onMouseEnter={this.toggleDropDown}
        onMouseLeave={this.toggleDropDown}
      >
        <CurosrWrapper indictable>
          <NavigationLink.Text indictable>Categories</NavigationLink.Text>
        </CurosrWrapper>
        {showDropDown && <Menu>DropDownList</Menu>}
      </DropDownWrapper>
    );
  }
}

export default DropDownList;
