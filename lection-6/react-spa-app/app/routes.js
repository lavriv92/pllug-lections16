import React from 'react';

import { Route } from 'react-router';

import App from './components/App';
import Index from './components/Index';
import About from './components/About';
import User from './components/User';
import NotFound from './components/NotFound';

export function routes () {}


export default (
  <Route path="" component={App}>
    <Route path="/" component={Index}/>
    <Route path="/about" component={About}/>
    <Route path="/user/:userId" component={User}/>
    <Route path="*"  component={NotFound} />
  </Route>
);
