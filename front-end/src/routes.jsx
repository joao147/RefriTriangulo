import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoute from './privateRoute'

import Landing from './pages/landing';
import FormVisit from './pages/formVisit'
import FormPostVisit from './pages/formPostVisit/index';
import Visits from './pages/visits';
import PostVisits from './pages/postVisits'
import VisitComplete from './pages/visitComplete'
import PostVisitComplete from './pages/postVisitComplete'
import Login from './pages/login'
import StorageProvider from './context/Provider';

const Routes = () => {
  
  return (
    <BrowserRouter>
      <StorageProvider>
        <Switch>
          <PrivateRoute path="/" exact component={Landing}/>
          <PrivateRoute path="/visit/create" exact component={FormVisit}/>
          <PrivateRoute path="/visit/postVisit/create/:id" exact component={FormPostVisit}/>
          <PrivateRoute path="/visit" exact component={Visits}/>
          <PrivateRoute path="/visit/:id" exact component={VisitComplete}/>
          <PrivateRoute path="/postVisit" exact component={PostVisits}/>
          <PrivateRoute path="/postVisit/:id" exact component={PostVisitComplete}/>
          <Route path="/login" exact component={Login}/>
        </Switch>
      </StorageProvider>
    </BrowserRouter>
  )
}

export default Routes;
