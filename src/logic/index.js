const sorts = require('../static/sorts/index');

const mapChampionsStats = champions =>
  (champions.map(champion => ({
    championName: champion.championName,
    totalGames: champion.stats.gamesCount,
    winRate: champion.stats.winRate,
    iconId: champion.championIcon,
    avgDamage: champion.stats.damageDone / champion.stats.roundsCount,
    avgHeal: champion.stats.healingDone / champion.stats.roundsCount,
    avgDisables: champion.stats.disablesDone / champion.stats.roundsCount,
  })));

const sortDesc = (champions, prop) => champions.sort((a, b) => b[prop] - a[prop]);
const sortAsc = (champions, prop) => champions.sort((a, b) => a[prop] - b[prop]);

const sort = (champions, prop, desc) => {
  if (desc === true) {
    return sortDesc(champions, prop);
  }
  return sortAsc(champions, prop);
};

const sortChampions = (champions, sortOptions) => {
  const activeSortOption = sortOptions.filter(x => x.isActive === true)[0];
  const staticSortOption = sorts.filter(x => x.id === activeSortOption.id);
  return sort(champions, staticSortOption[0].prop, activeSortOption.desc);
};

const roundNumber = (number, decimals) =>
  parseFloat(Math.round(number * 100) / 100).toFixed(decimals);

const formatWinRate = winRate => `${roundNumber(winRate * 100, 2)} %`;

module.exports = {
  mapChampionsStats,
  formatWinRate,
  roundNumber,
  sortChampions,
};
