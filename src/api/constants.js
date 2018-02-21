module.exports = {
  host: 'https://battlerite-stats-api.herokuapp.com/',
  statsBase: 'stats?',
  timePeriodFilter: (filter) => filter === null ? '' : `timePeriod=${filter}&`,
  rankedFilter: (filter) => filter === null ? '' : `ranked=${filter}&`,
  teamSizeFilter: (filter) => filter === null ? '' : `teamSize=${filter}&`,
  leagueFilter: (filter) => filter === null ? '' : `league=${filter}&`,
};
