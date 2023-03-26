import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./app/store";
import { getTotals } from "./features/orders/ordersSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));
store.dispatch(getTotals());
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
