const https = require('https');

const keepAwake = () => {
  setInterval(() => {
    https.get('https://battlerite-stats.herokuapp.com/');
    console.log('pinged application');
  }, 300000);
};

module.exports = {
  keepAwake,
};
