import React, { Component } from 'react';

import Filter from './Champions/Filter';
import ChampionCard from './Champions/ChampionCard';

import api from '../../api/index';
import logic from '../../logic/index';
import filters from '../../static/filters/index';

import './style.css';

class Champions extends Component {
  constructor() {
    super();
    this.state = {
      champions: [],
      filters: [
        { id: 0, key: 0 },
        { id: 1, key: 0 },
        { id: 2, key: 0 },
        { id: 3, key: 0 },
      ],
    };
    this.getStats = this.getStats.bind(this);
    this.handleOnChangeFilter = this.handleOnChangeFilter.bind(this);
  }

  componentWillMount() {
    this.getStats();
  }

  getStats() {
    api.getStats(this.state.filters)
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

  handleOnChangeFilter(filterId, e) {
    const filters = this.state.filters;
    filters.filter(x => x.id === filterId)[0].key = parseInt(e.target.value, 10);
    this.setState({
      filters,
    });
    this.getStats();
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

    const filterList = this.state.filters.map((f) => {
      const filter = filters.filter(x => x.id === f.id)[0];
      return (
        <Filter
          key={filter.id}
          id={filter.id}
          label={filter.label}
          opts={filter.options}
          value={f.key}
          onChangeOption={this.handleOnChangeFilter}
        />
      );
    });

    return (
      <div>
        <h1>Champions</h1>
        <div className="filter-wrap">
          {filterList}
        </div>
        <div className="champions-wrap">
          {championsList}
        </div>
      </div>
    );
  }
}


export default Champions;
