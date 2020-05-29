import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Repos from './pages/Repos';
import Home from './pages/Home';

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