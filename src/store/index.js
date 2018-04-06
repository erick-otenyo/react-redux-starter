import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import { routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import { promiseMiddleware, localStorageMiddleware } from "./middleware";
import rootReducer from "../reducers";

export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history);

const getMiddleware = () => {
  if (process.env.NODE_ENV === "production") {
    return applyMiddleware(
      myRouterMiddleware,
      promiseMiddleware,
      localStorageMiddleware,
      createLogger()
    );
  } else {
    // Enable additional logging in non-production environments.
    return applyMiddleware(
      myRouterMiddleware,
      promiseMiddleware,
      localStorageMiddleware,
      createLogger()
    );
  }
};

export const store = createStore(
  rootReducer,
  composeWithDevTools(getMiddleware())
);
