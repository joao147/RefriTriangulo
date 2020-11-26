import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import StogareContext from './context/context'
 
const PrivateRoute = ({component: Component, ...rest}) => {

  const { isValid } = useContext(StogareContext);

  return (
    <Route
      {...rest}
      render={(props) => (
        isValid
        ? <Component {...props}/>
        : <Redirect to={{pathname:'/login', state: {from : props.location}}} />
      )}
    />
  )
}

export default PrivateRoute;
