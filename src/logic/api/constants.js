module.exports = {
  host: 'https://battlerite-stats-api.herokuapp.com/',
  stats: {
    base: 'stats?',
    timePeriodFilter: filter => (filter === null ? '' : `timePeriod=${filter}&`),
    rankedFilter: filter => (filter === null ? '' : `ranked=${filter}&`),
    teamSizeFilter: filter => (filter === null ? '' : `mode=${filter}&`),
    leagueFilter: filter => (filter === null ? '' : `league=${filter}&`),
  },
  playerMatches: {
    base: 'player/matches?',
    playerNameFilter: playerName => (playerName === null ? '' : `playerName=${playerName}&`),
    pageFilter: page => (page === null ? '' : `page=${page}`),
  },
};
