import React from "react";
import styled from "styled-components";
import NavigationLink from "../NavigationLink";
import NavigationButton from "../NavigationButton";
import SignInModal from "./components/SigninModal";
const Layout = styled.div`
  display: flex;
`;

class Private extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignInModal: false,
    };
    this.toggleSignInModal = this.toggleSignInModal.bind(this);
  }
  toggleSignInModal(event) {
    event.preventDefault();

    this.setState((prevState) => ({
      showSignInModal: !prevState.showSignInModal,
    }));
  }
  render() {
    const { showSignInModal } = this.state;
    return (
      <>
        <Layout>
          <NavigationButton onClick={this.toggleSignInModal}>
            Sign In
          </NavigationButton>
          <NavigationButton>Sign Up</NavigationButton>
          <NavigationLink.Button variant="secondary" href="/enroll">
            Bacome a Tasker
          </NavigationLink.Button>
        </Layout>
        {showSignInModal && <SignInModal onClose={this.toggleSignInModal} />}
      </>
    );
  }
}

export default Private;
