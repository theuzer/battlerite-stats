const axios = require('axios');

const constants = require('./constants');

exports.getStats = () => {
  const url = constants.host + constants.statsBase;
  return axios.get(url);
};
