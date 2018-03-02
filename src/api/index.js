const axios = require('axios');

const constants = require('./constants');
const filters = require('../static/filters/index');

//
// Homescreen Stats
//
const getStatsFilterValue = (chosenFilters, filterId) => {
  if (chosenFilters === null || typeof (chosenFilters) === 'undefined') {
    return null;
  }
  const f = chosenFilters.filter(x => x.id === filterId)[0];
  return filters
    .filter(x => x.id === f.id)[0].options
    .filter(x => x.key === f.key)[0].api;
};

const getStatsUrl = (chosenFilters) => {
  const timePeriodFilter = getStatsFilterValue(chosenFilters, 0);
  const rankedFilter = getStatsFilterValue(chosenFilters, 1);
  const teamSizeFilter = getStatsFilterValue(chosenFilters, 2);
  const leagueFilter = getStatsFilterValue(chosenFilters, 3);

  return constants.host + constants.stats.base +
         constants.stats.timePeriodFilter(timePeriodFilter) +
         constants.stats.rankedFilter(rankedFilter) +
         constants.stats.teamSizeFilter(teamSizeFilter) +
         constants.stats.leagueFilter(leagueFilter);
};

const getStats = (chosenFilters) => {
  const url = getStatsUrl(chosenFilters);
  console.log(url);

  return axios.get(url);
};

//
// Player matches
//

const getPlayerMatchesUrl = (playerName, page) =>
  constants.host + constants.playerMatches.base +
  constants.playerMatches.playerNameFilter(playerName) +
  constants.playerMatches.pageFilter(page);

const getPlayerMatches = (playerName, page) => {
  const url = getPlayerMatchesUrl(playerName, page);
  console.log(url);

  return axios.get(url);
};

module.exports = {
  getStats,
  getPlayerMatches,
};
