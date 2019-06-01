import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import reducers from "./reducers";

import { HashRouter as Router } from "react-router-dom";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancer(applyMiddleware()));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>Hello World</div>
    </Router>
  </Provider>,
  document.querySelector("#main")
);
