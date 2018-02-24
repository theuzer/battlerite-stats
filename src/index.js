import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import './index.css';
import Home from './components/Home';
import Player from './components/Player';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:playerName" component={Player} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
