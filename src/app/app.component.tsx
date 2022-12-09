import { AppRouter } from "@router";
import React, { StrictMode } from "react";

import { useAppHook } from "./app.hook";
import { AppProps } from "./app.props";

const App: React.FC<AppProps> = () => {
  useAppHook();
  return (
    <StrictMode>
      <AppRouter />
    </StrictMode>
  );
};

export { App };
