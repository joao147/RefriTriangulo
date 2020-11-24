import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/landing';
import FormVisit from './pages/formVisit'
import FormPostVisit from './pages/formPostVisit';
import Visits from './pages/visits';
import PostVisits from './pages/postVisits'
import VisitComplete from './pages/visitComplete'
import PostVisitComplete from './pages/postVisitComplete'
import Login from './pages/login'

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
        <Route path="/postVisit/:id" exact component={PostVisitComplete}/>
        <Route path="/login" exact component={Login}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
