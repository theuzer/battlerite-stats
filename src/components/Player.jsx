import React, { Component } from 'react';

import Match from './Player/Match';

import api from '../logic/api/index';

class Player extends Component {
  constructor() {
    super();
    this.state = {
      page: 0,
      matches: [],
      showMoreGamesButton: false,
    };
    this.getPlayerMatches = this.getPlayerMatches.bind(this);
    this.handleGetMoreGames = this.handleGetMoreGames.bind(this);
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

        if (response.data.length) {
          const matches = this.state.matches.concat(response.data);
          if (page === 0) {
            this.setState({
              matches,
              showMoreGamesButton: true,
            });
          } else {
            this.setState({
              matches,
            });
          }
        } else {
          this.setState({
            showMoreGamesButton: false,
          });
        }
      })
      .catch((err) => {
        console.timeEnd('getPlayerMatches');
        console.log(err);
      });
  }

  handleGetMoreGames() {
    const page = this.state.page + 1;
    this.getPlayerMatches(this.props.match.params.playerName, page);
    this.setState({ page });
  }

  render() {
    const matches = this.state.matches.map(match =>
      (
        <Match key={match.id} match={match} />
      ));

    const showMoreGamesButton = this.state.showMoreGamesButton ?
      (<button className="get-more-button" onClick={this.handleGetMoreGames}>MORE</button>) : null;

    return (
      <div>
        {matches}
        {showMoreGamesButton}
      </div>
    );
  }
}

export default Player;
