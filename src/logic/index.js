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

  return stats.map((stat) => {
    return {
      championName: stat.championName,
      duoRankedTotal: stat.duoRanked.totalGames,
      duoRankedWinrate: Math.round(stat.duoRanked.winRate * 10000) / 100,
      trioRankedTotal: stat.trioRanked.totalGames,
      trioRankedWinrate: Math.round(stat.trioRanked.winRate * 10000) / 100,
    };
  });
};

const sortChampions = (champions, sorts) => {
  const activeSort = sorts.filter(x => x.isActive === true)[0];
  if (activeSort.id === 0) {
    if (activeSort.desc === true) {
      champions.sort((a, b) => b.totalGames - a.totalGames);
    } else {
      champions.sort((a, b) => a.totalGames - b.totalGames);
    }
  } else if (activeSort.id === 1) {
    if (activeSort.desc === true) {
      champions.sort((a, b) => b.winRate - a.winRate);
    } else {
      champions.sort((a, b) => a.winRate - b.winRate);
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
  sortChampions,
};
