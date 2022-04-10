/* eslint-disable no-unused-vars */

import LoadablePlugin from '@loadable/webpack-plugin';

/** @type { import("gatsby").GatsbyNode } */

export const createPages = async ({
  graphql,
  actions: { createPage }
}) => {
  // Create your pages
};

export const onCreateWebpackConfig = async ({
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
