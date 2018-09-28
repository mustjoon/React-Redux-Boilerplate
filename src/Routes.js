import React from 'react';
import { Route, Switch } from 'react-router-dom';

import FrontPage from './containers/front-page/Front-Page';
//import SubPage from './containers/sub-page/Sub-Page';
import SubPageSaga from './containers/sub-page-saga/Sub-Page-Saga';
import ItemPage from './containers/item-page/Item-Page';

import EditItemPage from './containers/edit-item-page/Edit-Item-Page';
import EditAlbumPage from './containers/edit-album-page/Edit-Album-Page';

import AlbumPage from './containers/album-page/Album-Page';
import AlbumsPage from './containers/albums-page/Albums-Page';

const Routes = ({ store }) => {
  return (
    <Switch>
      <Route exact path='/' component={FrontPage}/>
      <Route path='/sub' component={SubPageSaga}/>
      <Route path='/items' component={SubPageSaga}/>
      <Route path='/item/edit/:id' component={EditItemPage}/>
      <Route path='/album/edit/:id' component={EditAlbumPage}/>
      <Route path='/item/:id' component={ItemPage}/>
      <Route path='/album/:id' component={AlbumPage}/>
      <Route path='/albums' component={AlbumsPage}/>
      
    </Switch>
  )
}

export default Routes;