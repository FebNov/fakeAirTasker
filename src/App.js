import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";
import Router, { Route } from "./components/Router";
import { Authentication } from './components/withAuthentication'
import Guard from './components/Guard';
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const HeaderWrapper = styled.section``;
const ContentWrapper = styled.section`
  flex: 1;
`;
const FooterWrapper = styled.section``;

const App = () => (
  <Authentication>
  <Router>
    <Layout>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <ContentWrapper>
        <Route path="/" render={() => <Home />} />
        <Route
            path="/dashboard"
            render={() => (
              <Guard>
                <Dashboard />
              </Guard>
            )}
          />
      </ContentWrapper>
      <FooterWrapper>footer</FooterWrapper>
    </Layout>
  </Router>
  </Authentication>
);

export default App;
