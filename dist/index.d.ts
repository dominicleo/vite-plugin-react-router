import { Plugin } from 'vite';

type Options = {
  /**
   * Resolves to the `root` value from Vite config.
   * @default config.root
   */
  root: string;
  /**
   * Relative path to the directory to search for page components.
   * @default 'src/pages'
   */
  pagesDir: string;
};

type UserOptions = Partial<Options>;

declare function router(userOptions?: UserOptions): Plugin;

export default router;
