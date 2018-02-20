const https = require('https');

const keepAwake = () => {
  setInterval(() => {
    https.get('');
    console.log('pinged application');
  }, 300000);
};

module.exports = {
  keepAwake,
};
