import { App } from "@app";
import { runStore } from "@redux";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";

const store = runStore();

const bootstrap = () => {
  const root = document.getElementById("root");
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
  );
};

bootstrap();
