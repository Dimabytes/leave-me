import React from "react";
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from "react-router-dom";

import App from "./components/app";
import ErrorBoundary from "./components/error-bounadry";
import ShopService from "./services/shop-service";
import {ShopServiceProvider} from "./components/shop-service-context";
import store from "./store";
const shopService = new ShopService()

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <ShopServiceProvider value={shopService}>
        <Router>
          <App/>
        </Router>
      </ShopServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
)