import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Match = ({ match }) => {
  const loadoutList = match.loadout.map((loadout, i) => {
    return (
      <div key={i}>
        {loadout.iconId}
        {loadout.name}
      </div>
    );
  });

  const mode = match.mode === 2 ? '2v2' : '3v3';
  const ranked = match.isRanked === true ? 'RANKED' : 'CASUAL';
  const matchType = `${mode} ${ranked}`;

  const matchIconUrl = `url(${require(`../../static/images/${match.map.iconId}.png`)})`;
  const borderColor = match.win === true ? 'green' : 'red';

  return (
    <div className="match-card" style={{ borderColor }}>
      <div className="match-image" style={{ backgroundImage: matchIconUrl }} />
      <div>{matchType}</div>
      <div>{match.map.name}</div>
      <div>{match.dateCreated}</div>
      {match.numberOfRounds}
      {match.stats.abilityUses}
      {match.champion.name}
      {match.champion.iconId}
      {loadoutList}
    </div>
  );
};

const loadoutShape = {
  name: PropTypes.string.isRequired,
  iconId: PropTypes.string.isRequired,
};

const championShape = {
  name: PropTypes.string.isRequired,
  iconId: PropTypes.string.isRequired,
};

const mapShape = {
  name: PropTypes.string.isRequired,
  iconId: PropTypes.string.isRequired,
};

const matchShape = {
  dateCreated: PropTypes.string.isRequired,
  mode: PropTypes.number.isRequired,
  numberOfRounds: PropTypes.number.isRequired,
  win: PropTypes.bool.isRequired,
  isRanked: PropTypes.bool.isRequired,
  map: PropTypes.shape(mapShape).isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
  champion: PropTypes.shape(championShape).isRequired,
  loadout: PropTypes.arrayOf(PropTypes.shape(loadoutShape)).isRequired,
};

Match.propTypes = {
  match: PropTypes.shape(matchShape).isRequired,
};

export default Match;
