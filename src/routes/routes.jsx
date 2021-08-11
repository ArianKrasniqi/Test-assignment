import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from "./config";

const Routes = () => (
  <Router>
    {routes.map((route, i) => {
      return <Route key={i} {...route} render={route.component} />;
    })}
  </Router>
);

export default Routes;
