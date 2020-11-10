import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import FormVisit from './pages/formVisit'
import FormPostVisit from './pages/formPostVisit';
import Landing from './pages/landing';
import Visits from './pages/visits';

const Routes = () => {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/visit/create" component={FormVisit}/>
        <Route path="/postVisit/create" component={FormPostVisit}/>
        <Route path="/visits" component={Visits}/>
        <Route path="/postVisits" component={FormPostVisit}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
