import React, { Component } from 'react';

import Filter from './Champions/Filter';
import ChampionCard from './Champions/ChampionCard';

import api from '../../api/index';
import logic from '../../logic/index';

import './style.css';

class Champions extends Component {
  constructor() {
    super();
    this.state = {
      champions: [],
    }
  };

  componentWillMount() {
    api.getStats()
      .then((response) => {
        console.log(response);
        this.setState({
          champions: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const championsList = this.state.champions
      .sort((a, b) => b.totalGames - a.totalGames)
      .map((champion, i) => {
        return (
          <ChampionCard
            key={i} 
            championName={champion.championName}
            totalGames={champion.totalGames}
            winRate={logic.formatWinRate(champion.winRate)}
            iconId={champion.iconId}
          />
        );
      });

    return (
      <div>
        <h1>C</h1>
        <div className="filter-wrap">
          <Filter name="a" />
          <Filter name="b" />
          <Filter name="c" />
          <Filter name="d" />
        </div>
        <div className="champions-wrap">
          {championsList}
        </div>
      </div>
    );
  }
}


export default Champions;
