import React from "react";
import styled from "styled-components";
import NavigationLink from "../NavigationLink";
import NavigationButton from "../NavigationButton";
import SignInModal from "./components/SigninModal";
import SignUpModal from "./components/SignUpModal";
import Link from "../../../Link";
import NakedButton from "../../../NakedButton";
import { withRouter } from "../../../Router";
// import getAuth from '../../../../apis/getAuth'
import withFetch from '../../../withFetch';
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
    const user = JSON.parse(localStorage.getItem("user"))
    this.state = {
      showModal: MODAL.empty,
      user,
      // showSignInModal: false,
    };
    this.showModal = this.showModal.bind(this);
    this.setUser = this.setUser.bind(this);
  }
// componentDidMount(){
//   this.getAuth();
// }
//   getAuth(){
//     const {fetch} = this.props;
//     fetch(()=>getAuth()).then(this.setUser())
//   }
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
    const { showModal, user } = this.state;
    const { router } = this.props;
    return (
      <>
        <Layout>
          {user ? (
            <>
              <NavigationLink href="/dashboard">DashBoard</NavigationLink>
              <NavigationLink
                as={NakedButton}
                onClick={(event) => {
                  event.preventDefault();
                  this.setUser();
                  localStorage.removeItem("user");
                  router.push("/");
                }}
              >
                Log Out
              </NavigationLink>
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
                  onSignInSuccess={this.setUser}
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

const WithFetchPrivate = withFetch(Private)
const WithRouterPrivate = withRouter(WithFetchPrivate);
export default WithRouterPrivate;
