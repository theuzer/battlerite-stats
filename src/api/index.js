const axios = require('axios');

const constants = require('./constants');

exports.getStats = (year, month, day) => {
  const url = constants.host + constants.stats(year, month, day);
  return axios.get(url);
};
