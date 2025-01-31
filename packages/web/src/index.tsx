import ReactDOM from "react-dom/client";
import { App } from "./App";
import React from "react";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import "destyle.css";
import "./styles/globalStyles.scss";
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
