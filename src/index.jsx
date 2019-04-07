import React from 'react';
import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Cart from './components/Cart';

const appElement = (
  <Cart />
);

render(
  appElement,
  document.querySelector('body'),
);
