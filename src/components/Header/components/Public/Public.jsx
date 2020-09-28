import React from "react";
import styled from "styled-components";

import NavigationLink from "../NavigationLink";

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
    <NavigationLink.Button variant="primary" href="/post-a-task">
      Post a Task
    </NavigationLink.Button>
    <NavigationLink.Text href="/categories">Categories</NavigationLink.Text>
    <NavigationLink.Text href="/browser-task">Browse Tasks</NavigationLink.Text>
    <NavigationLink.Text href="/how-it-work">How it Works</NavigationLink.Text>
  </Layout>
);
export default Public;
