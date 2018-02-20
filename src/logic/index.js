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

const roundNumber = (number, decimals) =>
  parseFloat(Math.round(number * 100) / 100).toFixed(decimals);

const formatWinRate = winRate => `${roundNumber(winRate * 100, 2)} %`;

module.exports = {
  handleChampionStats,
  formatWinRate,
};
