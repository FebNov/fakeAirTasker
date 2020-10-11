import React from 'react';

const withFetch = (Component) => {
  class Wrapper extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        error: null,
        loading: false,
      };

      this.fetch = this.fetch.bind(this);
    }
fetch(fetcher){
    // fetch(onFetch, errorMessage) {
      this.setState({
        error: null,
        loading: false,
      });
return fetcher()
      // return onFetch()
        .then((res) => {
          this.setState({
            loading: false,
          });

          // if (!res.ok) {
          //   throw res;
          // }

          // const token = res.headers.get('X-Auth-Token');
          // console.log(res.headers.get("Content"))
          // if (token) {
          //   localStorage.setItem('token', token);
          // }

          // return res.json();
          return res.data;
        })
        .catch((error) => {
          // if (errorMessage && errorMessage[error.status]) {
          //   this.setState({
          //     error: errorMessage[error.status],
          //   });
          // }
          this.setState({
            loading: false,
            error: error.response,
          });
          throw error;
        });
    }

    render() {
      const { error, loading } = this.state;

      return (
        <Component
          {...this.props}
          error={error}
          loading={loading}
          fetch={this.fetch}
        />
      );
    }
  }

  return Wrapper;
};

export default withFetch;