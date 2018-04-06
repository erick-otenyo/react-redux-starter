import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import React from "react";
import { store, history } from "./store";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={App} />
    </ConnectedRouter>
  </Provider>,

  document.getElementById("root")
);

registerServiceWorker();
