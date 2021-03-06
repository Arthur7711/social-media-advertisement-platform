import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import "./i18n";
import Notification from './features/errComponent/Notification'

ReactDOM.render(
  <Provider store={store}>
    <SnackbarProvider maxSnack={3}>
      <Notification />
      <App />
    </SnackbarProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
