import React from "react";
import styled from "styled-components";
import Private from "./components/Private";
import Public from "./components/Public";

const StyledHeader = styled.div`
  border-bottom: 1px solid #dadadd;
`;
const Container = styled.div`
  width: 1024px;
  margin: 0 auto;
`;
const Layout = styled.div`
  display: flex;
`;
const Left = styled.div``;
const Right = styled.div`
  margin-left: auto;
`;

const Header = ({ changePage }) => (
  <StyledHeader>
    <Container>
      <Layout>
        <Left>
          <Public />
        </Left>
        <Right>
          <Private changePage={changePage} />
        </Right>
      </Layout>
    </Container>
  </StyledHeader>
);

export default Header;
