import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import FormVisit from './pages/formVisit'

const Routes = () => {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={FormVisit} exact/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
