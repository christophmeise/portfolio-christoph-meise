/* eslint-disable no-unused-vars */

const LoadablePlugin = require('@loadable/webpack-plugin');

/** @type { import("gatsby").GatsbyNode } */

const createPages = async ({
  graphql,
  actions: { createPage }
}) => {
  // Create your pages
};

const onCreateWebpackConfig = async ({
  stage,
  loaders,
  actions
}) => {
  actions.setWebpackConfig({
    plugins: [new LoadablePlugin()]
  });
};


const config = {};
exports.config = config;

config.createPages = createPages;
config.onCreateWebpackConfig = onCreateWebpackConfig;

module.exports = config;
