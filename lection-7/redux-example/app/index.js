import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import App from './containers/App';

window.React = React;

render((
  <Provider store={store}>
    <App />
  </Provider>
), document.querySelector('#root'));
