import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import Property from './Property';
import Image from './Image';

const ChampionCard = ({
  championName,
  championSubname,
  totalGames,
  winRate,
  iconId,
  avgDamage,
  avgHeal,
  avgDisables,
  goToChampion,
}) =>
  (
    <div className="champion-card">
      <div className="champion-card-header">
        <div className="col-1">
          <Image className="img-circle" iconId={iconId} width={40} height={40} />
        </div>
        <div className="col-2">
          <div className="title">{championName}</div>
          <div className="subtitle">{championSubname}</div>
        </div>
        <div className="col-3" onClick={goToChampion(championName)} role="navigation">
          <FontAwesome class="img-next" name="chevron-right" />
        </div>
      </div>
      <div className="champion-card-content">
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
  championSubname: PropTypes.string.isRequired,
  totalGames: PropTypes.number.isRequired,
  winRate: PropTypes.string.isRequired,
  iconId: PropTypes.string.isRequired,
  avgDamage: PropTypes.string.isRequired,
  avgHeal: PropTypes.string.isRequired,
  avgDisables: PropTypes.string.isRequired,
  goToChampion: PropTypes.func.isRequired,
};

export default ChampionCard;
