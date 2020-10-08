import RouterContext from "./RouterContext";
import React from "react";
const withRouter = (Component) => (props) => (
  <RouterContext.Consumer>
    {(router) => <Component {...props} router={router} />}
  </RouterContext.Consumer>
);
export default withRouter;
