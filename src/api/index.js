const axios = require('axios');

const constants = require('./constants');
const filters = require('../static/filters/index');

const getApiValue = (chosenFilters, filterId) => {
  if (chosenFilters === null || typeof (chosenFilters) === 'undefined') {
    return null;
  }
  const f = chosenFilters.filter(x => x.id === filterId)[0];
  return filters
    .filter(x => x.id === f.id)[0].options
    .filter(x => x.key === f.key)[0].api;
};

const getUrl = (chosenFilters) => {
  const timePeriodFilter = getApiValue(chosenFilters, 0);
  const rankedFilter = getApiValue(chosenFilters, 1);
  const teamSizeFilter = getApiValue(chosenFilters, 2);
  const leagueFilter = getApiValue(chosenFilters, 3);

  return constants.host + constants.statsBase + constants.timePeriodFilter(timePeriodFilter) +
         constants.rankedFilter(rankedFilter) + constants.teamSizeFilter(teamSizeFilter) +
         constants.leagueFilter(leagueFilter);
};

exports.getStats = (chosenFilters) => {
  const url = getUrl(chosenFilters);
  console.log(url);
  return axios.get(url);
};
