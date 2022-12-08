import { App } from "@app";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const bootstrap = () => {
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
};

bootstrap();
