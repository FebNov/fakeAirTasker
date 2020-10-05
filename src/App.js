import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";
import Router from "./components/Router";
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
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "HOME",
    };
    this.changePage = this.changePage.bind(this);
  }
  changePage(target) {
    return (event) => {
      if (event) {
        event.preventDefault();
      }
      window.history.pushState(undefined, undefined, target);
      this.setState({
        url: target,
      });
    };
  }

  render() {
    const { url } = this.state;
    return (
      <Router>
        <Layout>
          <HeaderWrapper>
            <Header changePage={this.changePage} />
          </HeaderWrapper>
          <ContentWrapper>
            {url === "/" && <Home />}
            {url === "/dashboard" && <Dashboard />}
          </ContentWrapper>
          <FooterWrapper>footer</FooterWrapper>
        </Layout>
      </Router>
    );
  }
}

export default App;
