import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import './index.css';
import Home from './components/Home';
import Player from './components/Player';
import Header from './components/Common/Header';

const App = () =>
  (
    <div>
      <Header />
      <div className="content">
        <div className="inner-content">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/:playerName" component={Player} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );

export default App;
