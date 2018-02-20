import React from 'react';
import PropTypes from 'prop-types';

import Property from '../../Common/Property';
import Image from '../../Common/Image';

const ChampionCard = ({ championName, totalGames, winRate, iconId }) =>
  (
    <div className="champion-card">
      <div className="left">
        <Image iconId={iconId} width={150} height={150} />
      </div>
      <div className="right">
        <div>{championName}</div>
        <Property label="Total games" value={totalGames} />
        <Property label="Win rate" value={winRate} />
      </div>
    </div>
  );

ChampionCard.propTypes = {
  championName: PropTypes.string.isRequired,
  totalGames: PropTypes.number.isRequired,
  winRate: PropTypes.string.isRequired,
  iconId: PropTypes.string.isRequired,
};

export default ChampionCard;
