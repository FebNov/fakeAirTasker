import React from "react";
import styled from "styled-components";
import NavigationButton from "../NavigationButton";
import ToggleContent from "../../../ToggleContent";
import NavigationLink from "../NavigationLink";
import PostTaskerModal from "./components/PostModal";
import DropDownList from "./components/DropDown";
const Layout = styled.div`
  display: flex;
`;

const Divider = styled.div`
  width: 1px;
  border-right: 1px solid #dadada;
`;

const Public = () => (
  <Layout>
    <NavigationLink href="/">Logo</NavigationLink>
    <Divider />
    <ToggleContent
      toggle={(toggle) => (
        <NavigationButton
          variant="primary"
          href="/post-a-task"
          onClick={toggle}
        >
          Post a Task
        </NavigationButton>
      )}
      content={(toggle) => <PostTaskerModal onClose={toggle} />}
    />
    <DropDownList />
    <NavigationLink indictable href="/browser-task">
      Browse Tasks
    </NavigationLink>
    <NavigationLink indictable href="/how-it-work">
      How it Works
    </NavigationLink>
  </Layout>
);
export default Public;
