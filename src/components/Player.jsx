import React, { Component } from 'react';

import Match from './Player/Match';

import api from '../logic/api/index';

class Player extends Component {
  constructor() {
    super();
    this.state = {
      matches: [],
    };
    this.getPlayerMatches = this.getPlayerMatches.bind(this);
  }

  componentWillMount() {
    this.getPlayerMatches(this.props.match.params.playerName, 0);
  }

  getPlayerMatches(playerName, page) {
    console.time('getPlayerMatches');
    api.getPlayerMatches(playerName, page)
      .then((response) => {
        console.timeEnd('getPlayerMatches');
        console.log(response);
        this.setState({
          matches: response.data,
        });
      })
      .catch((err) => {
        console.timeEnd('getPlayerMatches');
        console.log(err);
      });
  }

  render() {
    const matches = this.state.matches.map(match =>
      (
        <Match key={match.id} match={match} />
      ));

    return (
      <div>
        {matches}
      </div>
    );
  }
}

export default Player;
