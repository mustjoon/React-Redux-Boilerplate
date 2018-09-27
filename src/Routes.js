import React from 'react';
import { Route, Switch } from 'react-router-dom';

import FrontPage from './containers/front-page/Front-Page';
//import SubPage from './containers/sub-page/Sub-Page';
import SubPageSaga from './containers/sub-page-saga/Sub-Page-Saga';
import ItemPage from './containers/item-page/Item-Page';
import AlbumPage from './containers/album-page/Album-Page';

const Routes = ({ store }) => {
  return (
    <Switch>
      <Route exact path='/' component={FrontPage}/>
      <Route path='/sub' component={SubPageSaga}/>
      <Route path='/items' component={SubPageSaga}/>
      <Route path='/item/:id' component={ItemPage}/>
      <Route path='/album/:id' component={AlbumPage}/>
    </Switch>
  )
}

export default Routes;