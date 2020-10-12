import React from "react";
import styled from "styled-components";
import NavigationLink from "../NavigationLink";
import NavigationButton from "../NavigationButton";
import SignInModal from "./components/SigninModal";
import SignUpModal from "./components/SignUpModal";
import Link from "../../../Link";
import NakedButton from "../../../NakedButton";
import { withRouter } from "../../../Router";
import { AuthenticationContext } from '../../../withAuthentication';
import Logout from './components/Logout';
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
    };
    this.showModal = this.showModal.bind(this);
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
    const { showModal } = this.state;
    return (
      <>
        <Layout>
        <AuthenticationContext.Consumer>
        {(authentication) => (authentication.user ? (
              <>
                <NavigationLink to="/dashboard">Dashboard</NavigationLink>
                <Logout />
              </>
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
                 
                />
              )}
              {showModal === MODAL.signUp && (
                <SignUpModal
                  onClose={this.showModal(MODAL.empty)}
                  onSignIn={this.showModal(MODAL.signIn)}
          
                />
              )}
            </>
          ))};
          </AuthenticationContext.Consumer>
          <NavigationButton as={Link} variant="secondary" href="/enroll">
            Bacome a Tasker
          </NavigationButton>
        </Layout>
      </>
    );
  }
}
const WithRouterPrivate = withRouter(Private);
export default WithRouterPrivate;
