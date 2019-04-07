import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

import reducers from './reducers';
import Cart from './components/Cart';

/* eslint-disable no-underscore-dangle */
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__;
const store = createStore(reducers, reduxDevtools && reduxDevtools());
/* eslint-enable */

const appElement = (
  <Provider store={store}>
    <Cart />
  </Provider>
);

render(
  appElement,
  document.getElementById('cart'),
);
