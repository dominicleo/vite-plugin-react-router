"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/index.ts
var _core = require('@umijs/core');
var MODULE_ID = "vite-plugin-react-router/routes";
var DEFAULT_OPTIONS = {
  root: process.cwd(),
  pagesDir: "src/pages"
};
function resolvedOptions(userOptions) {
  const options = Object.assign(DEFAULT_OPTIONS, userOptions);
  return options;
}
function router(userOptions) {
  const options = resolvedOptions(userOptions);
  return {
    name: "vite-plugin-react-router",
    enforce: "pre",
    resolveId(id) {
      return id === MODULE_ID ? MODULE_ID : null;
    },
    configResolved(config) {
      options.root = config.root;
    },
    async load(id) {
      if (id === MODULE_ID) {
        const config = {root: options.root};
        const route = new (0, _core.Route)();
        const routes = await route.getRoutes({root: options.root, config});
        console.log(routes);
        return ` export default [];`;
      }
    }
  };
}
var src_default = router;


exports.default = src_default;
