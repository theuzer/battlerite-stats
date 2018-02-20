import React from 'react';

import Header from './Common/Header';
import SearchPlayer from './Home/SearchPlayer';
import Champions from './Home/Champions';

import './style.css';

const Home = () =>
  (
    <div>
      <Header />
      <div className="content">
        <div className="inner-content">
          <SearchPlayer />
          <Champions />
        </div>
      </div>
    </div>
  );


export default Home;
