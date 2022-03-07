import React from "react";
import ReactDOM from "react-dom";
import "./global.scss";
import App from "./App";
import { ContextProvider } from "./context/dataContext";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
