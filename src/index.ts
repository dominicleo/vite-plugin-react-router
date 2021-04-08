import { Plugin } from 'vite';
import { UserOptions } from './types';
import { Route } from '@umijs/core';

const MODULE_ID = 'vite-plugin-react-router/routes';

const DEFAULT_OPTIONS = {
  root: process.cwd(),
  pagesDir: 'src/pages',
};

function resolvedOptions(userOptions?: UserOptions) {
  const options = Object.assign(DEFAULT_OPTIONS, userOptions);
  return options;
}

function router(userOptions?: UserOptions): Plugin {
  const options = resolvedOptions(userOptions);

  return {
    name: 'vite-plugin-react-router',
    enforce: 'pre',
    resolveId(id) {
      return id === MODULE_ID ? MODULE_ID : null;
    },
    configResolved(config) {
      options.root = config.root;
    },
    async load(id) {
      if (id === MODULE_ID) {
        const config = { root: options.root };
        const route = new Route();
        const routes = await route.getRoutes({ root: options.root, config });
        console.log(routes);
        // const stringify = route.getJSON({ routes, config, cwd: options.root });
        // console.log(routes);
        return ` export default [];`;
      }
    },
  };
}

export default router;
