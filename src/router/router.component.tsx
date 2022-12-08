import { AppRouterProps } from "./router.props";
import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

const AppRouter: React.FC<AppRouterProps> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect path="*" to="/me" />
        <Route path="/me"></Route>
      </Switch>
    </BrowserRouter>
  );
};

export { AppRouter };
