import React from "react";
import styled from "styled-components";
import NavigationButton from "../NavigationButton";

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
const Logo = styled.span`
  color: #008fb4;
`;
const Text = styled.span`
  color: #545a77;
`;
const Navigation = () => (
  <Layout>
    <Link href="/">
      <Logo>Logo</Logo>
    </Link>
    <Divider />
    <NavigationButton href="/post-a-task">Post a Task</NavigationButton>
    <Link href="/categories">
      <Text>Categories</Text>
    </Link>
    <Link href="/browser-task">
      <Text>Browse Tasks</Text>
    </Link>
    <Link href="/how-it-work">
      <Text>How it Works</Text>
    </Link>
  </Layout>
);
export default Navigation;
