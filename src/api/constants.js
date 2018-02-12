module.exports = {
  host: 'https://battlerite-stats.herokuapp.com/api/',
  stats: (year, month, day) => `stats?year=${year}&month=${month}&day=${day}`,
};
