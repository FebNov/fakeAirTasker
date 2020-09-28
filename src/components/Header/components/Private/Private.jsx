import React from "react";
import styled from "styled-components";
import NavigationLink from "../NavigationLink";
import NavigationButton from "../NavigationButton";
import SignInModal from "./components/SigninModal";
const Layout = styled.div`
  display: flex;
`;
const MODAL = {
  signIn: "SIGN_IN",
  signUp: "SIGN_UP",
  empty: "",
};
class Private extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: MODAL.empty,
      // showSignInModal: false,
    };
    this.showModal = this.showModal.bind(this);
  }
  showModal(target) {
    return (event) => {
      event.preventDefault();

      this.setState({
        showModal: target,
      });
    };
  }
  render() {
    const { showModal } = this.state;
    return (
      <>
        <Layout>
          <NavigationButton onClick={this.showModal(MODAL.signIn)}>
            Sign In
          </NavigationButton>
          <NavigationButton onClick={this.showModal(MODAL.signUp)}>
            Sign Up
          </NavigationButton>
          <NavigationLink.Button variant="secondary" href="/enroll">
            Bacome a Tasker
          </NavigationLink.Button>
        </Layout>
        {showModal === MODAL.signIn && (
          <SignInModal
            onClose={this.showModal(MODAL.empty)}
            onSignUp={this.showModal(MODAL.signUp)}
          />
        )}
        {showModal === MODAL.signUp && <div>SIGn Up</div>}
      </>
    );
  }
}

export default Private;
