import React from "react";
import styled from "styled-components";
import NavigationButton from "../NavigationButton";

import NavigationLink from "../NavigationLink";
import PostTaskerModal from "./components/PostModal";

const Layout = styled.div`
  display: flex;
`;
const Divider = styled.div`
  width: 1px;
  border-right: 1px solid #dadada;
`;

class Public extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPostModal: false,
    };
    this.togglePostModal = this.togglePostModal.bind(this);
  }
  togglePostModal(event) {
    event.preventDefault();

    this.setState((prevState) => ({
      showPostMadel: !prevState.showPostMadel,
    }));
  }
  render() {
    const { showPostModal } = this.state;
    return (
      <Layout>
        <NavigationLink.Naked href="/">Logo</NavigationLink.Naked>
        <Divider />
        <NavigationButton.Button
          variant="primary"
          href="/post-a-task"
          onClick={this.togglePostModal}
        >
          Post a Task
        </NavigationButton.Button>
        {showPostModal && <PostTaskerModal onClose={this.togglePostModal} />}
        <NavigationLink.Text indictable href="/categories">
          Categories
        </NavigationLink.Text>
        <NavigationLink.Text indictable href="/browser-task">
          Browse Tasks
        </NavigationLink.Text>
        <NavigationLink.Text indictable href="/how-it-work">
          How it Works
        </NavigationLink.Text>
      </Layout>
    );
  }
}

export default Public;
