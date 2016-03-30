import React from 'react';

import { render } from 'react-dom';

import routes from './routes';

import { Router, browserHistory } from 'react-router';

window.React = React;

render(
  <Router history={browserHistory} routes={routes}/>,
  document.querySelector('#root')
);
