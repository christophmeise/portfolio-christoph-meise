import LoadablePlugin from '@loadable/webpack-plugin';
import { GatsbyNode } from 'gatsby';

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = async ({
  stage,
  loaders,
  actions
}) => {
  actions.setWebpackConfig({
    plugins: [new LoadablePlugin()]
  });
};
