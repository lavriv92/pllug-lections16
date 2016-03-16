import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

window.React = React;

render(
  <App>
    React app content
  </App>,
  document.querySelector('#root')
);
