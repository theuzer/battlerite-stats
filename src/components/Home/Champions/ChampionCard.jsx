import React from 'react';
import PropTypes from 'prop-types';

import Property from './Property';
import Image from './Image';

const ChampionCard = ({
  championName, totalGames, winRate, iconId, avgDamage, avgHeal, avgDisables,
}) =>
  (
    <div className="card">
      <div className="card-header">
        <div className="col-1">
          <Image className="img-circle" iconId={iconId} width={40} height={40} />
        </div>
        <div className="col-2">
          <div className="title">{championName}</div>
        </div>
        <div className="col-3">
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
      <div className="card-content">
        <Property label="Total games" value={totalGames} />
        <Property label="Win rate" value={winRate} />
        <Property label="Avg damage" value={avgDamage} />
        <Property label="Avg healing" value={avgHeal} />
        <Property label="Avg disables" value={avgDisables} />
      </div>
    </div>
  );

ChampionCard.propTypes = {
  championName: PropTypes.string.isRequired,
  totalGames: PropTypes.number.isRequired,
  winRate: PropTypes.string.isRequired,
  iconId: PropTypes.string.isRequired,
  avgDamage: PropTypes.string.isRequired,
  avgHeal: PropTypes.string.isRequired,
  avgDisables: PropTypes.string.isRequired,
};

export default ChampionCard;
