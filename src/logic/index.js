const handleChampionStats = (stats) => {
  stats.sort((a, b) => {
    if (a.championName > b.championName) {
      return 1;
    }
    if (a.championName < b.championName) {
      return -1;
    }
    return 0;
  });

  return stats.map(stat => ({
    championName: stat.championName,
    duoRankedTotal: stat.duoRanked.gamesCount,
    duoRankedWinrate: Math.round(stat.duoRanked.winRate * 10000) / 100,
    trioRankedTotal: stat.trioRanked.gamesCount,
    trioRankedWinrate: Math.round(stat.trioRanked.winRate * 10000) / 100,
  }));
};

const sortChampions = (champions, sorts) => {
  const activeSort = sorts.filter(x => x.isActive === true)[0];
  if (activeSort.id === 0) {
    if (activeSort.desc === true) {
      champions.sort((a, b) => b.stats.gamesCount - a.stats.gamesCount);
    } else {
      champions.sort((a, b) => a.stats.gamesCount - b.stats.gamesCount);
    }
  } else if (activeSort.id === 1) {
    if (activeSort.desc === true) {
      champions.sort((a, b) => b.stats.winRate - a.stats.winRate);
    } else {
      champions.sort((a, b) => a.stats.winRate - b.stats.winRate);
    }
  }
  return champions;
};

const roundNumber = (number, decimals) =>
  parseFloat(Math.round(number * 100) / 100).toFixed(decimals);

const formatWinRate = winRate => `${roundNumber(winRate * 100, 2)} %`;

module.exports = {
  handleChampionStats,
  formatWinRate,
  roundNumber,
  sortChampions,
};
