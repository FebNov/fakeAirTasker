import React from "react";
import styled from "styled-components";
import NavigationButton from "../NavigationButton";
const Layout = styled.div`
  display: flex;
`;
const Authentication = () => (
  <Layout>
    <NavigationButton href="/enroll">Bacome a Tasker</NavigationButton>
  </Layout>
);

export default Authentication;
