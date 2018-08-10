import React from 'react';
import { Route, Switch } from 'react-router-dom';

import FrontPage from './containers/front-page/Front-Page';
import SubPage from './containers/sub-page/Sub-Page';

const Routes = ({ store }) => {
  return (
    <Switch>
      <Route exact path='/' component={FrontPage}/>
      <Route  path='/sub' component={SubPage}/>
    </Switch>
  )
}

export default Routes;