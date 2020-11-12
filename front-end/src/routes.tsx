import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import FormVisit from './pages/formVisit'
import FormPostVisit from './pages/formPostVisit';
import Landing from './pages/landing';
import Visits from './pages/visits';
import VisitComplete from './pages/visitComplete'
import PostVisits from './pages/postVisits'

const Routes = () => {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/visit/create" exact component={FormVisit}/>
        <Route path="/visit/postVisit/create/:id" exact component={FormPostVisit}/>
        <Route path="/visit" exact component={Visits}/>
        <Route path="/visit/:id" exact component={VisitComplete}/>
        <Route path="/postVisit" exact component={PostVisits}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
