import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import Property from './Property';
import Image from './Image';

class ChampionCard extends Component {
  constructor() {
    super();
    this.handleGoToChampion = this.handleGoToChampion.bind(this);
  }

  handleGoToChampion() {
    this.props.history.push(`/${this.props.championName}`);
  }

  render() {
    return (
      <div className="champion-card">
        <div className="champion-card-header">
          <div className="col-1">
            <Image className="img-circle" iconId={this.props.iconId} width={40} height={40} />
          </div>
          <div className="col-2">
            <div className="title">{this.props.championName}</div>
            <div className="subtitle">{this.props.championSubname}</div>
          </div>
          <div className="col-3" onClick={this.handleGoToChampion} role="navigation">
            <FontAwesome className="img-next" name="chevron-right" />
          </div>
        </div>
        <div className="champion-card-content">
          <Property label="Total games" value={this.props.totalGames} />
          <Property label="Win rate" value={this.props.winRate} />
          <Property label="Avg damage" value={this.props.avgDamage} />
          <Property label="Avg healing" value={this.props.avgHeal} />
          <Property label="Avg disables" value={this.props.avgDisables} />
        </div>
      </div>
    );
  }
}

ChampionCard.propTypes = {
  championName: PropTypes.string.isRequired,
  championSubname: PropTypes.string.isRequired,
  totalGames: PropTypes.number.isRequired,
  winRate: PropTypes.string.isRequired,
  iconId: PropTypes.string.isRequired,
  avgDamage: PropTypes.string.isRequired,
  avgHeal: PropTypes.string.isRequired,
  avgDisables: PropTypes.string.isRequired,
};

export default ChampionCard;
