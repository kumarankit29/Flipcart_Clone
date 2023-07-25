import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
// use for redux in store.js
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // ye DataProvider.jsx m bhi kra thaa
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>{" "}
  </Provider>
);
