import React from "react";
import styled from "styled-components";
import NavigationButton from "../NavigationButton";
import NavigationLink from "../NavigationLink";

const Layout = styled.div`
  display: flex;
`;
const Divider = styled.div`
  width: 1px;
  border-right: 1px solid #dadada;
`;
const Link = styled.a`
  text-decoration: none;
  padding: 12px 16px;
`;

const Navigation = () => (
  <Layout>
    <Link href="/">
      <NavigationLink>Logo</NavigationLink>
    </Link>
    <Divider />
    <NavigationLink variant="button" href="/post-a-task">
      Post a Task
    </NavigationLink>
    <NavigationLink variant="text" href="/categories">
      Categories
    </NavigationLink>
    <NavigationLink variant="text" href="/browser-task">
      Browse Tasks
    </NavigationLink>
    <NavigationLink variant="text" href="/how-it-work">
      How it Works
    </NavigationLink>
  </Layout>
);
export default Navigation;
