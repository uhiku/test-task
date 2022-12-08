import { runStore } from "@redux";
import { AppRouter } from "@router";
import React, { StrictMode } from "react";
import { Provider } from "react-redux";

import { useAppHook } from "./app.hook";
import { AppProps } from "./app.props";

const store = runStore();

const App: React.FC<AppProps> = () => {
  useAppHook();
  return (
    <StrictMode>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </StrictMode>
  );
};

export { App };
