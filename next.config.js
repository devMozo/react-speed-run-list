const withSass = require('@zeit/next-sass');
const path = require('path');

module.exports = withSass({
  webpack(config) {
    // Here is the magic
    // We push our config into the resolve.modules array
    config.resolve.modules.push(path.resolve('./'));

    return config;
  },
});
