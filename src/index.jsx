import React from 'react';
import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';

const appElement = (
  <App />
);

render(
  appElement,
  document.querySelector('body'),
);
