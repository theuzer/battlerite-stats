import React from 'react';
import PropTypes from 'prop-types';

import Property from '../../Common/Property';
import Image from '../../Common/Image';

const ChampionCard = ({
  championName, totalGames, winRate, iconId, avgDamage, avgHeal, avgDisables,
}) =>
  (
    <div className="champion-card">
      <div className="left">
        { <Image iconId={iconId} width={100} height={100} /> }
      </div>
      <div className="right">
        <div>{championName}</div>
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
