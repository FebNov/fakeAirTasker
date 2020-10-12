import React from "react";
import styled from "styled-components";
import NavigationLink from "../NavigationLink";
import NavigationButton from "../NavigationButton";
import Link from "../../../Link";
import NakedButton from "../../../NakedButton";
import { withRouter } from "../../../Router";
import { AuthenticationContext } from '../../../withAuthentication';
import Logout from './components/Logout';
import AuthenticationModals from '../../../AuthenticationModals';
const Layout = styled.div`
  display: flex;
`;
class Private extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticationModal: null,
    };
    this.setAuthenticationModal = this.setAuthenticationModal.bind(this);
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
  setAuthenticationModal(target) {
    return (event) => {
      if (event) {
        event.preventDefault();
      }

      this.setState({
        authenticationModal: target,
      });
    };
  }
  render() {
    const { authenticationModal } = this.state;
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
            <NavigationLink as={NakedButton} onClick={this.setAuthenticationModal('signIn')}>
                Sign In
              </NavigationLink>
              <NavigationLink as={NakedButton} onClick={this.setAuthenticationModal('signUp')}>
                Sign Up
              </NavigationLink>

              {authenticationModal && (
                  <AuthenticationModals
                    initialModal={authenticationModal}
                    onClose={this.setAuthenticationModal()} />
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

const WithFetchPrivate = withFetch(Private)
const WithRouterPrivate = withRouter(WithFetchPrivate);
export default WithRouterPrivate;
