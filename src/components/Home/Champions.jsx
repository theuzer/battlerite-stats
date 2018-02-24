import React, { Component } from 'react';

import Filter from './Champions/Filter';
import Sort from './Champions/Sort';
import ChampionCard from './Champions/ChampionCard';

import api from '../../api/index';
import logic from '../../logic/index';
import filters from '../../static/filters/index';
import sorts from '../../static/sorts/index';

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
      sorts: [
        { id: 0, isActive: true, desc: true },
        { id: 1, isActive: false, desc: false },
        { id: 2, isActive: false, desc: false },
        { id: 3, isActive: false, desc: false },
        { id: 4, isActive: false, desc: false },
      ],
    };
    this.getStats = this.getStats.bind(this);
    this.handleOnChangeFilter = this.handleOnChangeFilter.bind(this);
    this.handleOnChangeSort = this.handleOnChangeSort.bind(this);
  }

  componentWillMount() {
    this.getStats();
  }

  getStats() {
    api.getStats(this.state.filters)
      .then((response) => {
        const champions = logic.mapChampionsStats(response.data);
        this.setState({
          champions,
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

  handleOnChangeSort(sortId) {
    const newSorts = this.state.sorts.map((s) => {
      const sort = s;
      if (s.id === sortId) {
        sort.isActive = true;
        sort.desc = !s.desc;
      } else {
        sort.isActive = false;
        sort.desc = false;
      }
      return sort;
    });
    this.setState({
      sorts: newSorts,
    });
  }

  render() {
    const championsList = logic.sortChampions(this.state.champions, this.state.sorts)
      .map((champion, i) => {
        return (
          <ChampionCard
            key={i}
            championName={champion.championName}
            totalGames={champion.totalGames}
            winRate={logic.formatWinRate(champion.winRate)}
            iconId={champion.iconId}
            avgDamage={logic.roundNumber(champion.avgDamage, 2)}
            avgHeal={logic.roundNumber(champion.avgHeal, 2)}
            avgDisables={logic.roundNumber(champion.avgDisables, 2)}
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

    const sortList = this.state.sorts.map((s) => {
      const sort = sorts.filter(x => x.id === s.id)[0];
      return (
        <Sort
          key={sort.id}
          id={sort.id}
          label={sort.label}
          onClickSort={this.handleOnChangeSort}
        />
      );
    });

    return (
      <div>
        <h1>Champions</h1>
        <div className="options-wrap">
          <div className="filter-wrap">
            {filterList}
          </div>
          <div className="sort-wrap">
            {sortList}
          </div>
        </div>
        <div className="champions-wrap">
          {championsList}
        </div>
      </div>
    );
  }
}


export default Champions;
