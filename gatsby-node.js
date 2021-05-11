const { createPages } = require('./lib/bootup/createPages');
const { onCreateWebpackConfig } = require('./lib/bootup/webpack');

/** @type { import("gatsby").GatsbyNode } */
const config = {};
exports.config = config;

config.createPages = createPages;
config.onCreateWebpackConfig = onCreateWebpackConfig;

module.exports = config;
