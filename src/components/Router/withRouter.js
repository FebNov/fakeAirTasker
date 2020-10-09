import React from "react";
import RouterContext from "./RouterContext";
const withRouter = (Component) => (props) => (
  <RouterContext.Consumer>
    {(router) => <Component {...props} router={router} />}
  </RouterContext.Consumer>
);

export default withRouter;
