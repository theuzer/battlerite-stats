import React, { Component } from 'react';

import Header from './Common/Header';

import api from '../api/index';

import './style.css';

class Player extends Component {
  constructor() {
    super();
    this.state = {
      a: '',
    };
    this.getPlayerMatches = this.getPlayerMatches.bind(this);
  }

  componentWillMount() {
    this.getPlayerMatches(this.props.match.params.playerName, 0);
  }

  getPlayerMatches(playerName, page) {
    const i = this.state.a;
    console.time('getPlayerMatches');
    api.getPlayerMatches(playerName, page)
      .then((response) => {
        console.timeEnd('getPlayerMatches');
        console.log(response);
      })
      .catch((err) => {
        console.timeEnd('getPlayerMatches');
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="content">
          <div className="inner-content">
            placeholder
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
