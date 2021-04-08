import router from './dist';
export * from './dist';

export default router;

declare module 'vite-plugin-react-router/routes' {
  const routes = [];
  export default routes;
}
