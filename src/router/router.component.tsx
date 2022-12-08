import { AppRouterProps } from "./router.props";
import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import { Me } from "@pages";

const AppRouter: React.FC<AppRouterProps> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/me">
          <Me />
        </Route>
        <Redirect path="*" to="/me" />
      </Switch>
    </BrowserRouter>
  );
};

export { AppRouter };
