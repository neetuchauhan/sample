import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Auth from './hoc/Auth';

import Register from './regitration/Register';

const Routes = () => (
  <Switch>
    <Route
      exact
      path="/register"
      name="Register"
      component={Auth(Register, false)}
    />
  </Switch>
);

export default Routes;
