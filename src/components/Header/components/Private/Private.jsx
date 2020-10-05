import React from "react";
import styled from "styled-components";
import NavigationLink from "../NavigationLink";
import NavigationButton from "../NavigationButton";
import SignInModal from "./components/SigninModal";
import SignUpModal from "./components/SignUpModal";
import Link from "../../../Link";
import NakedButton from "../../../NakedButton";

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
      user: null,
      // showSignInModal: false,
    };
    this.showModal = this.showModal.bind(this);
    this.setUser = this.setUser.bind(this);
  }
  setUser(target) {
    this.setState({ user: target });
  }
  showModal(target) {
    return (event) => {
      if (event) {
        event.preventDefault();
      }

      this.setState({
        showModal: target,
      });
    };
  }

  render() {
    const { changePage } = this.props;
    const { showModal, user } = this.state;
    return (
      <>
        <Layout>
          {user ? (
            <NavigationLink href="/dashboard">DashBoard</NavigationLink>
          ) : (
            <>
              <NavigationLink
                as={NakedButton}
                onClick={this.showModal(MODAL.signIn)}
              >
                Sign In
              </NavigationLink>
              <NavigationLink
                as={NakedButton}
                onClick={this.showModal(MODAL.signUp)}
              >
                Sign Up
              </NavigationLink>
              {showModal === MODAL.signIn && (
                <SignInModal
                  onClose={this.showModal(MODAL.empty)}
                  onSignUp={this.showModal(MODAL.signUp)}
                  onSignInSuccess={this.setUser}
                  changePage={changePage}
                />
              )}
              {showModal === MODAL.signUp && (
                <SignUpModal
                  onClose={this.showModal(MODAL.empty)}
                  onSignIn={this.showModal(MODAL.signIn)}
                  onSignUpSuccess={this.setUser}
                />
              )}
            </>
          )}

          <NavigationButton as={Link} variant="secondary" href="/enroll">
            Bacome a Tasker
          </NavigationButton>
        </Layout>
      </>
    );
  }
}

export default Private;
