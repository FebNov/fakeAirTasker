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
    <NavigationLink to="/">
      LOGO
    </NavigationLink>
    <Divider />
    <ToggleContent
      toggle={(toggler) => (
        <NavigationButton
          variant="primary"
          href="/post-a-task"
          onClick={toggler}
        >
          Post a task
        </NavigationButton>
      )}
      content={(toggler) => (
        <PostTaskerModal onClose={toggler} />
      )}
    />
    <DropDownList />
    <NavigationLink indictable to="/browse-tasks">
      Browse tasks
    </NavigationLink>
    <NavigationLink indictable to="/how-it-works">
      How it works
    </NavigationLink>
  </Layout>
);

export default Public;
