/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa');

const config = withPWA({
  pwa: {
    dest: 'public',
  },
});

module.exports = config;
