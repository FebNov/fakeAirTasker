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
    <NavigationLink.Naked href="/">Logo</NavigationLink.Naked>
    <Divider />
    <ToggleContent
      toggle={(toggle) => (
        <NavigationButton.Button
          variant="primary"
          href="/post-a-task"
          onClick={toggle}
        >
          Post a Task
        </NavigationButton.Button>
      )}
      content={(toggle) => <PostTaskerModal onClose={toggle} />}
    />
    <DropDownList />
    <NavigationLink.Text indictable href="/browser-task">
      Browse Tasks
    </NavigationLink.Text>
    <NavigationLink.Text indictable href="/how-it-work">
      How it Works
    </NavigationLink.Text>
  </Layout>
);
export default Public;
