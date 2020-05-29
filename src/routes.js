import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Repos from './Repos';
import Home from './Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={ Home } />
        <Route path='/repos' component={ Repos }/>
      </Switch>
    </BrowserRouter>
  )
}